import axios from 'axios';

// Define the base URL for your API
const API_BASE_URL = 'http://localhost:5000/api/users';


// Function to get user data
export const get_User = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Function to get user data
export const get_Users = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}`);       
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Function to add a new user
export const add_User = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/add`, userData);
        return response.data;
    } catch (error) {
        console.error('Error adding user:', error);       
    }
};

// Update an existing user
export const update_User = async (userId, updatedData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/${userId}`, updatedData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Delete a user
export const delete_User = async (userId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
