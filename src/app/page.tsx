import NavBar from './components/NavBar.tsx';

export default function Home() {
  return (
    <div className="flex h-full w-full max-w-full items-center justify-center">
      <div className='h-full px-12 py-12 bg-seaBlue-100'>
        <section className="flex flex-col justify-center items-center">
          <div className='flex flex-col justify-center items-center px-8 py-12 rounded-3xl bg-white bg-opacity-60'>
            <div className="lg:text-5xl md:text-5xl text-3xl">
              Scientific Funding Revolutionized
            </div>
            <div className='flex gap-6 mt-4'>
            <a 
            className='px-6 py-3 rounded-2xl border-2 border-seaBlue-200'
            href=''>
              Join our community
            </a>
            <a 
            className='px-6 py-3 rounded-2xl border-2 border-seaBlue-200'
            href='https://app.poscidon.com'
            rel='noreferrer'
            target='_blank'
            >
              Get started
            </a>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}
