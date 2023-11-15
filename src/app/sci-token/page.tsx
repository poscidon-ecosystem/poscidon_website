import Button from '../components/Button';
import styles from '../components/Button.module.css';
import Image from 'next/image';
import { Metadata } from 'next';

const url = new URL('https://www.poscidondao.com/sci-token');

export const metadata: Metadata = {
  metadataBase: url,
  title: 'PoSciDonDAO | SCI Token',
  description: `Get the SCI token, PoSciDonDAO's governance token,
   and have a say in the funding of personalized medicine research projects and DAO operations.
   Revenue is used to buy-back and burn SCI tokens. 
  `,
  viewport: 'width=device-width, initial-scale=1.0',
  alternates: {
    canonical: url,
  },
  robots: 'index, follow',
};

export default function Tokens() {
  return (
    <div
      className="
        flex
        w-full
        max-w-full
        flex-col 
        items-center
        justify-center
        sm:pt-12 
        lg:w-[85%] 
        xl:w-[60%] 
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
          w-full 
          max-w-full
          items-center 
          justify-center
          text-center
          font-proximaSemiBold
          text-3xl
          uppercase
          text-seaBlue-700
          sm:text-5xl
          lg:text-6xl
          `}
        >
          Explore the SCI Token
        </h1>
        <p
          className="
            flex
            w-[70%]
            items-center 
            justify-center 
            py-8 
            text-center 
            text-base 
            sm:text-lg
            xl+:w-[50%]
          "
        >
          $SCI is a governance token allowing holders to vote on DAO proposals.
          Revenue from commercialized assets will be used to buy back and burn
          $SCI tokens. $SCI will be released soon!
        </p>
        <Button
          link={true}
          type={''}
          target={'_blank'}
          href={'/Whitepaper.pdf'}
          onClick={''}
          text={'Read our Whitepaper'}
          icon={''}
          style={styles.primary}
        />
      </div>
      <hr className="border-b-1 w-full border-gray-200"></hr>
      <section
        className="
        flex
        items-start 
        justify-start
        p-16
        "
      >
        <div className="flex w-full flex-col items-start justify-center">
          <h2
            className="
                    pb-8
                    font-proximaSemiBold
                    text-4xl
                    text-seaBlue-700
                    sm:text-5xl
                    lg:text-6xl
                    "
          >
            Allocation
          </h2>
          <p
            className="
            max-w-[90%]
            md:text-xl
            "
          >
            The total supply of $SCI is 18,910,000 tokens. At genesis, 10% of
            the total $SCI supply will be offered through a public sale using{' '}
            <a
              className="text-seaBlue-700 underline"
              href="https://fairprotocol.eth.limo/"
            >
              Fair Protocol's
            </a>{' '}
            liquidity bootstrap batch auction. Additionally, 5% of the tokens
            will be offered to Crew contributors and 5% will be used to
            compensate contractors. Another 10% will be assigned to our staking
            program.
          </p>
        </div>
        <iframe
          className="flex h-[23rem] w-full items-center justify-center"
          src="/donut.html"
          width={'100%'}
          height={'100%'}
        />
      </section>
      <hr className="border-b-1 w-full border-gray-200"></hr>
      <section
        className="
      flex
      items-center 
      justify-center
      p-16
      "
      >
        <Image
          className="
            hidden
            w-full 
            items-center
            justify-start
            sm:flex
            "
          src={'/staking.webp'}
          alt="Staking $SCI and $PO tokens"
          width={300}
          height={300}
        />
        <div className="flex w-full flex-col items-start justify-center">
          <h2
            className="
                flex
                py-4
                font-proximaSemiBold
                text-4xl
                text-seaBlue-700
                sm:text-5xl
                lg:text-6xl
                "
          >
            Staking
          </h2>
          <p
            className="
            max-w-[90%]
            md:text-xl
            "
          >
            Your $SCI can be staked through{' '}
            <a
              className="text-seaBlue-700 underline"
              target="_blank"
              href={'https://test.poscidon.com/staking'}
            >
              PoSciDonDAO's Protocol
            </a>
            . Once staked, you will gain voting power allowing you to vote on
            DAO proposals. After on-chain voting on proposals, you will receive
            the untradable $PO token. When $PO is staked together with $SCI, you
            will receive more $SCI tokens on a daily basis.
          </p>
        </div>
        <Image
          className="
            flex
            w-full
            sm:hidden
            sm:py-8
            "
          src={'/staking.webp'}
          alt="Staking $SCI and $PO tokens"
          width={1000}
          height={1000}
        />
      </section>
      <hr className="border-b-1 w-full border-gray-200"></hr>
      <section
        className="
      flex
      items-center 
      justify-center
      p-16
      "
      >
        <div className="flex w-full flex-col items-start justify-center">
          <h2
            className="
                            flex
                            py-4
                            font-proximaSemiBold
                            text-4xl
                            text-seaBlue-700
                            sm:text-5xl
                            lg:text-6xl
                            "
          >
            Burning
          </h2>
          <p
            className="
            max-w-[90%]
            md:text-xl
            "
          >
            Of the generated revenue, 30% will be used to buy $SCI from the market. Those
            $SCI tokens will then be burned. Lower token supply leads to higher
            value per $SCI token, given the total market capitalization stays
            the same.
          </p>
        </div>
        <Image
          className="
                    w-full
                    pb-8
                    sm:pt-4
                    "
          src={'/buy-back.png'}
          alt="Burning $SCI tokens"
          width={1000}
          height={1000}
        />
      </section>
    </div>
  );
}
