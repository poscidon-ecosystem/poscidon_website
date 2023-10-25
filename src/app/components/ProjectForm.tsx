'use client';

import { useState } from 'react';
import Button from '../components/Button';
import styles from '../components/Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';
import Link from 'next/link';
import Head from 'next/head';

export default function ProjectForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [strategy, setStrategy] = useState('');
  const [country, setCountry] = useState('');
  const [buttonText, setButtonText] = useState('Submit');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const [errors, setErrors] = useState({
    title: false,
    description: false,
    strategy: false,
    country: false,
  });

  countries.registerLocale(enLocale);

  const obj = countries.getNames('en', { select: 'official' });
  const arr = Object.entries(obj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  const handleErrors = ({ tempErrors }) => {
    setErrors({ ...tempErrors });
    setTimeout(() => {
      setErrors({
        title: false,
        description: false,
        strategy: false,
        country: false,
      });
    }, 6000);
  };

  const handleValidation = () => {
    let tempErrors = {
      title: false,
      description: false,
      strategy: false,
      country: false,
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
    if (country.length <= 0) {
      tempErrors.country = true;
      isValid = false;
    }

    handleErrors({ tempErrors });
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
          strategy: strategy,
          country: country,
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
          country: response.country,
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
        setStrategy('');
        setCountry('');
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
        setStrategy('');
        setCountry('');
        return;
      }

      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('Submit');
      // Reset form fields
      setTitle('');
      setDescription('');
      setStrategy('');
      setCountry('');
    }
  }

  return (
    <>
    <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link
    rel="canonical"
    href={`https://poscidon.com/research`}
    key="canonical"
  />
  </Head>
    <div
      className="
        flex
        w-full 
        max-w-full
        flex-col
        items-center
        justify-center
        sm:pt-12
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
        <h1
          className={`
          flex 
          w-[90%] 
          max-w-full
          items-center
          justify-center
          text-center
          font-proximaSemiBold
          text-4xl
          text-seaBlue-700 
          sm:w-[75%]
          sm:text-5xl
          lg:text-6xl
          `}
        >
          Get Your Personalized Medicine Project Funded
        </h1>
        <p
          className="
            flex
            w-[70%] 
            items-center 
            justify-center 
            py-8 
            text-center 
            text-base
            sm:w-[60%]
            sm:text-lg
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
              Commercialization strategy
              <span className="text-red-500">*</span>
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
            <select
              className={`
                rounded-3xl 
                p-4
                shadow 
                ring-tropicalBlue  
                focus:outline-none 
                focus:ring-2
                ${country.length > 0 ? 'text-black' : 'text-gray-400'}
                `}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option hidden>Select Country...</option>
              {arr.map(({ label, value }) => (
                <option key={value} value={label}>
                  {label}
                </option>
              ))}
            </select>
            {errors?.country && (
              <p className="text-red-500">A country must be selected.</p>
            )}
          </section>
          <div className="my-8 flex w-full items-center justify-center">
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
                  style={{ color: '#FDFDFD' }}
                />
              }
              style={styles.primary}
            />
          </div>
          <div className="text-left text-lg">
            {showSuccessMessage && (
              <p className="font-semibold mb-6 py-4 text-green-500">
                Thank you! Your project has been submitted and will be reviewed
                shortly. <br></br>
                <Link
                  className="text-seaBlue-700 underline"
                  href="https://discord.gg/TXZZV5KXmn"
                  target="_blank"
                >
                  Join our discord
                </Link>{' '}
                to stay up to date with your submission progress.
              </p>
            )}
            {showFailureMessage && (
              <p className="font-semibold text-red-500 mb-6 py-4">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
