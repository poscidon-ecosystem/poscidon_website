'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Cards() {
    const [resSrc, setResSrc] = useState('/research-white.webp');
    const [comSrc, setComSrc] = useState('/community-white.webp');
    const [tokSrc, setTokSrc] = useState('/tokens-white.webp');

    return(
        <div
        className="
        flex
        flex-col
        items-center
        justify-center
        gap-6
        w-[80%]
        md:w-full
        max-w-full 
        md:flex-row
        md:items-start
        md:justify-start
        "
      >
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
                setResSrc('/research-blue.webp');
              }}
              onMouseLeave={() => {
                setResSrc('/research-white.webp');
              }}
              className="
              rounded-3xl
              border-2
              border-seaBlue-700
              "
              width={1000}
              height={1000}
              alt="Genetic code surrounding the word 'research'"
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
            w-[80%]
            lg:w-[70%]           
            ">
              Interact with personalized medicine researchers and receive
              funding for your project.
            </p>
            <Link
              className="flex pb-2 font-proximaItalic text-seaBlue-700"
              href="/get-funding"
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
              md:w-full
              items-center
              justify-center
              rounded-3xl
              "
          >
            <Image
              onMouseEnter={() => {
                setComSrc('/community-blue.webp');
              }}
              onMouseLeave={() => {
                setComSrc('/community-white.webp');
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
              alt="Genetic code surrounding the word 'community'"
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
            <p className="
              py-2             
              w-[80%]
              lg:w-[70%]
              ">
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
          items-center
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
                setTokSrc('/tokens-blue.webp');
              }}
              onMouseLeave={() => {
                setTokSrc('/tokens-white.webp');
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
              alt="Genetic code surrounding the word 'tokens'"
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
            <p className="
              py-2             
              w-[80%]
              lg:w-[70%]
              ">
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

    );
}