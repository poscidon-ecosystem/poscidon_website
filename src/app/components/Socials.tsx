import Image from 'next/image';
import Link from 'next/link';
import { faDiscord, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Socials() {
    return(
        <div
            className="
          flex
          w-full
          items-center 
          justify-center
          gap-24
          "
          >
            <Link 
            className="flex items-center justify-center"
            href="https://discord.gg/TXZZV5KXmn" target="_blank">
                <FontAwesomeIcon icon={faDiscord} className="fa-2x" style={{color: "#0b1dee"}}/>
            </Link>
            <Link 
            className="flex h-[4rem] w-10 items-center justify-center"
            href="https://twitter.com/poscidondao" target="_blank">
                <FontAwesomeIcon icon={faTwitter} className="fa-2x" style={{color: "#0b1dee"}}/>
            </Link>
            <Link 
            className="flex h-[4rem] w-10 items-center justify-center"
            href="https://t.me/+orlGVaLwlGVlZjI8" target="_blank">
                <FontAwesomeIcon icon={faTelegram} className="fa-2x" style={{color: "#0b1dee"}}/>
            </Link>
          </div>
    );
}