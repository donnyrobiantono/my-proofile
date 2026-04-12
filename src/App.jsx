import { useEffect, useMemo, useState } from 'react'
import profile from './assets/profile.png'
import logo from './assets/logo.png'

const projects = [
  {
    title: 'Sistem Manajemen Anomali',
    stack: 'CodeIgniter 4',
    description:
      'Aplikasi untuk membantu proses pencatatan, pemantauan, dan pengelolaan anomali secara lebih terstruktur dan efisien.',
  },
  {
    title: 'POS System',
    stack: 'CodeIgniter 4',
    description:
      'Sistem point of sale yang dirancang untuk membantu transaksi penjualan, pencatatan data, dan monitoring operasional.',
  },
  {
    title: 'Manajemen Gudang',
    stack: 'Flutter',
    description:
      'Aplikasi mobile untuk mendukung pengelolaan stok, pergerakan barang, dan monitoring gudang secara lebih fleksibel.',
  },
  {
    title: 'POS Modern',
    stack: 'React JS',
    description:
      'Aplikasi POS berbasis web dengan antarmuka modern, responsif, dan fokus pada kemudahan penggunaan.',
  },
]

const skills = [
  'React JS',
  'JavaScript',
  'CodeIgniter 4',
  'Flutter',
  'Python',
  'Node.js',
  'HTML',
  'CSS',
  'REST API',
  'Git',
]


function App() {
  const [text, setText] = useState('')
  const fullText = 'Electrical Professional & Software Engineer'
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return 'dark'
  })

  useEffect(() => {
    let index = 0

    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1))
      index++

      if (index === fullText.length) {
        clearInterval(interval)
      }
    }, 50) // kecepatan ketik (lebih kecil = lebih cepat)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const experienceYears = useMemo(() => new Date().getFullYear() - 2017, [])

  return (
    <div className="app-shell">
      <header className="navbar">
        <div className="brand-logo">
          <img src={logo} alt="Logo" />
        </div>

        <nav className="nav-menu">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </header>

      <main className="container">
        <section id="home" className="hero">
          <div className="hero-left">
            <h1>
              Hi, I&apos;am <span className="accent-purple">Donny</span>
              <br />
              <span className="accent-blue">Robiantono</span>
            </h1>

            <h2 className="typing">
              {text}
              <span className="cursor">|</span>
            </h2>

            <p>
              Seorang profesional di bidang kelistrikan yang bekerja
              di PT PLN (Persero) sejak 2017. Sejak 2020, saya juga aktif sebagai Software
              Engineer dengan pengalaman dalam pengembangan aplikasi web dan mobile untuk
              mendukung efisiensi operasional dan transformasi digital.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Hire Me</a>
              <a href="#projects" className="btn btn-outline">My Portfolio</a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image-wrap">
              <img src={profile} alt="Donny Robiantono" className="hero-image" />
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-title">
            <span>About</span>
            <h2>Tentang Saya</h2>
          </div>
          <div className="glass about-card">
            <p>
              Saya memiliki latar belakang profesional di bidang kelistrikan dan pengalaman
              kerja di lingkungan BUMN, khususnya PT PLN (Persero). Selain itu, saya juga
              aktif membangun solusi digital menggunakan React JS, CodeIgniter 4, Flutter,
              Python, dan Node.js.
            </p>
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-title">
            <span>Education</span>
            <h2>Pendidikan</h2>
          </div>
          <div className="glass timeline-item">
            <h3>SMK Negri 2 Kota Probolinggo</h3>
            <p>Teknik Instalasi Tenaga Listrik</p>
            <small>
              Lulusan SMK Tahun 2016 dengan keahlian di bidang instalasi tenaga listrik, yang memberikan dasar yang kuat untuk karir saya di industri kelistrikan.
            </small>
          </div>
          <br />
          <div className="glass timeline-item">
            <h3>Universitas Terbuka</h3>
            <p>Program Studi Sistem Informasi</p>
            <small>
              Saat ini saya sedang menempuh pendidikan untuk memperkuat kompetensi di bidang
              sistem informasi dan teknologi.
            </small>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-title">
            <span>Skills</span>
            <h2>Teknologi yang Saya Kuasai</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill} className="skill-chip">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-title">
            <span>Portfolio</span>
            <h2>Project Pilihan</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article key={project.title + index} className="project-card">
                <span className="project-stack">{project.stack}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-title">
            <span>Contact</span>
            <h2>Hubungi Saya</h2>
          </div>
          <div className="glass about-card">
            <p>Email: donnyrobiantono3@gmail.com</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App