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
    <html lang="en">
      <body className={`${proximaNova.variable} font-sans`}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
