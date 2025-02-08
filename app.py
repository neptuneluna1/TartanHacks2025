from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

client = OpenAI(
  api_key=os.getenv("OPEN_AI_KEY")
)

minutes = 60
goal = "My goal is to taper for a race I have in two weeks."
level = "beginner"
en = "EN3"

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "developer", "content": "You are a swim coach giving a workout. Just give the workout."},
        {
            "role": "user", "content": f"I have {minutes} minutes to swim today. {goal} I am a {level}, and I want to do a {en} workout."
        }
    ]
)

print(response.choices[0].message)
