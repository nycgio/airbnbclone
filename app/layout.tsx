import './globals.css'
import { Nunito } from 'next/font/google'
import ClientOnly from './components/ClientOnly'
import Navbar from './components/Navbar/Navbar'
import Modal from './components/Modals/Modal'

const font = Nunito({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal isOpen title="Modal"/>
          <Navbar />
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
