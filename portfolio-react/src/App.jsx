import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="relative w-full min-h-screen bg-forest-950">
      {/* Fixed background */}
      <div id="forest-bg" className="fixed inset-0 -z-20"></div>
      
      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative z-0">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
