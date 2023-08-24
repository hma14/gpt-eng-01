from flask import Flask, jsonify, request
from flask_cors import CORS
#from database import Database
from routes import users_bp

app = Flask(__name__)
CORS(app)

# Connect to the MongoDB database
#db = Database()

# Register the users blueprint
app.register_blueprint(users_bp)

@app.route('/')
def index():
    return "Hi there!"

if __name__ == '__main__':
    app.run(debug=True)
