'use client';

import React, { useState } from 'react';
import Button from './Button';
import styles from './Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');

  const [errors, setErrors] = useState({
    fullname: false,
    email: false,
  });

  const [buttonText, setButtonText] = useState('Subscribe');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {
      fullname: false,
      email: false,
    };
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors.fullname = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors.email = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log('errors', errors);
    return isValid;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText('Subscribing...');
      const res = await fetch('/api/sendgrid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          fullname: fullname,
        }),
      });

      console.log(res);
      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('Subscribe');

        setFullname('');
        setEmail('');
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('Subscribe');
      // Reset form fields
      setFullname('');
      setEmail('');
    }
    console.log(fullname, email);
  };
  return (
    <form
      onSubmit={sendEmail}
      className="
        mb-16 
        flex 
        w-full 
        flex-col 
        rounded-3xl
        bg-seaBlue-700
        p-8
        shadow-xl"
    >
      <h1 className="text-2xl font-bold text-white">Stay up to date</h1>
      <p className="py-4 text-white">
        Want to know more about what PoSciDon decentralized autonomous
        organisation is doing? Sign up for the PoSciDonDAO newsletter for news,
        events and more!
      </p>
      <label htmlFor="name" className="mt-4 font-light text-white">
        Name<span className="text-red-500">*</span>
      </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder='John Doe'
        value={fullname}
        onChange={(e) => {
          setFullname(e.target.value);
        }}
        className="border-b bg-transparent py-2 text-white ring-tropicalBlue focus:rounded-md focus:outline-none focus:ring-1"
      />
      {errors?.fullname && (
        <p className="text-red-500">Name cannot be empty.</p>
      )}

      <label htmlFor="email" className="mt-4 font-light text-white ">
        E-mail<span className="text-red-500">*</span>
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder='johndoe@domain.com'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="
          border-b 
          bg-transparent 
          py-2 
          text-white 
          ring-tropicalBlue 
          focus:rounded-md 
          focus:outline-none 
          focus:ring-1
          "
      />
      {errors?.email && <p className="text-red-500">Email cannot be empty.</p>}
      <div className="my-8 flex flex-row items-center justify-start">
        <Button
          link={false}
          type={'submit'}
          target={'_blank'}
          onClick={null}
          text={buttonText}
          href={''}
          style={styles.secondary}
          icon={
            <FontAwesomeIcon
              icon={faEnvelope}
              className="pl-2"
              style={{ color: '#0b1dee' }}
            />
          }
        />
      </div>
      <div className="text-left">
        {showSuccessMessage && (
          <p className="my-2 text-sm font-semibold text-green-500">
            Successfully subscribed, thank you!
          </p>
        )}
        {showFailureMessage && (
          <p className="text-red-500">
            Oops! Something went wrong, please try again.
          </p>
        )}
      </div>
    </form>
  );
}
