from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

database = os.getenv("DATABASE")
connection = os.getenv("CONNECTION_STRING")

class MongoDBClient:
    def __init__(self, link=connection, db_name=database):
        self.client = MongoClient(link)
        self.db = self.client[db_name]

    def get_collection(self, name):
        return self.db[name]

mongo = MongoDBClient()