import Image from 'next/image';
import Link from 'next/link';

export default function BlogPostCard({ src, alt, date, title, text }) {
  return (
    <Link
    href={''}
    >
      <Image
        className="
        cursor-pointer 
        object-cover 
        transition 
        duration-500 
        hover:scale-110
        flex
        justify-center
        items-center
        w-full
        "
        src={`${src}`}
        alt={`${alt}`}
        width={300}
        height={150}
      />
      <span 
        className="text-fieryRed">
        {date}
      </span>
      <h2
        className="
        font-proxima
        text-lg
        "
      >
        {title}
      </h2>
      <p>{text}</p>
    </Link>
  );
}
