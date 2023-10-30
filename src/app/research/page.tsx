import { Metadata } from 'next';
import Button from '../components/Button';
import styles from '../components/Button.module.css';
import FAQ from '../components/FAQ';

const url = new URL('https://poscidon.com/get-funding/');

export const metadata: Metadata = {
  metadataBase: url,
  title: 'PoSciDon DAO | Fund Your Research Project',
  description: `Fill in this form to obtain funding for your personalized medicine-focused research project
  `,
  viewport: "width=device-width, initial-scale=1.0",
  alternates: {
    canonical: url,
  },
  robots: "index, follow",
};

export default function ProjectFunding() {
    return (
        <main
        className="
          flex
          w-full 
          max-w-full
          flex-col
          items-center
          justify-center
          sm:pt-12
          xl:w-[65%] 
          "
      >
        <div
          className="
          flex 
          flex-col 
          items-center 
          justify-center 
          py-8
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
            sm:text-5xl
            lg:text-6xl
            `}
          >
            We Fund Phenomenal Research That Aims To Bring The Right Treatment To The Right Patient
          </h1>
          <p
            className="
              flex
              w-[80%] 
              items-center 
              justify-center 
              py-8 
              text-center 
              text-base
              sm:w-[70%]
              sm:text-xl
            "
          >
            PoSciDon DAO is a member-owned worldwide organisation that funds and incubates 
            personalized medicine research projects with the goal to commercialize their research output.
            <br></br>
            <br></br>
            Join our community of personalized medicine researchers, entrepreneurs, 
            investors and donors that will go above and beyond to
            assist you from project submission to funding and further. 
          </p>
          <Button
          link={true}
          target={''}
          href={'/submit-project'}
          style={styles.primary}
          onClick={''}
          type={'button'}
          text={'Submit your project proposal'}
          icon={''}
          />
        </div>
        <div className='flex justify-center items-center'>
            <FAQ/>
        </div>
      </main>
    );
}