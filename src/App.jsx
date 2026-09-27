import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Capabilities from './components/Capabilities'
import Infrastructure from './components/Infrastructure'
import Quality from './components/Quality'
import WhyBES from './components/WhyBES'
import Clients from './components/Clients'
import CTASection from './components/CTASection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import { useState } from 'react'

function App() {
  const [error, setError] = useState(null);
  try {
    return (
      <main className="relative min-h-screen overflow-x-hidden">
        <div className="overflow-hidden">
          <Navbar />
          <Hero />
          <About />
          <Products />
          <Capabilities />
          <Infrastructure />
          <Quality />
          <WhyBES />
          <Clients />
          <CTASection />
          <Contact />
          <Footer />
          <FloatingWhatsApp />
        </div>
      </main>
    );
  } catch (err) {
    setError(err);
    return (
      <div className="p-4 bg-red-50 text-red-800">
        <h2 className="text-xl font-bold">Rendering Error</h2>
        <p className="mt-2">{err.message}</p>
        <p className="mt-2">Stack: {err.stack}</p>
      </div>
    );
  }
}

export default App