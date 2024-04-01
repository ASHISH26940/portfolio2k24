import React, { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import '../styles/Email.css';
import db from '../firebase/Firebase.js';

const Email = () => {
  const [email, setEmail] = useState('');

  const handleSendClick = () => {
    const userId = generateUserId();

    // Write user data and email to Firebase
    writeUserData(userId, email)
      .then(() => {
        console.log('Email and user data added to Firebase:', email);
        setEmail(''); // Clear the input field after successful submission
      })
      .catch(error => {
        console.error('Error adding email and user data to Firebase:', error.message);
      });
  };

  const generateUserId = () => {
    // Generate a unique user ID as per your requirements
    return 'user_' + Math.random().toString(36).substring(2, 9);
  };

  const writeUserData = (userId, email) => {
    const db = getDatabase();
    //const userRef = ref(db, 'users/' + userId);
    const emailRef = ref(db, 'emails/' + userId);

    // Write user data
    return Promise.all([
      // Write email
      set(emailRef, email)
    ]);
  };

  return (
    <div>
      <form className='form'>
        <input
          type="text"
          className='email'
          placeholder='Enter the email ...'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" className='btns' onClick={handleSendClick}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Email;
