import React, { useState } from 'react';
import { get_Users, update_User, add_User, delete_User } from './api';

function EditUserForm({ user, onCancelEdit }) {
  const [formData, setFormData] = useState({
    FirstName: user.FirstName,
    LastName: user.LastName,
    StreetAddress: user.PrimaryAddress.StreetAddress,
    City: user.PrimaryAddress.City,
    Province: user.PrimaryAddress.Province,
    PostalCode: user.PrimaryAddress.PostalCode,

  });

  const handleSaveChanges = async () => {
    // Make a PUT request to update the user's data
    //await axios.put(`${API_BASE_URL}/users/${user._id}`, formData);
    const response = await update_User(user._id, formData);

    onCancelEdit();
    
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };

  // Form rendering and input fields go here

  return (
    <tr>
      <td>
        <input
          type="text"
          className="form-control m-2 col"
          id="FirstName"
          name="FirstName"
          value={formData.FirstName}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control m-2 col"
          id="LastName"
          name="LastName"
          value={formData.LastName}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control m-2 col"
          id="StreetAddress"
          name="StreetAddress"
          value={formData.StreetAddress}
          onChange={handleInputChange}
        />
      </td>
      <td >
        <input
          type="text"
          className="form-control m-2 col"
          id="City"
          name="City"
          value={formData.City}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control m-2 col"
          id="Province"
          name="Province"
          value={formData.Province}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control m-2 col"
          id="PostalCode"
          name="PostalCode"
          value={formData.PostalCode}
          onChange={handleInputChange}
        />
      </td>
      <td className='col-2'>
        <button className='btn btn-info btn-sm m-2' type="button" onClick={handleSaveChanges}>Save </button>
        <button className='btn btn-info btn-sm ms-4' type="button" onClick={onCancelEdit}>Cancel</button>
      </td>
    </tr>

  );
}

export default EditUserForm;
