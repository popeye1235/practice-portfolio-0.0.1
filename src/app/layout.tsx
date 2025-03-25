// src/app/layout.tsx
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';
import { Edu_AU_VIC_WA_NT_Hand } from 'next/font/google';



// const pacifico = Pacifico({
//   subsets: ['latin'],
//   weight: '400',
// });

// const edu = Edu_AU_VIC_WA_NT_Dots({
//   subsets: ['latin-ext'], 
//   weight: '700', 
// });

// const octavio = Protest_Revolution({
//   subsets: ['latin'], 
//   weight: '400', 
//   style: 'normal'
// });

const octavio = Edu_AU_VIC_WA_NT_Hand({
  subsets: ['latin'], 
  weight: '700', 
  style: 'normal'
});


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={octavio.className}>
<head>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    rel="stylesheet"
  />
</head>
      <body className="bg-gray-100">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
