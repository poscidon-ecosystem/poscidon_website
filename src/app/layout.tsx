import './globals.css';
import localFont from '@next/font/local';
import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Metadata } from 'next';
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

const url = new URL('https://poscidon.com/');

export const metadata: Metadata = {
  metadataBase: url,
  title: 'PoSciDon DAO | Personalized Medicine Funding Revolutionized',
  description: `PoSciDon is a decentralized science DAO that
  aims to streamline the funding process of personalized medicine research.
  Join the revolution!
  `,
  viewport: "width=device-width, initial-scale=1.0",
  alternates: {
    canonical: "https://poscidon.com/"
  },
  robots: "index, follow",
  icons: [
          {rel: "icon", url: `${url}favicon.ico`},
          {rel: "icon", url: `${url}favicon-16x16.png`},
          {rel: "icon", url: `${url}favicon-32x32.png`},
          {rel: "apple-touch-icon", url: `${url}apple-touch-icon.png`},
          {rel: "android-chrome-192x192", url: `${url}android-chrome-192x192.png`},
          {rel: "android-chrome-512x512", url: `${url}android-chrome-512x512.png`},
        ],
  manifest: `${url}manifest.json`
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <script
          src="https://kit.fontawesome.com/bfd0659090.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body
        className={`
            bg-[#FDFDFD]
            flex
            flex-col
            justify-center
            items-center
            ${proximaNova.variable}  
            ${proximaNovaExtraBold.variable}  
            ${proximaNovaSemiBold.variable}  
            ${proximaNovaItalic.variable}  
            font-proxima
             `}
      >
        <NavBar/>
        {children}
        <hr className="border-b-1 w-full border-gray-200"></hr>
        <Footer/>
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
      </body>
    </html>
  );
}
