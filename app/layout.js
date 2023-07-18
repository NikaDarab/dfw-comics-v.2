import './globals.css';
import { Inter } from 'next/font/google';
import { AuthContextProvider } from '../context/AuthContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DFW Comics',
  description: 'DFW comedians doing comedy things',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
        {children}
        </AuthContextProvider>
        </body>
    </html>
  )
}
