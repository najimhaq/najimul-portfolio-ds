import { ThemeProvider } from 'next-themes';
import './globals.css';
import { Emilys_Candy } from 'next/font/google';
import CustomCursor from '@/components/CustomCursor';

const candy = Emilys_Candy({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-candy',
});
export const metadata = {
  title: 'Najimul Haque - Web Developer Portfolio',
  description:
    'Professional portfolio of Najimul Haque, a Full Stack Developer specializing in React, Next.js, and Modern Web Technologies',
  keywords: 'Najimul, Portfolio, Web Developer, React, Next.js, Full Stack',
  authors: [{ name: 'Najimul Haque' }],
  openGraph: {
    title: 'Najimul Haque - Web Developer Portfolio',
    description: 'Full Stack Developer specializing in React, Next.js',
    url: 'https://najimul.xyz',
    siteName: 'Najimul Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning className={`${candy.variable} `}>
      <body className='antialiased' suppressHydrationWarning>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
