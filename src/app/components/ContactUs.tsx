import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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
          fullname: fullname,
          subject: subject,
          message: message,
        }),
      });

      const { error }  = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Subscribe");

        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Subscribe");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(fullname, email, subject, message);
  };
  return (
    <header className="flex items-center justify-center">
      <form
        onSubmit={sendEmail}
        className="
        rounded-lg 
        shadow-xl 
        flex 
        flex-col 
        px-8 
        py-8 
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
          className="text-gray-500 font-light mt-4 dark:text-gray-50"
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
        <div className="flex flex-row items-center justify-start">
          <button className="
          px-10 
          mt-8 
          py-2 
          bg-white 
          text-seaBlue-700 
          hover:bg-seaBlue-100 
          hover:text-seaBlue-700 
          rounded-md 
          text-lg 
          flex 
          flex-row 
          items-center
          ">
            {buttonText} <FontAwesomeIcon icon={faEnvelope} className="pl-2" style={{ color: "#0b1dee" }}/>
          </button>

        </div>
        <div className="text-left">
          {showSuccessMessage && (
            <p className="text-green-500 font-semibold text-sm my-2">
              Thankyou! Your Message has been delivered.
            </p>
          )}
          {showFailureMessage && (
            <p className="text-red-500">
              Oops! Something went wrong, please try again.
            </p>
          )}
        </div>
      </form>
    </header>
  );
}