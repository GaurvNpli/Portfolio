import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import SkillsServices from './sections/SkillsServices'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <About />
          <SkillsServices />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
