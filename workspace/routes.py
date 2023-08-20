from flask import Blueprint, jsonify, request
from database import Database
from models import User
from flask_cors import CORS
from bson import ObjectId
import json

users_bp = Blueprint('users', __name__, url_prefix='/api/users')
CORS(users_bp)

# Connect to the MongoDB database
db = Database()

@users_bp.route('/', methods=['GET'])
def get_users():
    
    data = db.get_users()  
    return jsonify([user.to_dict() for user in data])

@users_bp.route('/add', methods=['POST'])
def add_user():
    print('hello')
    data = request.get_json()
    print(data)
    # print (data)
    
    # user = User(
    #     FirstName=data['FirstName'],
    #     LastName=data['LastName'],
    #     PrimaryAddress= data['PrimaryAddress']       
    # )
    
    user = {
        'FirstName': data['FirstName'],
        'LastName': data['LastName'],
        'PrimaryAddress': data['PrimaryAddress']       
    }
    
    user_id = db.add_user(user)
    print(user_id)
    return jsonify({'user_id': user_id})

@users_bp.route('/<user_id>', methods=['PUT'])
def update_user(user_id):  
    data = request.get_json()
    print('data = ', data)
    updated_user = User(
        _id = user_id,
        FirstName=data['FirstName'],
        LastName=data['LastName'],
        PrimaryAddress={
            'StreetAddress': data['StreetAddress'],
            'City':data['City'],
            'Province':data['Province'],
            'PostalCode':data['PostalCode']
        }
    )
 
    print(updated_user.FirstName)
    success = db.update_user(user_id, updated_user)
    print('success = ', success)
    return jsonify({'success': success})

@users_bp.route('/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    print('user_id = ', user_id)
    success = db.delete_user(user_id)
    return jsonify({'success': success})
