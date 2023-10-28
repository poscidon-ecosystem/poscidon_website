'use client';

import React, { useState } from "react";
import Button from "./Button";
import styles from "./Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({
    fullname: false, 
    email: false
  });

  const [buttonText, setButtonText] = useState("Subscribe");

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
    console.log("errors", errors);
    return isValid;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Subscribing...");
      const res = await fetch("/api/sendgrid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          fullname: fullname
        }),
      });

      console.log(res);
      const { error }  = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Subscribe");

        setFullname("");
        setEmail("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Subscribe");
      // Reset form fields
      setFullname("");
      setEmail("");
    }
    console.log(fullname, email);
  };
  return (
    <>
      <form
        onSubmit={sendEmail}
        className="
        rounded-3xl 
        shadow-xl 
        flex 
        flex-col 
        p-8
        mb-16
        w-full
        bg-seaBlue-700"
      >
        <h1 className="text-2xl font-bold text-white">
          Stay up to date
        </h1>
        <p className="text-white py-4">
          Want to know more about what PoSciDon decentralized autonomous organisation is doing?
          Sign up for the PoSciDonDAO newsletter for news, events and more! 
        </p>
        <label
          htmlFor="fullname"
          className="text-white font-light mt-4"
        >
          Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value);
          }}
          name="fullname"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-tropicalBlue text-white"
        />
        {errors?.fullname && (
          <p className="text-red-500">Full name cannot be empty.</p>
        )}

        <label
          htmlFor="email"
          className="text-white font-light mt-4 "
        >
          E-mail<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="
          bg-transparent 
          border-b 
          py-2 
          pl-4 
          focus:outline-none 
          focus:rounded-md 
          focus:ring-1 
          ring-tropicalBlue 
          text-white"
        />
        {errors?.email && (
          <p className="text-red-500">Email cannot be empty.</p>
        )}
        <div className="flex flex-row items-center justify-start my-8">
        <Button
          link={false}
          type={"submit"}
          onClick={null}
          text={buttonText}
          href={''}
          style={styles.secondary}
          icon={<FontAwesomeIcon icon={faEnvelope} className="pl-2" style={{ color: "#0b1dee" }}/>}
          /> 
        </div>
        <div className="text-left">
          {showSuccessMessage && (
            <p className="text-green-500 font-semibold text-sm my-2">
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
    </>
  );
}