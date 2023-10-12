import Link from "next/link";

export default function Button({link, href, onClick, text, style }) {

    return(
        <>
            {link ? 
                <Link 
                href={href}
                onClick={onClick}
                target="_blank"
                className={`${style}`}
                >
                    <span><slot>{text}</slot></span>
                </Link>
            : 
                <button 
                type="button" 
                onClick={onClick}
                className={`${style}`}
                >
                    <span><slot>{text}</slot></span>
                </button>
            }
        </>
    );
    
}