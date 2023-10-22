import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({link, href, onClick, type, text, icon, style }) {

    return(
        <>
            {link ? 
                <Link 
                href={href}
                onClick={onClick}
                target="_blank"
                className={style}
                >
                    <span><slot>{text}</slot><slot>{icon}</slot></span>
                </Link>
            : 
                <button 
                type={type} 
                onClick={onClick}
                className={style}
                >
                    <span><slot>{text}</slot><slot>{icon}</slot></span>
                </button>
            }
        </>
    );
    
}