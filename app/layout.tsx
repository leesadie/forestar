import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'
import TrailModal from './components/modals/TrailModal'
import AudioModal from './components/modals/AudioModal';

const font = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Forestʌr',
  description: 'Forestʌr App',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <TrailModal />
          <AudioModal />
          <LoginModal />
          <RegisterModal />
        </ClientOnly>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
