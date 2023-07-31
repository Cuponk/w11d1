import React, { useState } from 'react';

const Form = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    phoneType: '',
    staff: '',
    bio: '',
    emailNotifications: false
  });

  const validation = () =>{
    let error = {};
    if (!formState.name){
        error.name = 'Invalid name';
    }
    if (!formState.email){
        error.email = 'Invalid email';
    }
    if (!formState.phoneNumber){
        error.phoneNumber = 'Invalid name';
    }
    if (!formState.phoneType){
        error.phoneType = 'Invalid name';
    }
    if (!formState.bio){
        error.bio = 'Invalid name';
    }
    if (!formState.emailNotifications){
        error.emailNotifications = 'Invalid name';
    }
    return error
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(validation()){
        console.log('error');
    } else {
    console.log(formState);
    setFormState({
      name: '',
      email: '',
      phoneNumber: '',
      phoneType: '',
      staff: '',
      bio: '',
      emailNotifications: false
    })
}
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formState.name} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" value={formState.email} onChange={handleInputChange} />
      </label>
      <label>
        Phone Number:
        <input type="text" name="phoneNumber" value={formState.phoneNumber} onChange={handleInputChange} />
      </label>
      <label>
        Phone Type:
        <input type="text" name="phoneType" value={formState.phoneType} onChange={handleInputChange} />
      </label>
      <label>
        Staff:
        <input type="text" name="staff" value={formState.staff} onChange={handleInputChange} />
      </label>
      <label>
        Bio:
        <input type="text" name="bio" value={formState.bio} onChange={handleInputChange} />
      </label>
      <label>
        Email Notifications:
        <input type="checkbox" name="emailNotifications" value={formState.emailNotifications} onChange={handleInputChange} />
      </label>
      {/* Repeat the label and input for other fields */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
