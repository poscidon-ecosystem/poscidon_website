import Link from 'next/link';

export default function Content() {
  return (
    <>
      <Link
        href="/community"
        className="hover:text-seaBlue-700 whitespace-nowrap"
      >
        Community
      </Link>
      <Link href="/buy" className="hover:text-seaBlue-700">
        Vote
      </Link>
      <Link href="https://test.poscidon.com" className="hover:text-seaBlue-700">
        SCI Token
      </Link>
        <a 
          className='
            flex
            w-[10rem]
            items-center
            justify-center
            rounded-[8rem]
            border-2 
            border-seaBlue-700
            bg-seaBlue-700
            px-4 
            py-2 
            text-base
            
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
    </>
  );
}
