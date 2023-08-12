import Link from 'next/link';

export default function Content() {
    return (
        <>
            <Link href="/donation" className="whitespace-nowrap hover:text-seaBlue-700">
                Community
            </Link>
            <Link href="https://app.poscidon.com/" rel='noreferrer' target='_blank' className="whitespace-nowrap hover:text-seaBlue-700">
                Donate
            </Link>
            <Link href="/buy" className="hover:text-seaBlue-700">
                Vote
            </Link>
            <Link href="/governance" className="hover:text-seaBlue-700">
                Buy SCI Token
            </Link>
            <Link href="/staking" className="hover:text-seaBlue-700">
                Staking
            </Link>
        </>
    );
}