import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Lekan Motors | Buy, Sell & Swap Cars',
  description: 'Browse quality cars from Lekan Motors and contact us directly on WhatsApp.'
};
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>;
}
