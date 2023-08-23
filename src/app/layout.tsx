import type { Metadata } from 'next';
import { Ubuntu as Font } from 'next/font/google';

import { GlobalProvider } from '@/context/GlobalContext';

import '../global.css';

const inter = Font({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Multi Step Form',
  description: 'A multi-step form developed by Hector14oo for the Frontend Mentor challenge.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} grid place-items-center w-screen min-h-screen  bg-Magnolia`}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
