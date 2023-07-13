import Navbar from '@/Components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/Components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from '@vercel/analytics/react';
import Modal from '@/Components/Modal';
import { Call, Whatsapp } from '@/Components/FixedIcons/Whatsapp';
import { Metadata } from 'next';
import { title } from 'process';

const inter = Inter({ subsets: ['latin'] })

export const metadata:Metadata = {
  icons: {
    icon: '/Images/favicon.ico',
    shortcut: '/Images/favicon.ico',
    apple: '/Images/favicon.ico',
    other: {
      rel: 'favicon',
      url: '/Images/favicon.ico',
    },
  },
  generator: 'Kitchen Chimney Services',
  applicationName: 'Kitchen Chimney Services',
  referrer: 'origin-when-cross-origin',
  keywords: ['Kitchen Chimney Services', 'Kitchen', 'Chimney', 'Hob'],
  title:'Kitchen Chimney Services' ,
  description:'Providing Best Kitchen Chimney Services to Customer all around india',
  openGraph: {
    title: 'Kitchen Chimney Services',
    description: 'Providing Best Kitchen Chimney Services to Customer all around india',
    images:['/image.png'],
    url:'https://www.kitchenchimneyservices.in/Home'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  process.on('uncaughtException', function (err) {
    console.log(err);
}); 
  return (
    <html lang="en" className='scroll-smooth'>
      
      <body className={inter.className}>
        <div className=' pt-1 bg-cover bg-fixed bg-center bg-no-repeat shadow-lg' style={{backgroundImage:`url('/Images/Banner&Background/banner.jpg')`}}>
          
        <Navbar />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        
        {children}
        <Analytics />
        <Footer />
        <Modal/>
        <Whatsapp/>
        <Call/>
        </div>
      </body>
    </html>
  )
}
