import Image from 'next/image';
import Link from 'next/link';

export function Header(){
  const w=process.env.NEXT_PUBLIC_WHATSAPP_NUMBER||'2348131839096';
  return <header className="header">
    <div className="container header-inner">
      <Link className="brand-link" href="/" aria-label="Lekan Motors home">
        <Image className="logo" src="/lekan-motors-logo.png" alt="Lekan Motors" width={440} height={200} priority/>
      </Link>
      <nav className="nav" aria-label="Primary navigation">
        <Link href="/#inventory">Cars for Sale</Link>
        <Link href="/#buy-sell-swap">Buy, Sell &amp; Swap</Link>
        <Link href="/#contact">Contact</Link>
        <a className="btn btn-whatsapp" href={`https://wa.me/${w}`} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
      </nav>
    </div>
  </header>
}
