import './globals.css'
import localFont from '@next/font/local';
import NavBar from "./components/NavBar.tsx";

const proximaNova = localFont({
  src: [
    {
    path: '../../public/ProximaNova/Proxima Nova Reg.otf'
  }],
  variable: '--font-proximaNova'
})

export const metadata = {
  title: 'PoSciDon',
  description: 'PoSciDon DAO Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
    className="h-[100vh]"
    lang="en">
      <head>
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
      </head>
      <body className={`${proximaNova.variable} font-sans`}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
