'use client'

import Image from 'next/image';
import Link from 'next/link';
import Footer from './components/Footer';

export default function Home() {
  //https://discord.gg/TXZZV5KXmn

  //          bg-[url('../../public/WebsiteHero.webp')] bg-cover bg-no-repeat bg-bottom
  return (
    <div className="
    flex 
    flex-col 
    h-full 
    w-full 
    max-w-full 
    items-center 
    justify-center
    mt-16
    sm:mt-18
    ">     
      <div className="
          flex 
          justify-center 
          items-center 
          w-full 
          max-w-full 
          px-4
          py-8
          ">
        <div className="
        flex 
        flex-col 
        justify-center 
        items-center 
        max-w-full
        w-full
        sm:w-[100%]
        md:w-[100%]
        lg:w-[100%]
        xl:w-[60%] 
        gap-4
        bg-white
        bg-opacity-90
        p-6
        rounded-3xl
        ">
          <div className={`
          lg:text-6xl 
          md:text-5xl
          sm:text-5xl 
          text-4xl 
          w-full
          max-w-full
          flex
          text-center
          justify-center
          items-center
          font-proximaSemiBold
          `}>
            Revolutionizing Personalized Medicine Research Funding
          </div>
          <div className={`
          flex 
          items-center 
          justify-center 
          sm:text-lg 
          text-base 
          py-4
          text-center
          
          `}>
            PoSciDon Decentralized Autonomous Organisation (DAO) focuses on funding personalized medicine research targeting various life-altering diseases including cancer and Alzheimer's disease. Together with your help we can change the lives of people affected by these diseases.  
          </div>
            <a 
              className='
                flex
                w-[10rem]
                lg:w-[14rem]
                items-center
                justify-center
                rounded-[8rem]
                border-2 
                border-seaBlue-700
                bg-seaBlue-700
                px-2 
                py-2
                text-base
                lg:px-4
                lg:py-4
                lg:text-xl
                text-seaBlue-50 
                hover:border-2
                hover:border-seaBlue-700 
                hover:bg-seaBlue-50 
                hover:text-seaBlue-700
                active:bg-seaBlue-300
                active:text-white
                '
              href='https://test.poscidon.com/donation'
              target='_blank'
              >
              Become a donor
            </a>      
        </div>
      </div>
      <div className='
        flex
        md:flex-row
        flex-col 
        items-start
        justify-start 
        max-w-full
        w-full
        pt-4
        sm:pt-2
        gap-10
        '>
        <div className="
          flex 
          flex-col
          items-center
          justify-start
          w-full
          h-full
          max-w-full 
          ">
          <Image
            className='
            flex
            justify-start
            items-start
            rounded-3xl
            max-w-full 
            w-[70%] 
            h-full  
            md:w-[80%] 
            md:h-[35%] 
            lg:w-[90%]
            lg:h-[50%]
            xl:h-[60%]
            '
            width={300}
            height={300}
            alt="stock"
            src='/scientists.jpeg'
          />
          <div className='          
          flex 
          flex-col 
          justify-start 
          items-start 
          max-w-full 
          w-[70%]
          lg:w-[90%]  
          whitespace-pre-line
          '>
            <div className='text-2xl pt-2 font-proximaSemiBold'>
              Support scientists
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
          <Image
            className='
            flex
            justify-start
            items-start
            rounded-3xl
            max-w-full 
            w-[70%] 
            h-full   
            md:w-[80%] 
            md:h-[35%] 
            lg:w-[90%]
            lg:h-[50%]
            xl:h-[60%]
            '
            width={300}
            height={300}
            alt="community"
            src='/community.jpeg'
          />
          <div className='
          flex 
          flex-col 
          justify-start 
          items-start 
          max-w-full 
          w-[70%]
          lg:w-[90%]  
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
            href=""
            >
            Become a contributor {'>'}
            </Link>
          </div>
        </div>
        <div className="
          flex 
          flex-col
          items-center
          justify-start
          w-full
          h-full
          max-w-full 
          ">
              <Image
              className='
              flex
              justify-start
              items-start
              rounded-3xl
              max-w-full 
              relative
              w-[70%] 
              h-[13.5rem]
              sm:h-[19rem]  
              md:w-[80%] 
              md:h-[10rem] 
              lg:w-[90%]
              lg:h-[14.5rem]
              2xl:h-[25rem]
              '
              width={300}
              height={300}
              alt="tokens"
              src='/tokens.jpeg'
            />

          <div className='          
            flex 
            flex-col 
            justify-start 
            items-start 
            max-w-full 
            w-[70%]
            lg:w-[90%]  
            whitespace-pre-line
            '>
            <div className='text-2xl pt-2 font-proximaSemiBold'>
              Our Multi-Token Model
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
    <Footer/>
    </div>
  );
}
