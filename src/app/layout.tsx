import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"

// Self-hosted via next/font so it is preloaded and swaps without layout shift.
// Licence: free for personal use only (Letterara Studio) - commercial use needs
// a licence, see the vendor's READ ME.
const eagleHorizon = localFont({
  src: './fonts/EagleHorizonP.ttf',
  variable: '--font-eagle-horizon',
  display: 'swap',
  weight: '400',
  style: 'normal',
});

export const metadata: Metadata = {
  title: 'Sunny Gogoi',
  description: 'Portfolio of Sunny Gogoi, a Software Developer, Machine Learning Engineer, and Data Scientist.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('dark', eagleHorizon.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@400,500,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&family=Manrope:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased bg-background text-foreground min-h-screen main-scrollbar-hide")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
