import './globals.css';
import localFont from '@next/font/local';
import NavBar from './components/NavBar.tsx';
import Head from 'next/head';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const proximaNova = localFont({
  src: './ProximaNovaRegular.otf',
  variable: '--font-proximaNova',
});

const proximaNovaExtraBold = localFont({
  src: './ProximaNovaExtrabold.otf',
  variable: '--font-proximaNovaBold',
});
const proximaNovaSemiBold = localFont({
  src: './ProximaNovaSemibold.otf',
  variable: '--font-proximaNovaSemiBold',
});

const proximaNovaItalic = localFont({
  src: './ProximaNovaRegularItalic.otf',
  variable: '--font-proximaNovaItalic',
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
    <html
    lang="en">
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
      <script src="https://kit.fontawesome.com/bfd0659090.js" crossOrigin="anonymous"></script>
      </Head>
      <body
            className={`
            bg-[#FDFDFD]
            flex
            flex-col
            items-center
            justify-center
            ${proximaNova.variable}  
            ${proximaNovaExtraBold.variable}  
            ${proximaNovaSemiBold.variable}  
            ${proximaNovaItalic.variable}  
            font-proxima
             `}
          >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
