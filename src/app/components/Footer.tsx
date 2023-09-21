import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return(
        <div className='
        flex 
        flex-col
        justify-center
        items-center 
        bg-seaBlue-50 
        w-[100%] 
        h-[10rem]
        mt-12
        text-seaBlue-400
        '>
        <div className='
          w-[100%]
          flex 
          items-center 
          justify-center
          sm:justify-start
          py-4
          px-4
          gap-8
          '>
          <p className='text-3xl sm:text-4xl'>Join us</p>
          <Link 
          href='https://discord.gg/TXZZV5KXmn'
          target='_blank'
          className='flex items-start justify-start'
          >
            <div className='flex items-center justify-center w-10 h-[4rem]'>
              <Image
                className='
                flex
                flex-col
                justify-end
                items-end
                rounded-3xl
                max-w-full 
                w-full
                h-full 
                '
                width={300}
                height={300}
                alt="discord"
                src='/discord.svg'
              />
            </div>
          </Link>
          <Link 
          href='https://twitter.com/poscidondao'
          target='_blank'
          className='flex items-start justify-start'
          >
          <div className='flex items-center justify-center w-10 h-[4rem]'>
            <Image
              className='
              flex
              flex-col
              justify-end
              items-end
              rounded-3xl
              max-w-full 
              w-full
              h-full 
              '
              width={300}
              height={300}
              alt="twitter"
              src='/twitter.svg'
            />
          </div>
          </Link>
          <Link 
          href='/'
          target='_blank'
          className='flex items-start justify-start'
          >
            <div className='flex items-center justify-center w-10 h-[4rem]'>
              <Image
              className='
              flex
              flex-col
              justify-end
              items-end
              rounded-3xl
              max-w-full 
              w-full
              h-full 
              '
              width={300}
              height={300}
              alt="telegram"
              src='/telegram.svg'
            />
            </div>
          </Link>
        </div>
        <div className=' 
        flex 
        justify-center
        items-center
        sm:justify-start
        w-full
        py-2
        px-4
        '>
          © PoSciDon. All rights reserved.
        </div>
      </div>  
    );
}