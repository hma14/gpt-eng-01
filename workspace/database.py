from pymongo import MongoClient
from models import User
from bson import ObjectId

class Database:
    def __init__(self):
        self.client = MongoClient('mongodb://localhost:27017')
        self.db = self.client['AddressBook']
        self.users_collection = self.db['Users']

    def get_users(self):
        #data = self.users_collection.find({}, {'_id':0})
        data = self.users_collection.find({})
        
        
        list = [User(**user) for user in data]
       
        return list
    def get_user(self, user_id):
        user = self.users_collection.find_one({'_id': user_id})
        if user:
            return User(**user)
        return None

    def add_user(self, user):
        user_id = self.users_collection.insert_one(user).inserted_id
        return str(user_id)

    def update_user(self, user_id, updated_user):
        updated_user._id = ObjectId(updated_user._id)
        result = self.users_collection.update_one({'_id': updated_user._id}, {'$set': updated_user.to_dict()})
        return result.modified_count > 0

    def delete_user(self, user_id):
        objid = ObjectId(user_id)
        result = self.users_collection.delete_one({'_id': objid})
        return result.deleted_count > 0
