import type {Car} from '@/lib/types';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {Inventory} from '@/components/Inventory';
import {getPublicCars} from '@/lib/cars';

export const revalidate=60;

export default async function Home(){
  let cars:Car[]=[];
  try{cars=await getPublicCars()}catch{}
  const w=process.env.NEXT_PUBLIC_WHATSAPP_NUMBER||'2348131839096';
  const whatsapp=`https://wa.me/${w}`;

  return <>
    <Header/>
    <main>
      <section className="hero">
        <div className="hero-shade"/>
        <div className="container hero-inner">
          <div className="hero-content">
            <p className="eyebrow">Lekan Motors · Buy • Sell • Swap</p>
            <h1>Buy, sell or swap <span>with confidence.</span></h1>
            <p className="hero-copy">Explore available cars or speak directly with Lekan Motors about selling, buying or swapping your vehicle.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#inventory">Browse available cars</a>
              <a className="btn btn-ghost" href={whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Lekan Motors services">
        <div className="container trust-grid">
          <p><strong>Buy</strong><span>Browse current vehicles and enquire directly.</span></p>
          <p><strong>Sell</strong><span>Start a conversation about your current car.</span></p>
          <p><strong>Swap</strong><span>Tell us what you have and what you need next.</span></p>
        </div>
      </section>

      <section className="section inventory-section" id="inventory">
        <div className="container">
          <div className="section-title">
            <div>
              <p className="eyebrow">Current inventory</p>
              <h2>Cars, ready when you are.</h2>
            </div>
            <p>Open a vehicle for its full specification, photos and a direct WhatsApp enquiry.</p>
          </div>
          {cars.length ? <Inventory cars={cars}/> : <div className="empty-inventory">
            <p className="eyebrow">New arrivals</p>
            <h3>Tell us what you are looking for.</h3>
            <p>Our current vehicles are being prepared for the site. Send your preferred make, model and budget on WhatsApp and Lekan Motors will respond directly.</p>
            <a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Ask about available cars <span aria-hidden="true">→</span></a>
          </div>}
        </div>
      </section>

      <section className="section how-section" id="buy-sell-swap">
        <div className="container">
          <div className="section-title section-title-stack">
            <div>
              <p className="eyebrow">A direct process</p>
              <h2>Buy. Sell. Swap.</h2>
            </div>
            <p>One conversation, the right next step and no unnecessary back-and-forth.</p>
          </div>
          <div className="process-grid">
            <article><span>01</span><h3>Tell us your plan</h3><p>Send the car you want to buy, sell or swap, plus the details that matter.</p></article>
            <article><span>02</span><h3>Get clear information</h3><p>Discuss availability, vehicle details and the next practical step directly with the team.</p></article>
            <article><span>03</span><h3>Move forward</h3><p>Arrange the visit, inspection or conversation that fits your vehicle plan.</p></article>
          </div>
        </div>
      </section>

      <section className="sell-section">
        <div className="container sell-inner">
          <div><p className="eyebrow">Selling or swapping?</p><h2>Start with the car you already have.</h2><p>Share its make, model, year and a few photos on WhatsApp. Lekan Motors will take it from there.</p></div>
          <a className="btn btn-primary" href={whatsapp} target="_blank" rel="noreferrer">Message Lekan Motors</a>
        </div>
      </section>
    </main>
    <Footer/>
  </>
}
