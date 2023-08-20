import React, { useState } from 'react';

function UserForm({ onAdd }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      FirstName: firstName,
      LastName: lastName,
      PrimaryAddress: {
        StreetAddress: streetAddress,
        City: city,
        Province: province,
        PostalCode: postalCode
      }
    };

    onAdd(user);

    setFirstName('');
    setLastName('');
    setStreetAddress('');
    setCity('');
    setProvince('');
    setPostalCode('');
  };

  return (
    <div className='card'>
      <h2 className='m-2 ms-4'>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className='row m-3'>       
          <input
            type="text"
            className="form-control m-2 col"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="First Name"
          />
          <input
            type="text"
            className="form-control m-2 col"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder="Last Name"
          />
          <input
            type="text"
            className="form-control m-2 col"
            id="streetAddress"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            required
            placeholder="Street Address"
          />
        </div>
        <div className='row m-3'>
          <input
            type="text"
            className="form-control m-2 col"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            placeholder="City"
          />
          <input
            type="text"
            className="form-control m-2 col"
            id="province"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            required
            placeholder="Province"
          />
          <input
            type="text"
            className="form-control m-2 col"
            id="postalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
            placeholder="Postal/Zip Code"
          />
        </div>
        <button type="submit" className="btn btn-primary  m-4 float-end">Add</button>
      </form>
    </div>
  );
}

export default UserForm;
