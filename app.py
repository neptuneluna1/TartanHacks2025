from openai import OpenAI
from db import mongo
from dotenv import load_dotenv
import os

load_dotenv()

client = OpenAI(
  api_key=os.getenv("OPEN_AI_KEY")
)

users = mongo.get_collection('users')

user = mongo.db.users.find_one({'username': 'ArchZak'})
level = user.get('level')
goal = user.get('goal')
end_date = user.get('end_date_of_goal')
workout_length = user.get('temp').get('workout_length')
en = user.get('temp').get('workout_today')

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {
            "role": "system",
            "content": (
                "You are a swim coach creating structured swim workouts based on different energy systems (EN1, EN2, EN3). "
                "Generate only the main workout, ensuring it fits within the given time. Format the workout as a list with sets "
                "Separated by '!!' so it can be processed easily on a website. Don't include whitespace"
                "Start every workout with '400 free warm-up!!' and end with '200 free warm-down'. "
                "Ensure workouts match the swimmer's level and requested intensity."
            )
        },
        {
            "role": "user",
            "content": (
                f"I have {workout_length} minutes to swim today. {goal} on {end_date} "
                f"I am a {level} swimmer, and I want an {en} workout."
            )
        }
    ]
)

workout = response.choices[0].message.content

mongo.db.users.find_one_and_update(
    {'username': 'ArchZak'},
    {'$set': {'workout': workout}}
)