The core classes, functions, and methods that will be necessary for this project are as follows:

1. Backend (Python/Flask):
   - `app.py`: The main entry point of the Flask application.
   - `database.py`: Handles the connection to the MongoDB database and provides CRUD operations for the Users collection.
   - `models.py`: Defines the data models for the Users collection and its sub-object PrimaryAddress.
   - `routes.py`: Defines the API routes for CRUD operations on the Users collection.

2. Frontend (React.js):
   - `App.js`: The main component that renders the UI and manages the state of the application.
   - `UserList.js`: Renders the list of users and handles pagination.
   - `UserForm.js`: Renders the form for adding a new user and handles form submission.
   - `UserItem.js`: Renders an individual user item in the list.
   - `api.js`: Handles API requests to the backend for CRUD operations.

3. HTML/CSS:
   - `index.html`: The main HTML file that includes the React app and Bootstrap CSS.

Now let's proceed with creating the files and writing the code.

**app.py**
