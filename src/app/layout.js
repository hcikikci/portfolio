import './globals.css'
import {Fira_Code} from 'next/font/google'
import Header from "@/app/components/organisms/Header";

export const firaCode = Fira_Code({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={firaCode.className + " container"}>
        <Header />
        {children}
      </body>
    </html>
  )
}
