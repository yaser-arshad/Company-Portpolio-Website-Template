import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import LocalFont from 'next/font/local';

import Header from 'components/layout/header';

import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const productSans = LocalFont({
  src: '../../public/fonts/ProductSans.ttf',
  variable: '--font-product-sans',
  preload: true,
});
export const metadata: Metadata = {
  title: 'Title',
  description: 'Title',
  icons: {
    icon: [
      {
        // media: "(prefers-color-scheme: dark)",
        url: '/images/favicon.ico',
        href: '/images/favicon.ico',
      },
      // {
      //   media: "(prefers-color-scheme: light)",
      //   url: "/images/favicon-dark.png",
      //   href: "/images/favicon-dark.png",
      // },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${productSans.variable} ${poppins.variable} ${productSans.className} container-max`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
