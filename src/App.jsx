import { useEffect, useMemo, useState } from 'react'
import profile from './assets/profile.png'
import logo from './assets/logo.png'

const projects = [
  {
    title: 'Sistem Manajemen Anomali',
    stack: 'CodeIgniter 4',
    description:
      'Aplikasi pencatatan dan pemantauan anomali operasional agar proses tindak lanjut lebih rapi, terukur, dan mudah dicek kembali.',
  },
  {
    title: 'POS System',
    stack: 'CodeIgniter 4',
    description:
      'Sistem kasir untuk transaksi penjualan, pengelolaan data produk, serta ringkasan operasional harian.',
  },
  {
    title: 'Manajemen Gudang',
    stack: 'Flutter',
    description:
      'Aplikasi mobile untuk membantu pencatatan stok, perpindahan barang, dan monitoring gudang secara fleksibel.',
  },
  {
    title: 'POS Modern',
    stack: 'React JS',
    description:
      'Aplikasi POS berbasis web dengan tampilan bersih, responsif, dan mudah digunakan untuk kebutuhan operasional.',
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

const quickStats = [
  { value: '2017', label: 'Mulai berkarier di kelistrikan' },
  { value: '2020', label: 'Aktif membangun aplikasi' },
  { value: '4+', label: 'Project digital dikerjakan' },
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
    }, 42)

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
        <a href="#home" className="brand-logo" aria-label="Back to home">
          <img src={logo} alt="Logo Donny" />
          <span>Donny Robiantono</span>
        </a>

        <nav className="nav-menu" aria-label="Main navigation">
          <a href="#home">Home</a>
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
          {theme === 'dark' ? 'Mode terang' : 'Mode gelap'}
        </button>
      </header>

      <main className="container">
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio pribadi</p>
            <h1>
              Hi, saya <span>Donny</span>
              <br />
              Robiantono.
            </h1>

            <h2 className="typing">
              {text}
              <span className="cursor">|</span>
            </h2>

            <p className="hero-description">
              Saya bekerja di bidang kelistrikan dan juga membangun aplikasi web maupun
              mobile untuk membantu pekerjaan operasional menjadi lebih tertata, cepat,
              dan mudah dipantau.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">Lihat project</a>
              <a href="#contact" className="btn btn-outline">Hubungi saya</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Profile photo area">
            <div className="photo-card">
              <img src={profile} alt="Donny Robiantono" className="hero-image" />
            </div>
            <div className="note-card">
              <strong>{experienceYears}+ tahun</strong>
              <span>pengalaman kerja lapangan dan pengembangan sistem.</span>
            </div>
          </div>
        </section>

        <section className="stats-row" aria-label="Ringkasan pengalaman">
          {quickStats.map((item) => (
            <div key={item.value} className="stat-item">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section id="about" className="section section-two-column">
          <div className="section-title">
            <span>About</span>
            <h2>Tentang Saya</h2>
          </div>
          <div className="content-card about-card">
            <p>
              Saya terbiasa berada di lingkungan kerja teknis, khususnya kelistrikan.
              Di sisi lain, saya juga mengembangkan solusi digital menggunakan React JS,
              CodeIgniter 4, Flutter, Python, dan Node.js. Bagi saya, aplikasi yang baik
              bukan hanya terlihat modern, tetapi juga benar-benar membantu pekerjaan harian.
            </p>
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-title center-title">
            <span>Education</span>
            <h2>Pendidikan</h2>
          </div>
          <div className="timeline">
            <article className="content-card timeline-item">
              <span className="timeline-dot" />
              <h3>SMK Negeri 2 Kota Probolinggo</h3>
              <p>Teknik Instalasi Tenaga Listrik</p>
              <small>
                Lulusan tahun 2016 dengan dasar keahlian instalasi tenaga listrik.
              </small>
            </article>
            <article className="content-card timeline-item">
              <span className="timeline-dot" />
              <h3>Universitas Terbuka</h3>
              <p>Program Studi Sistem Informasi</p>
              <small>
                Saat ini sedang memperkuat kompetensi di bidang sistem informasi dan teknologi.
              </small>
            </article>
          </div>
        </section>

        <section id="skills" className="section section-two-column">
          <div className="section-title">
            <span>Skills</span>
            <h2>Teknologi yang Saya Gunakan</h2>
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
          <div className="section-title center-title">
            <span>Portfolio</span>
            <h2>Project Pilihan</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article key={project.title + index} className="project-card">
                <span className="project-number">0{index + 1}</span>
                <span className="project-stack">{project.stack}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div>
              <span className="contact-label">Contact</span>
              <h2>Mari terhubung.</h2>
              <p>Terbuka untuk diskusi project, pengembangan aplikasi, atau kolaborasi teknis.</p>
            </div>
            <a href="mailto:donnyrobiantono3@gmail.com" className="btn btn-primary">
              donnyrobiantono3@gmail.com
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
