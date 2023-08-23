import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import EditUserForm from './EditUserForm';
import { get_Users, update_User, add_User, delete_User } from './api';
import axios from 'axios';


const API_BASE_URL = 'http://gpt-eng-01.lottotry.com:5000/api/users';

function App() {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers(); 
  }, []);


  const fetchUsers = async () => {
    try {
      const response =  await get_Users();     
      setData(response)    
      
    } catch (error) {
      console.error("Error fetching data: ", error)
    }

  };


  const addUser = async (user) => {
    const response = await add_User(user);
    if (response['user_id']) {
      fetchUsers();
    }
  };

  const updateUser = async (userId, user) => {

    const response = await update_User(userId, user);
    
    if (response.data.success) {
      fetchUsers();
    }
  };

  const deleteUser = async (userId) => {
    const response = await delete_User(userId);
    console.log(response.success)
    if (response.success) {
      fetchUsers();
    }
  };


  const handleEdit = (user) => {
    console.log('user = ', user)
    setSelectedUser(user);
  };

  const handleUpdate = async (selectedUser) => {
    try {
      
      // Make a PUT request to update the user's data
      const response = await axios.put(`${API_BASE_URL}/${selectedUser._id}`, selectedUser);
      // Update the users list with the updated user
      const updatedUsers = users.map((user) =>
        user._id === selectedUser._id ? response.data : user
      );
      setUsers(updatedUsers);
      setSelectedUser(null); // Clear the selected user
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="container">
      <UserList data={data} onDelete={deleteUser} />
      <UserForm onAdd={addUser} />
      
    </div>
  );
}

export default App;
