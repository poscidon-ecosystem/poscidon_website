import './globals.css';
import localFont from '@next/font/local';
import NavBar from './components/NavBar.tsx';
import Head from 'next/head';

const proximaNova = localFont({
  src: [
    {
      path: '../../public/ProximaNova/Proxima Nova Reg.otf',
    },
  ],
  variable: '--font-proximaNova',
});

export const metadata = {
  title: 'PoSciDon',
  description: 'PoSciDon DAO Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full max-h-full w-full max-w-full" lang="en">
      <Head>
        <link
          rel="android-chrome-192x192"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="android-chrome-512x512"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" ></script>
      </Head>
      <body
            className={` 
            ${proximaNova.variable} 
            font-sans
             `}
          >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
