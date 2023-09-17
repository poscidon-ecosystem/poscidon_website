'use client'

import Image from 'next/image';
import Twitter  from './components/Twitter';

export default function Home() {
  //https://discord.gg/TXZZV5KXmn

  //          bg-[url('../../public/WebsiteHero.webp')] bg-cover bg-no-repeat bg-bottom
  return (
    <div className="flex flex-col h-full w-full max-w-full items-center justify-center">     
      <div className="
          flex 
          justify-center 
          items-center 
          w-screen
          h-[35rem] 
          max-w-full 
          px-16
          py-8
          ">
        <div className="
        flex 
        flex-col 
        justify-center 
        items-center 
        max-w-full
        w-[70rem] 
        gap-4
        bg-white
        bg-opacity-90
        p-6
        rounded-3xl
        ">
          <div className='
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
          '>
            Revolutionizing Personalized Medicine Research Funding
          </div>
          <div className="
          flex 
          items-center 
          justify-center 
          sm:text-lg 
          text-base 
          py-4
          text-center
          ">
            PoSciDon Decentralized Autonomous Organisation (DAO) focuses on funding personalized medicine research targeting various life-altering diseases including cancer and Alzheimer's disease. Together with your help we can change the lives of people affected by these diseases.  
          </div>
            <a 
              className='
                flex
                w-[10rem]
                sm:w-[14rem]
                items-center
                justify-center
                rounded-[8rem]
                border-2 
                border-seaBlue-700
                bg-seaBlue-700
                px-4 
                py-2
                sm:px-8
                sm:py-4  
                text-base
                sm:text-xl
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
        items-center
        justify-center 
        max-w-full
        '>
        <div className="
          flex 
          flex-col
          items-center
          justify-start
          w-[30rem]
          h-[30rem]
          max-w-full 
          ">
          <Image
            className='
            rounded-3xl 
            w-[80%] 
            h-[45%] 
            max-w-full
            lg:w-[90%]
            lg:h-[65%]
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
          w-[75%] 
          whitespace-pre-line
          '>
            <div className='text-2xl pt-2'>
              Support scientists
            </div>
            <p
            className="py-2"
            >
              Interact with personalized medicine researchers and receive 
              funding for your project
            </p>
            <a 
            className="flex pb-2 text-seaBlue-700"
            href=""
            >
            Get your project funded {'>'}
            </a>
          </div>
        </div>
        <div className="
          flex 
          flex-col
          items-center
          justify-start
          w-[30rem]
          h-[30rem]
          max-w-full 
          ">
          <Image
            className='
            rounded-3xl 
            w-[80%] 
            h-[45%] 
            max-w-full
            lg:w-[90%]
            lg:h-[65%]
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
          w-[75%] 
          whitespace-pre-line
          '>
            <div className='text-2xl pt-2'>
              Become part of the community
            </div>
            <p
            className="py-2"
            >
            Leverage you knowledge and skills to innovate personalized medicine research. 
            PoSciDon is built by people like you. 
            </p>
            <a 
            className="flex pb-2 text-seaBlue-700"
            href=""
            >
            Become a contributor {'>'}
            </a>
            </div>
          </div>
        <div className="
          flex 
          flex-col
          items-center
          justify-start
          w-[30rem]
          h-[30rem]
          max-w-full 
          ">
          <Image
            className='
            rounded-3xl 
            w-[80%] 
            h-[45%] 
            max-w-full
            lg:w-[90%]
            lg:h-[65%]
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
            w-[75%] 
            whitespace-pre-line
            '>
            <div className='text-2xl pt-2'>
              Our Multi-Token Model
            </div>
            <p
            className="py-2"
            >
              Everything you need to know about the tokens that power our ecosystem
            </p>
            <a 
            className="flex pb-2 text-seaBlue-700"
            href=""
            >
            Discover our tokens {'>'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
