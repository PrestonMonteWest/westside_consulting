import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

function Nav({
  sections,
  initialSection,
}: {
  sections: string[]
  initialSection: string
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(initialSection)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.find((entry) => entry.isIntersecting)
        if (entry) {
          setActiveSection(entry.target.id)
        }
      },
      // Tripwire centered vertically across the viewport
      {
        rootMargin: '-50% 0px',
      },
    )

    sections
      .map((section) => document.getElementById(section))
      .filter((element) => !!element)
      .forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav className="nav">
      <div className="nav-container">
        <motion.div
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img width={34} src="/icon.png" />
          <span className="logo-text">Westside Consulting</span>
        </motion.div>

        <div className="nav-links desktop-nav">
          {['Services', 'Tech', 'About', 'Contact'].map((item, i) => (
            <motion.button
              key={item}
              className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              onClick={() => scrollToSection(item.toLowerCase())}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {item}
            </motion.button>
          ))}
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0 }}
      >
        {['Services', 'Tech', 'About', 'Contact'].map((item) => (
          <button
            key={item}
            className="mobile-nav-link"
            onClick={() => scrollToSection(item.toLowerCase())}
          >
            {item}
          </button>
        ))}
      </motion.div>
    </nav>
  )
}

export default Nav
