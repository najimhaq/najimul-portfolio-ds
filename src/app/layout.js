import { ThemeProvider } from 'next-themes';
import './globals.css';

export const metadata = {
  title: 'Najimul Hasan - Web Developer Portfolio',
  description:
    'Professional portfolio of Najimul Hasan, a Full Stack Developer specializing in React, Next.js, and Modern Web Technologies',
  keywords: 'Najimul, Portfolio, Web Developer, React, Next.js, Full Stack',
  authors: [{ name: 'Najimul Hasan' }],
  openGraph: {
    title: 'Najimul Hasan - Web Developer Portfolio',
    description: 'Full Stack Developer specializing in React, Next.js',
    url: 'https://najimul-portfolio.vercel.app',
    siteName: 'Najimul Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='antialiased'>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
