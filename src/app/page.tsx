import ContactUs from './components/ContactUs';
import Button from './components/Button';
import styles from './components/Button.module.css';
import Cards from './components/Cards';

export default function Home() {

  return (
    <main
      className="
        flex
        w-full
        max-w-full
        flex-col 
        items-center
        justify-center
        px-8
        sm:pt-12
        lg:w-[85%] 
        xl:w-[65%] 
        "
    >
      <section
        className="
        flex 
        flex-col 
        items-center 
        justify-between 
        pt-8
        pb-16
        "
      >
        <h1
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
        </h1>
        <div
          className={`
          flex
          w-[80%]
          sm:w-[70%] 
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
      </section>
      <section className='py-8'>
        <Cards/>
      </section>  
      <section className='py-8'>
        <ContactUs />
      </section>

    </main>
  );
}
