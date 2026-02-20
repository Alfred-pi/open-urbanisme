import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Approaches } from './sections/Approaches';
import { Trust } from './sections/Trust';
import { Innovation } from './sections/Innovation';
import { Deployment } from './sections/Deployment';
import { Universities } from './sections/Universities';
import { Network } from './sections/Network';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[var(--color-bg)]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Approaches />
          <Trust />
          <Innovation />
          <Deployment />
          <Universities />
          <Network />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
