import BlogPostCard from '../components/BlogPostCard';

export default function Blog() {
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
        lg:w-[85%] 
        xl:w-[75%] 
        "
    >
      <section
        id="hero"
        className="
        flex 
        flex-col 
        items-center 
        justify-center 
        pt-8
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
          PoSciDonDAO's Blog
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
        ></p>
      </section>
      <section
        id="blog-posts"
        className="
        grid 
        place-items-center
        w-[80%]
        sm:w-[70%]
        "
      >
        <BlogPostCard
          src={'/blue-logo.webp'}
          alt={''}
          date={'November 4, 2023'}
          title={
            'Introducing PoSciDonDAO: The first community-owned collective funding personalized medicine research for life-altering diseases.'
          }
          href={
            '/blog/1'
          }
          text={`
            Hello web3, scientists and metaverse,

            we are PoSciDonDAO!
            `}
        />
      </section>
    </main>
  );
}
