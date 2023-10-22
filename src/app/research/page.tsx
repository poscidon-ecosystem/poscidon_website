'use client';

import { useState } from 'react';
import Button from '../components/Button';
import styles from '../components/Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Countries from '../components/Countries';

export default function Research() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [strategy, setStrategy] = useState('');
  const [buttonText, setButtonText] = useState('Submit');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const [errors, setErrors] = useState({
    title: false,
    description: false,
    strategy: false,
    countries: false
  });

  const handleValidation = () => {
    let tempErrors = {
      title: false,
      description: false,
      strategy: false,
      countries: false
    };
    let isValid = true;

    if (title.length <= 0) {
      tempErrors.title = true;
      isValid = false;
    }
    if (description.length <= 0) {
      tempErrors.description = true;
      isValid = false;
    }
    if (strategy.length <= 0) {
      tempErrors.strategy = true;
      isValid = false;
    }
    if (strategy.length <= 0) {
      tempErrors.countries = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log('errors', errors);
    return isValid;
  };

  async function upload(e) {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText('Submitting...');
      const res1 = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      });
      const response = await res1.json();
      const res2 = await fetch('/api/project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          txId: response.txId,
          title: response.title,
          description: response.description,
          strategy: response.strategy,
        }),
      });
      const { errorUpload } = response;
      if (errorUpload) {
        console.log(errorUpload);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('Submit');

        setTitle('');
        setDescription('');
        return;
      }
      const { errorSending } = await res2.json();
      if (errorSending) {
        console.log(errorSending);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('Submit');

        setTitle('');
        setDescription('');
        return;
      }

      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('Submit');
      // Reset form fields
      setTitle('');
      setDescription('');
    }
  }

  return (
    <div
      className="
        flex
        w-full
        max-w-full
        flex-col 
        items-center
        justify-center
        sm:pt-12
        md:w-[100%] 
        lg:w-[85%] 
        xl:w-[65%] 
        "
    >
      <div
        className="
        flex 
        flex-col 
        items-center 
        justify-center 
        pt-8
        "
      >
        <div
          className={`
          flex 
          w-full 
          max-w-full
          items-center 
          justify-center
          text-center
          font-proximaSemiBold
          text-4xl
          text-seaBlue-700
          sm:w-[85%]
          sm:text-5xl
          lg:text-6xl
          `}
        >
          Get your Personalized Medicine Project Funded
        </div>
        <p
          className="
            flex
            w-[60%]
            items-center 
            justify-center 
            py-8 
            text-center 
            text-base 
            sm:text-lg
            xl+:w-[70%]
          "
        >
          Provide information about your project and specify how to generate and
          potentially commercialize assets such as data and intellectual
          property.
        </p>
      </div>
      <div
        className="        
            w-[90%]
            sm:w-[80%]"
      >
        <form onSubmit={upload} className="flex flex-col">
          <section className="flex flex-col py-2">
            <label
              htmlFor="title"
              className="my-4 font-proximaSemiBold text-seaBlue-700"
            >
              Project Title<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder={`Identifying genes related to sensitivity to chemotherapy in renal carcinoma organoids`}
              name="title"
              className="
                    rounded-3xl 
                    p-4
                    shadow 
                    ring-tropicalBlue 
                    focus:rounded-3xl 
                    focus:outline-none 
                    focus:ring-2
                    "
            />
            {errors?.title && (
              <p className="text-red-500">Title cannot be empty.</p>
            )}
          </section>
          <section className="flex flex-col py-2">
            <label
              htmlFor="description"
              className="my-4 font-proximaSemiBold text-seaBlue-700"
            >
              Project Description<span className="text-red-500">*</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder={`Every renal carcinoma patient responds differently to chemotherapies. Identification of responding patient groups based on genetic background is key to...`}
              name="description"
              className="
                h-40
                rounded-3xl 
                p-4
                shadow 
                ring-tropicalBlue 
                focus:rounded-3xl 
                focus:outline-none 
                focus:ring-2
                "
            />
            {errors?.description && (
              <p className="text-red-500">Description cannot be empty.</p>
            )}
          </section>
          <section className="flex flex-col py-2">
            <label
              htmlFor="strategy"
              className="my-4 font-proximaSemiBold text-seaBlue-700"
            >
              Commercialization strategy<span className="text-red-500">*</span>
            </label>
            <textarea
              value={strategy}
              onChange={(e) => {
                setStrategy(e.target.value);
              }}
              placeholder={`Describe here how you expect to generate assets such as data and intellectual property and how to commercialize them. It does not have to be final.`}
              name="strategy"
              className="
                h-40
                rounded-3xl 
                p-4
                shadow 
                ring-tropicalBlue 
                focus:rounded-3xl 
                focus:outline-none 
                focus:ring-2
                "
            />
            {errors?.strategy && (
              <p className="text-red-500">
                Commercialization strategy cannot be empty.
              </p>
            )}
          </section>
          <section className="flex flex-col py-2">
            <label
                htmlFor="description"
                className="my-4 font-proximaSemiBold text-seaBlue-700"
                >
                Research country<span className="text-red-500">*</span>
            </label>
            <Countries/>
            {errors?.countries && (
              <p className="text-red-500">
                Commercialization strategy cannot be empty.
              </p>
            )}
          </section>
          <div className="my-4 flex w-full items-start justify-start">
            <Button
              link={false}
              type={'submit'}
              onClick={''}
              text={`${buttonText}`}
              href={''}
              icon={
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="pl-2"
                  style={{ color: 'white' }}
                />
              }
              style={styles.btncolor}
            />
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p className="my-2 text-sm font-semibold text-green-500">
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
      </div>
    </div>
  );
}
