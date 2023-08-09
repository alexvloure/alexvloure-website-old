import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ProvidersWrapper from './ProvidersWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'alexvloure | Frontend developer',
  description: 'Made with 🖤',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={inter.className}>
        <ProvidersWrapper attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  );
}
