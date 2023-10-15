import Link from 'next/link';
import Socials from './Socials';

export default function Content() {
  return (
    <div className='
    flex
    flex-col
    gap-8
    items-end
    sm:items-center
    justify-center
    sm:text-xl          
    text-lg'>
      <Link
        href="/tokens"
        className="hover:text-seaBlue-700 whitespace-nowrap"
      >
        Learn more about PoSciDon's tokens
      </Link>
      <Link href="https://test.poscidon.com" className="hover:text-seaBlue-700">
        Become a contributor
      </Link>
      <Link 
        className="hover:text-seaBlue-700" 
        href="https://discord.gg/TXZZV5KXmn" 
        target="_blank">
          Join our discord
      </Link>
      <Link 
        className="hover:text-seaBlue-700" 
        href="https://x.com/poscidondao" 
        target="_blank">
          Follow us on Twitter
      </Link>

        <a 
          className='
          shadow 
          transition-all 
          inline-block 
          hover:cursor-pointer
          font-proximaSemiBold
          items-center
          justify-center
          rounded-[8rem]
          border-2 
          border-seaBlue-700
          bg-seaBlue-700
          px-4 
          py-1.5
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
        <Socials/>
    </div>
  );
}
