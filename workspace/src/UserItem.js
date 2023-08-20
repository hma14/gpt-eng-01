import React, { useState } from 'react';
import './App.css';
import EditUserForm from './EditUserForm';


function UserItem({ user, onDelete }) {
    const [editingUser, setEditingUser] = useState(null);

    const handleEdit = (user) => {
        setEditingUser(user);       
    };

    const handleCancelEdit = () => {
        setEditingUser(null);
        window.location.reload();
    };
    return (
        editingUser === user ? (
            <EditUserForm user={user} onCancelEdit={handleCancelEdit} />
        ) : (
            <tr key={user._id}>
                <td>{user.FirstName}</td>
                <td>{user.LastName}</td>
                <td>{user.PrimaryAddress.StreetAddress || ''}</td>
                <td>{user.PrimaryAddress.City || ''}</td>
                <td>{user.PrimaryAddress.Province || ''}</td>
                <td>{user.PrimaryAddress.PostalCode || ''}</td>
                <td>
                    <button className="btn btn-warning btn-sm" onClick={() => onDelete(user._id)}>Delete</button>
                    <button className="btn btn-warning btn-sm ms-4 " onClick={() => handleEdit(user)}>Update</button>
                </td>
            </tr>
        )
    );
}

export default UserItem;
