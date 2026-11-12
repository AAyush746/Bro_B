import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  Minus,
  Plus,
  Star,
  X,
} from 'lucide-react';

const images = {
  room: '/images/high-resolution-cafe.png',
  coffee: '/images/image copy.png',
  storefront: '/images/enhanced-bro-bakery.png',
  chandelier: '/images/Untitled.png',
};

const menuItems = [
  { name: 'Butter Croissant', description: 'Layers of cultured butter, baked golden.', price: 'Rs 280', category: 'Pastry', image: images.coffee },
  { name: 'Blueberry Cheesecake', description: 'Silky cream cheese, blueberry compote.', price: 'Rs 520', category: 'Cake', image: images.room },
  { name: 'Ferrero Rocher', description: 'Chocolate mousse, hazelnut praline, gold.', price: 'Rs 450', category: 'Cake', image: images.chandelier },
  { name: 'Matcha Latte', description: 'Ceremonial matcha with velvety milk.', price: 'Rs 360', category: 'Coffee', image: images.coffee },
];

const categories = ['All', 'Pastry', 'Cake', 'Coffee'];

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <div className="announcement">Fresh from our oven, every morning <span>·</span> Chandol, Kathmandu</div>
      <header className="nav-wrap">
        <nav className="navbar">
          <button className="brand" onClick={() => scrollTo('top')} aria-label="Go to top">
            <span className="brand-mark">B</span>
            <span className="brand-name">BRO<br /><i>BAKERY</i></span>
          </button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <button onClick={() => scrollTo('menu')}>Menu</button>
            <button onClick={() => scrollTo('story')}>Our story</button>
            <button onClick={() => scrollTo('visit')}>Visit us</button>
            <button className="nav-order" onClick={() => scrollTo('menu')}>Order a treat <ArrowUpRight size={15} /></button>
          </div>
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> French inspired. Kathmandu made.</p>
            <h1>Good days<br /><em>start here.</em></h1>
            <p className="hero-text">A little corner of warmth, flaky layers and slow coffee. Come in for something freshly baked, stay for the feeling.</p>
            <div className="hero-actions">
              <button className="button button-dark" onClick={() => scrollTo('menu')}>Explore the menu <ArrowUpRight size={16} /></button>
              <button className="text-button" onClick={() => scrollTo('visit')}>Find your nearest BRO <ArrowDownRight size={16} /></button>
            </div>
            <div className="hero-note"><Star size={15} fill="currentColor" /> Loved by 275+ local regulars</div>
          </div>
          <div className="hero-image-wrap">
            <img src={images.storefront} alt="The Bro Bakery storefront in Kathmandu" />
            <div className="hero-stamp">Baked<br /><span>with</span><br />intention</div>
            <div className="image-caption"><span>01</span><span>Chandol · Kathmandu</span></div>
          </div>
        </section>

        <section className="marquee"><div>BAKED DAILY <span>✦</span> SHARED SLOWLY <span>✦</span> MADE WITH INTENTION <span>✦</span> BAKED DAILY <span>✦</span> SHARED SLOWLY</div></section>

        <section className="intro-section" id="story">
          <div className="section-kicker">01 / The BRO feeling</div>
          <div className="intro-content">
            <h2>Not just a bakery.<br /><em>A daily ritual.</em></h2>
            <div className="intro-side"><p>There’s a certain magic in the smell of butter and coffee before the city has fully woken up. At BRO, we make space for those small, good moments.</p><button className="circle-link" onClick={() => scrollTo('visit')}><ArrowDownRight size={20} /></button></div>
          </div>
          <div className="image-grid">
            <figure className="grid-large"><img src={images.room} alt="Sunlit seating area inside Bro Bakery" /><figcaption>Come as you are.</figcaption></figure>
            <figure className="grid-small"><img src={images.chandelier} alt="Warm chandelier over the bakery counter" /><figcaption>Stay a little longer.</figcaption></figure>
          </div>
        </section>

        <section className="menu-section" id="menu">
          <div className="menu-heading"><div><div className="section-kicker">02 / From the counter</div><h2>Worth coming<br /><em>back for.</em></h2></div><p>Our menu changes with the seasons, but the good stuff stays. Everything is made in small batches, right here.</p></div>
          <div className="category-tabs">{categories.map((category) => <button key={category} className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
          <div className="menu-grid">{filteredItems.map((item) => <article className="menu-card" key={item.name}><div className="menu-image"><img src={item.image} alt={item.name} /><span>{item.category}</span></div><div className="menu-info"><div><h3>{item.name}</h3><p>{item.description}</p></div><strong>{item.price}</strong></div></article>)}</div>
          <button className="button button-outline menu-button" onClick={() => alert('Our full menu is coming soon. Call 985-1086904 to order today.')}>View the full menu <ArrowUpRight size={16} /></button>
        </section>

        <section className="quote-section"><div className="quote-mark">“</div><blockquote>The best kind of luxury is something<br /><em>made fresh that morning.</em></blockquote><p>— The BRO philosophy</p></section>

        <section className="visit-section" id="visit">
          <div className="visit-image"><img src={images.coffee} alt="Coffee and pastry served at Bro Bakery" /><div className="visit-badge"><span>Open</span><strong>·</strong><span>Closes 9 PM</span></div></div>
          <div className="visit-copy"><div className="section-kicker">03 / Come say hello</div><h2>Your table<br /><em>is waiting.</em></h2><p>Find us in Chandol, tucked just behind PS Complex. Bring a friend, bring a book, or just bring your appetite.</p><div className="details"><div><MapPin size={18} /><span>Chandol-4, Kathmandu 44600</span></div><div><Clock3 size={18} /><span>Every day · 7 AM — 9 PM</span></div></div><div className="visit-actions"><button className="button button-dark" onClick={() => window.open('https://maps.google.com/?q=Bro+Bakery+Chandol+Kathmandu', '_blank')}>Get directions <ArrowUpRight size={16} /></button><a href="tel:9851086904" className="text-button">985-1086904 <ArrowUpRight size={16} /></a></div></div>
        </section>

        <section className="faq-section"><div className="section-kicker">A few good questions</div><div className="faq-list">{['Do you take cake orders?', 'Are you open on public holidays?', 'Where else can I find BRO?'].map((question, index) => <div className="faq-item" key={question}><button onClick={() => setFaqOpen(faqOpen === index ? null : index)}><span>{question}</span>{faqOpen === index ? <Minus size={18} /> : <Plus size={18} />}</button>{faqOpen === index && <p>{index === 0 ? 'Yes. We love making celebrations a little sweeter. Please call us at least 24 hours ahead for custom cake orders.' : index === 1 ? 'We are open every day from 7 AM to 9 PM, including most public holidays.' : 'You can also find us at The Baha, Sanepa, Thamel, Labim Mall, Basundhara, and One Durbar Mall.'}</p>}</div>)}</div></section>
      </main>

      <footer><div className="footer-top"><div className="footer-brand"><span className="brand-mark">B</span><span className="brand-name">BRO<br /><i>BAKERY</i></span><p>Made for the moments<br />worth lingering over.</p></div><div className="footer-nav"><div><span>Explore</span><button onClick={() => scrollTo('menu')}>Menu</button><button onClick={() => scrollTo('story')}>Our story</button><button onClick={() => scrollTo('visit')}>Locations</button></div><div><span>Follow along</span><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a><a href="tel:9851086904">Call us</a></div></div></div><div className="footer-bottom"><span>© 2024 BRO Bakery</span><span>Chandol, Kathmandu · Nepal</span><span>Made with care</span></div></footer>
    </div>
  );
}

export default App;
