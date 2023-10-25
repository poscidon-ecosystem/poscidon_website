'use client';

import Image from 'next/image';
import Link from 'next/link';
import ContactUs from './components/ContactUs';
import { useState } from 'react';
import Button from './components/Button';
import styles from './components/Button.module.css';

export default function Home() {
  const [resSrc, setResSrc] = useState('/ResearchWhite.webp');
  const [comSrc, setComSrc] = useState('/CommunityWhite.webp');
  const [tokSrc, setTokSrc] = useState('/TokensWhite.webp');
  //https://discord.gg/TXZZV5KXmn

  return (
    <div
      className="
        flex
        w-full
        max-w-full
        flex-col 
        items-center
        justify-center
        px-8
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
        justify-between 
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
          sm:w-[95%]
          sm:text-5xl
          lg:text-6xl
          `}
        >
          Revolutionizing Personalized Medicine Research Funding
        </div>
        <div
          className={`
          flex
          w-[70%] 
          items-center 
          justify-center 
          py-8 
          text-center 
          text-base
          sm:text-lg
          `}
        >
          PoSciDon Decentralized Autonomous Organisation (DAO) focuses on
          funding research projects that develop personalized treatments for
          patients affected by life-altering diseases such as cancer and
          Alzheimer's disease. Together with your help we can change the lives
          of people affected by these diseases.
        </div>
        <div className="flex gap-4">
          <Button
            link={true}
            type={'button'}
            onClick={null}
            text={`Become a donor`}
            href={'https://test.poscidon.com/donation'}
            icon={''}
            style={styles.primary}
          />
          <Button
            link={true}
            type={'button'}
            onClick={null}
            text={`Join the DAO`}
            href={'https://discord.gg/QKzZkrYpw7'}
            icon={''}
            style={styles.secondary}
          />
        </div>
      </div>
      <div
        className="
        flex
        w-full
        max-w-full 
        flex-col
        items-center
        justify-center
        gap-6
        py-8
        sm:py-16
        md:flex-row
        md:items-start
        md:justify-start
        "
      >
        <div
          className="
          flex 
          h-full
          w-full
          max-w-full
          flex-col
          items-start
          justify-start 
          "
        >
          <Link
            href="/research"
            className="
              flex
              items-center
              justify-center
              rounded-3xl
              "
          >
            <Image
              onMouseEnter={() => {
                setResSrc('/ResearchBlue.webp');
              }}
              onMouseLeave={() => {
                setResSrc('/ResearchWhite.webp');
              }}
              className="
              rounded-3xl
              border-2
              border-seaBlue-700
              "
              width={1000}
              height={1000}
              alt="research with genetic code background"
              src={`${resSrc}`}
            />
          </Link>
          <div
            className="          
          flex 
          max-w-full 
          flex-col 
          items-center   
          justify-center
          text-center 
          whitespace-pre-line
          "
          >
            <div className="pt-2 font-proximaSemiBold text-2xl">
              Fund your research
            </div>
            <p className="
            py-2
            px-4           
            ">
              Interact with personalized medicine researchers and receive
              funding for your project.
            </p>
            <Link
              className="flex pb-2 font-proximaItalic text-seaBlue-700"
              href=""
            >
              Get your project funded {'>'}
            </Link>
          </div>
        </div>
        <div
          className="
          flex 
          w-full
          max-w-full
          flex-col
          items-center
          justify-start 
          "
        >
          <Link
            href="https://forms.gle/hY52XW7inek4ynrR6"
            target="_blank"
            className="
              flex
              h-full
              w-full
              items-center
              justify-center
              rounded-3xl
              "
          >
            <Image
              onMouseEnter={() => {
                setComSrc('/CommunityBlue.webp');
              }}
              onMouseLeave={() => {
                setComSrc('/CommunityWhite.webp');
              }}
              className="
              flex
              w-full
              max-w-full
              items-start
              justify-start 
              rounded-3xl
              border-2
              border-seaBlue-700
              "
              width={1000}
              height={1000}
              alt="community with genetic code background"
              src={`${comSrc}`}
            />
          </Link>
          <div
            className="
          flex 
          max-w-full 
          flex-col 
          items-center
          text-center
          justify-center
          whitespace-pre-line
          "
          >
            <div className="pt-2 font-proximaSemiBold text-2xl">
              Become part of the community
            </div>
            <p className="py-2 px-4">
              Leverage you knowledge and skills to innovate personalized
              medicine research. PoSciDon is built by people like you.
            </p>
            <Link
              className="flex pb-2 font-proximaItalic text-seaBlue-700"
              href="https://forms.gle/hY52XW7inek4ynrR6"
              target="_blank"
            >
              Become a contributor {'>'}
            </Link>
          </div>
        </div>
        <div
          className="
          flex 
          h-full
          w-full
          max-w-full
          flex-col
          items-start
          justify-start 
          "
        >
          <Link
            href="/tokens"
            className="
              flex
              h-full
              w-full
              items-center
              justify-center
              rounded-3xl
              "
          >
            <Image
              onMouseEnter={() => {
                setTokSrc('/TokensBlue.webp');
              }}
              onMouseLeave={() => {
                setTokSrc('/TokensWhite.webp');
              }}
              className="
              flex
              w-full
              max-w-full
              items-start
              justify-start 
              rounded-3xl
              border-2
              border-seaBlue-700
              "
              width={1000}
              height={1000}
              alt="tokens with genetic code background"
              src={`${tokSrc}`}
            />
          </Link>
          <div
            className="          
            flex 
            max-w-full 
            flex-col 
            items-center
            justify-center
            text-center 
            whitespace-pre-line
            "
          >
            <div className="pt-2 font-proximaSemiBold text-2xl">
              Our Token Model
            </div>
            <p className="py-2 px-4">
              Everything you need to know about the tokens that drive our
              ecosystem.
            </p>
            <Link
              className="flex pb-2 font-proximaItalic text-seaBlue-700"
              href="/tokens"
            >
              Discover our tokens {'>'}
            </Link>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
}
