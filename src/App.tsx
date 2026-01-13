import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
