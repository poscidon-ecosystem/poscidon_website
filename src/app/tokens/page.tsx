'use client'
import Image from 'next/image';
import Footer from '../components/Footer';

export default function Tokens() {
    return (
        <div className="
            flex 
            flex-col
            h-full 
            w-full 
            max-w-full 
            items-center 
            justify-center
            text-center
            mt-16
            sm:mt-18
            ">     
            <div className="
            flex 
            flex-col 
            items-center 
            justify-center
            lg+:w-[60%] 
            md:w-[70%] 
            sm:w-[80%]
            px-4
            py-8
            text-xl
            ">
                <div className='
                flex 
                flex-col 
                justify-center 
                items-center
                pt-6
                '>
                    <div className="flex text-3xl sm:text-4xl font-proximaSemiBold">
                        Discover our Multi-Token Model
                    </div>
                    <div className="py-4 flex flex-col">
                        <p>
                        SCI and PO are the tokens powering our ecosystem. 
                        Incentivizing scientists, donors and investors to
                        become part of the decentralized science revolution.
                        </p>              
                    </div>
                </div>
                <div className="
                    flex 
                    flex-col 
                    justify-center 
                    items-center 
                    text-center 
                    text-xl
                    w-full 
                    bg-seaBlue-100
                    p-12
                    my-8
                    ">
                    <div className='text-2xl font-proximaSemiBold'>
                        PoSciDon DAO's Whitepaper
                    </div>
                    
                    
                    <p className="py-4">
                        Want to read more about how our DAO has originated? 
                        Read our whitepaper. It contains everything you need to 
                        know about PoSciDon DAO. From why we set up PoSciDon, to how we 
                        incentivize donors, scientists, investors and other parties to contribute to our DAO. 
                    </p>
                    <a
                    className='
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
                        lg:text-xl
                        text-seaBlue-50 
                        hover:border-2
                        hover:border-seaBlue-700 
                        hover:bg-seaBlue-50 
                        hover:text-seaBlue-700
                        active:bg-seaBlue-300
                        active:text-white
                        '
                    href='/Whitepaper.pdf'
                    download={'PoSciDon_Whitepaper'}
                    >
                        Download whitepaper
                    </a>
                </div>
                <div className='flex font-proximaSemiBold text-2xl pt-8'>
                SCI Token Distribution
                </div>
                <Image
                    className='flex m-4 justify-center items-center place-content-center w-[38rem] h-[24rem]'
                    src={'/TokenAllocation.svg'}
                    alt=''
                    width={1000}
                    height={1000}
                    />  
            </div>
            <Footer/>
        </div>
    );

}