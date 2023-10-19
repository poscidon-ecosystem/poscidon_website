import Footer from '../components/Footer';
import Button from '../components/Button';
import Image from 'next/image';

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
        md:w-[100%] 
        lg+:w-[80%] 
        xl+:w-[65%] 
        "
    >
      <title>PoSciDon DAO | SCI</title>
      <div
        className="
            max-w-full 
            px-4
            sm:py-8
            "
      >
        <div
          className="
        mb-2 
        flex 
        flex-col 
        items-center 
        justify-center
        gap-4
        rounded-3xl
        bg-white
        bg-opacity-90
        py-8
        "
        >
          <div
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
          sm:text-5xl
          lg:text-6xl
          `}
          >
            Discover the SCI Token
          </div>
          <p
            className="
                    w-[80%] 
                    py-4 
                    text-center
                    sm:text-xl
                    "
          >
            <span className="font-proximaSemiBold">
              $SCI is a governance token{' '}
            </span>{' '}
            allowing holders to vote on DAO proposals.
            Revenue from commercialized assets will be used to buy back
            and burn $SCI tokens. $SCI will be released soon!
          </p>
          <Button
            link={true}
            href={'/Whitepaper.pdf'}
            onClick={''}
            text={'Read our Whitepaper'}
            style="
                    flex
                    w-[14rem]
                    lg:w-[16rem]
                    items-center
                    text-center
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
                    sm:text-xl
                    text-seaBlue-50 
                    hover:border-2
                    hover:border-seaBlue-700 
                    hover:bg-seaBlue-50 
                    hover:text-seaBlue-700
                    active:bg-seaBlue-300
                    active:text-white"
          />
        </div>
        <hr className="border-b-1 w-full border-gray-200"></hr>
        <div
          className="
            grid 
            grid-cols-1
            items-center 
            justify-center 
            sm:grid-cols-2
            mx-10
            gap-8
            "
        >
          <div
            className="
            py-4
            "
          >
            <div className="flex">
              <Image
                alt="dna"
                src="/dnaBlue.svg"
                width={40}
                height={40}
              />
              <h1
                className="
                    flex
                    p-4
                    font-proximaSemiBold
                    text-4xl
                    text-seaBlue-700
                    sm:text-5xl
                    lg:text-6xl
                    "
              >
                Allocation
              </h1>
            </div>
            <ul className="
            md:text-xl 
            list-image-[url(/listArrow.svg)]
            ">
              <li>The total supply of $SCI is 18,910,000 tokens.</li>
              <br></br>
              <li>
                At genesis, 10% of the total $SCI supply will be offered through{' '}
                <a
                    className="text-seaBlue-700 underline"
                    href="https://fairprotocol.eth.limo/"
                >
                    Fair Protocol's
                </a>{' '}
                liquidity bootstrap batch auction.
              </li>
              <br></br>
              <li>Additionally, 5% of the tokens will be offered to contributors,
              also known as Crew members.</li>
            </ul>
          </div>
          <Image
            className="
                    rounded-xl
                    sm:my-8
                    "
            src={'/TokenAllocation.svg'}
            alt=""
            width={500}
            height={500}
          />
          
         <Image
            className="
            hidden
            sm:flex
            py-8
            w-full
            "
            src={'/poStaking.png'}
            alt="Staking $SCI and $PO tokens"
            width={1000}
            height={1000}
          />
          <div
            className="
                py-4
                "
          >
            <div className="flex justify-start">
              <Image
                alt="dna"
                src="/dnaBlue.svg"
                width={40}
                height={40}
              />
              <h1
                className="
                flex
                p-4
                font-proximaSemiBold
                text-4xl
                text-seaBlue-700
                sm:text-5xl
                lg:text-6xl
                "
              >
                Staking
              </h1>
            </div>
            <ul className="
            md:text-xl
            list-image-[url(/listArrow.svg)]
            ">
                <li>
                    Your $SCI can be staked through the{' '}
                <Button
                    link={true}
                    href={'https://test.poscidon.com/staking'}
                    text={'PoSciDon Protocol'}
                    onClick={''}
                    style={'underline text-seaBlue-700'}
                />
                .
                </li>
                <br></br>
                <li>Once staked, you will gain voting power allowing you to vote on
                DAO proposals.</li>
                <br></br>
                <li>After on-chain voting on proposals, you will receive the untradable $PO
                token.</li>
                <br></br>
                <li>When $PO is staked together with $SCI, you will receive more $SCI tokens on a daily basis.</li>
            </ul>
          </div>
          <Image
            className="
            sm:hidden
            flex
            sm:py-8
            w-full
            "
            src={'/poStaking.png'}
            alt="Staking $SCI and $PO tokens"
            width={1000}
            height={1000}
          />

          <div
            className="
                pt-4
                "
          >
            <div className="flex w-full justify-start">
              <Image
                alt="dna"
                src="/dnaBlue.svg"
                width={40}
                height={40}
              />
              <div
                className="
                            flex
                            p-4
                            font-proximaSemiBold
                            text-4xl
                            text-seaBlue-700
                            sm:text-5xl
                            lg:text-6xl
                            "
              >
                Burning
              </div>
            </div>
            <ul className="
            md:text-xl 
            list-image-[url(/listArrow.svg)]">
              <li>30% of the revenue will be used to buy $SCI from the market.</li>
              <br></br>
              <li>Those $SCI tokens will then be burned.</li>
              <br></br>
              <li>Lower token supply leads to higher value per $SCI token, given the total market capitalization stays the same.</li>
            </ul>
          </div>
          <Image
            className="
                    sm:pt-4
                    pb-8
                    w-full
                    "
            src={'/buy-back.png'}
            alt="Burning $SCI tokens"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <hr className="border-b-1 w-full border-gray-200"></hr>
      <Footer />
      <div className="flex w-full flex-col pt-2">
        <hr className="border-b-1 w-full border-gray-200"></hr>
        <div
          className=" 
                flex 
                h-20
                items-center
                justify-center
                text-gray-400
                "
        >
          © PoSciDon DAO. All rights reserved.
        </div>
      </div>
    </div>
  );
}
