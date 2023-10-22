'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from './components/Footer';
import ContactUs from "./components/ContactUs";
import { useState } from 'react';
import Button from './components/Button';
import styles from "./components/Button.module.css";
import { TwitterTimelineEmbed } from 'react-twitter-embed';


export default function Home() {
  const [resSrc, setResSrc] = useState('/ResearchWhite.webp');
  const [comSrc, setComSrc] = useState('/CommunityWhite.webp');
  const [tokSrc, setTokSrc] = useState('/TokensWhite.webp');
  //https://discord.gg/TXZZV5KXmn

  return (
    <div className="
        xl:w-[65%]
        lg:w-[85%]
        md:w-[100%]
        w-full 
        max-w-full
        sm:pt-12
        flex
        flex-col 
        justify-center 
        items-center 
        ">     
        <div className="
        flex 
        flex-col 
        justify-center 
        items-center 
        py-8
        ">
          <div className={`
          lg:text-6xl 
          sm:text-5xl 
          text-4xl
          sm:w-[85%] 
          w-full
          max-w-full
          flex
          text-center
          justify-center
          items-center
          font-proximaSemiBold
          text-seaBlue-700
          `}>
            Revolutionizing Personalized Medicine Research Funding
          </div>
          <div className={`
          w-[70%]
          flex 
          items-center 
          justify-center 
          sm:text-lg 
          text-base 
          py-8
          text-center
          `}>
            PoSciDon Decentralized Autonomous Organisation (DAO) 
            focuses on funding research projects that develop personalized treatments 
            for patients affected by life-altering diseases such as cancer 
            and Alzheimer's disease. Together with your help we can 
            change the lives of people affected by these diseases.  
          </div>
          <div className='flex gap-4'>
            <Button
            link={true}
            type={"button"}
            onClick={null}
            text={`Become a donor`}
            href={'https://test.poscidon.com/donation'}
            icon={''}
            style={styles.btncolor}
            />      
            <Button
            link={true}
            type={"button"}
            onClick={null}
            text={`Join the DAO`}
            href={'https://discord.gg/QKzZkrYpw7'}
            icon={''}
            style={styles.btn}
            />      
          </div>      
        </div>
      <div className='
        flex
        md:flex-row
        flex-col 
        items-center
        justify-center
        md:items-start
        md:justify-start 
        max-w-full
        w-full
        sm:py-12
        py-8
        gap-6
        px-8
        '>
        <div className="
          flex 
          flex-col
          items-start
          justify-start
          w-full
          h-full
          max-w-full 
          ">
          <Link 
            href="/research"
            className='
              flex
              justify-center
              items-center
              rounded-3xl
              '
            >          
            <Image
              onMouseEnter={() => {
                setResSrc('/ResearchBlue.webp');
              }}
              onMouseLeave={() => {
                setResSrc('/ResearchWhite.webp');
              }}
              className='
              rounded-3xl
              border-2
              border-seaBlue-700
              '
              width={1000}
              height={1000}
              alt="research with genetic code background"
              src={`${resSrc}`}
            />
          </Link>
          <div className='          
          flex 
          flex-col 
          justify-start 
          items-start 
          max-w-full 
          whitespace-pre-line
          '>
            <div className='text-2xl pt-2 font-proximaSemiBold'>
              Fund your research 
            </div>
            <p
            className="py-2"
            >
              Interact with personalized medicine researchers and receive 
              funding for your project
            </p>
            <Link 
            className="flex pb-2 text-seaBlue-700 font-proximaItalic"
            href=""
            >
            Get your project funded {'>'}
            </Link>
          </div>
        </div>
        <div className="
          flex 
          flex-col
          items-center
          justify-start
          w-full
          max-w-full 
          ">
          <Link 
            href="https://forms.gle/hY52XW7inek4ynrR6"
            target='_blank'
            className='
              flex
              justify-center
              items-center
              rounded-3xl
              w-full
              h-full
              '
            >          
            <Image
              onMouseEnter={() => {
                setComSrc('/CommunityBlue.webp');
              }}
              onMouseLeave={() => {
                setComSrc('/CommunityWhite.webp');
              }}
              className='
              flex
              justify-start
              items-start
              rounded-3xl
              max-w-full 
              w-full
              border-2
              border-seaBlue-700
              '
              width={1000}
              height={1000}
              alt="community with genetic code background"
              src={`${comSrc}`}
            />
          </Link>
          <div className='
          flex 
          flex-col 
          justify-start 
          items-start 
          max-w-full 
          whitespace-pre-line
          '>
          
            <div className='text-2xl pt-2 font-proximaSemiBold'>
              Become part of the community
            </div>
            <p
            className="py-2"
            >
            Leverage you knowledge and skills to innovate personalized medicine research. 
            PoSciDon is built by people like you. 
            </p>
            <Link 
            className="flex pb-2 text-seaBlue-700 font-proximaItalic"
            href="https://forms.gle/hY52XW7inek4ynrR6"
            target='_blank'
            >
            Become a contributor {'>'}
            </Link>
          </div>
        </div>
        <div className="
          flex 
          flex-col
          items-start
          justify-start
          w-full
          h-full
          max-w-full 
          ">
          <Link 
            href="/tokens"
            className='
              flex
              justify-center
              items-center
              rounded-3xl
              w-full
              h-full
              '
            >          
            <Image
              onMouseEnter={() => {
                setTokSrc('/TokensBlue.webp');
              }}
              onMouseLeave={() => {
                setTokSrc('/TokensWhite.webp');
              }}
              className='
              flex
              justify-start
              items-start
              rounded-3xl
              max-w-full 
              w-full
              border-2
              border-seaBlue-700
              '
              width={1000}
              height={1000}
              alt="tokens with genetic code background"
              src={`${tokSrc}`}
            />
          </Link>
          <div className='          
            flex 
            flex-col 
            justify-start 
            items-start 
            max-w-full  
            whitespace-pre-line
            '>
            <div className='text-2xl pt-2 font-proximaSemiBold'>
              Our Token Model
            </div>
            <p
            className="py-2"
            >
              Everything you need to know about the tokens that drive our ecosystem
            </p>
            <Link 
            className="flex pb-2 text-seaBlue-700 font-proximaItalic"
            href="/tokens"
            >
            Discover our tokens {'>'}
            </Link>
          </div>
        </div>
      </div>
      <div className='grid justify-center items-start md:grid-cols-2 grid-cols-1 pt-8 w-full gap-4 h-full'>
        <div className='px-8 w-full py-8'>
          <ContactUs/>
        </div>
        <div className='px-8 w-full py-8'>
        <TwitterTimelineEmbed 
          sourceType="profile"
          screenName='poscidondao' 
          options={{height: 400}} 
        />
        </div>
      </div>
      <hr className="border-b-1 w-full border-gray-200"></hr>
      <Footer/>
      <div className="flex w-full pt-2 flex-col">
        <hr className="border-b-1 w-full border-gray-200"></hr>
        <div
          className=" 
        flex 
        h-20
        items-center
        justify-center
        text-gray-400
        "
        >
          © PoSciDon DAO. All rights reserved.
        </div>
      </div>
    </div>
  );
}
