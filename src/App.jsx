
import "./App.css";

const internshipTasks = [
  {
    number: "01",
    title: "Broken Dashboard",
    category: "Internship Assignment",
    description:
      "Debugging dashboard functionality, fixing application issues and working with automated tests.",
    tags: ["React", "Debugging", "Vitest"],
    icon: "🛠️",
  },
  {
    number: "02",
    title: "SkillBridge Lite",
    category: "Final Capstone Project",
    description:
      "A responsive internship discovery platform with opportunity listings, search, filters, application forms and application tracking.",
    tags: ["React", "Vite", "React Router", "Testing"],
    icon: "🌉",
  },
];

const projects = [
  {
    title: "SkillBridge Lite",
    description:
      "Internship discovery platform with dynamic routes, opportunity filtering, validated applications and localStorage.",
    category: "Capstone Project",
    tags: ["React", "CSS", "Vite"],
    icon: "🌉",
    color: "blue",
    link: "https://github.com/ashuu-pixel/skillbridge-lite",
  },
  {
    title: "Luxury Jewelry Store",
    description:
      "An elegant jewelry e-commerce experience with product collections, shopping cart and wishlist functionality.",
    category: "Personal Project",
    tags: ["React", "JavaScript", "CSS"],
    icon: "💎",
    color: "pink",
  },
  {
    title: "Scientific Calculator",
    description:
      "A modern calculator featuring a dedicated scientific functions panel and interactive interface.",
    category: "Personal Project",
    tags: ["JavaScript", "CSS", "React"],
    icon: "🧮",
    color: "purple",
  },
  {
    title: "QuickTask",
    description:
      "A task management application with task creation, editing, filtering and localStorage persistence.",
    category: "Personal Project",
    tags: ["React", "JavaScript", "LocalStorage"],
    icon: "✅",
    color: "green",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "React Router",
  "Vite",
  "Git",
  "GitHub",
  "Responsive Design",
  "Vitest",
  "REST APIs",
  "LocalStorage",
];

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo">
          Build<span>With</span>Code<span className="logo-dot">.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#internship">Internship</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Connect ↗
        </a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              WEB DEVELOPER PORTFOLIO
            </div>

            <p className="hero-small">HELLO, WORLD! I'M</p>

            <h1>
              Building Ideas
              <br />
              Into <span>Digital</span>
              <br />
              Experiences.
            </h1>

            <p className="hero-description">
              I'm a passionate aspiring web developer learning, building
              and creating beautiful digital experiences with modern web
              technologies.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work ↗
              </a>
              <a href="#about" className="secondary-button">
                More About Me
              </a>
            </div>

            <div className="hero-social">
              <a href="https://github.com/ashuu-pixel" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <span>•</span>
              <a href="https://www.tiktok.com/@buildwithcode" target="_blank" rel="noreferrer">
                TikTok ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow glow-one"></div>
            <div className="glow glow-two"></div>

            <div className="floating-card card-top">
              <span>✦</span> Creative Thinking
            </div>

            <div className="code-window">
              <div className="window-header">
                <div className="window-dots">
                  <i></i><i></i><i></i>
                </div>
                <span>developer.jsx</span>
              </div>

              <div className="code-content">
                <p><span className="code-purple">const</span> developer = {"{"}</p>
                <p className="indent">name: <span className="code-green">"Ayesha"</span>,</p>
                <p className="indent">role: <span className="code-green">"Web Developer"</span>,</p>
                <p className="indent">passion: <span className="code-green">"Creating"</span>,</p>
                <p className="indent">learning: <span className="code-green">"Every Day"</span></p>
                <p>{"}"}</p>
                <br />
                <p><span className="code-purple">function</span> <span className="code-blue">buildFuture</span>() {"{"}</p>
                <p className="indent">return <span className="code-green">"Dream Big!"</span>;</p>
                <p>{"}"}</p>
                <br />
                <p className="code-comment">// Turning ideas into reality ✨</p>
              </div>
            </div>

            <div className="floating-card card-bottom">
              <span>⚡</span> Always Learning
            </div>

            <div className="hero-orbit">{"{"} code {"}"}</div>
          </div>
        </section>

        <section className="stats-strip">
          <div><strong>02</strong><span>Months Internship</span></div>
          <div><strong>04+</strong><span>Featured Projects</span></div>
          <div><strong>12+</strong><span>Technical Skills</span></div>
          <div><strong>11/11</strong><span>Passing Tests</span></div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="section-label">GET TO KNOW ME</p>
            <h2>Turning curiosity into <span>creativity.</span></h2>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">👩🏻‍💻</div>
              <h3>Hi, I'm Ayesha!</h3>
              <p>
                I'm an aspiring web developer who enjoys turning ideas
                into interactive and user-friendly websites. My journey
                is all about learning by building real projects and
                continuously improving my skills.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <span>01 / MY APPROACH</span>
                <p>Learn, experiment, build and improve.</p>
              </div>
              <div className="detail-item">
                <span>02 / MY INTEREST</span>
                <p>Frontend development and creative UI design.</p>
              </div>
              <div className="detail-item">
                <span>03 / MY GOAL</span>
                <p>Grow into a skilled and confident developer.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section internship-section" id="internship">
          <div className="section-heading">
            <p className="section-label">MY PROFESSIONAL JOURNEY</p>
            <h2>Internship <span>Experience.</span></h2>
            <p className="section-subtitle">
              My frontend development journey at NeuroFive Solutions.
            </p>
          </div>

          <div className="internship-overview">
            <div className="company-icon">N</div>
            <div className="company-details">
              <span className="company-label">INTERNSHIP EXPERIENCE</span>
              <h3>NeuroFive Solutions</h3>
              <p>Frontend Web Development Intern</p>
            </div>
            <div className="internship-duration">
              <span> DURATION </span>
              <strong>2 Months</strong>
            </div>
          </div>

          <div className="internship-grid">
            {internshipTasks.map((task) => (
              <article className="task-card" key={task.number}>
                <div className="task-top">
                  <span className="task-number">{task.number}</span>
                  <span className="task-icon">{task.icon}</span>
                </div>
                <p className="task-category">{task.category}</p>
                <h3>{task.title}</h3>
                <p className="task-description">{task.description}</p>
                <div className="tag-list">
                  {task.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="section-label">SELECTED WORK</p>
            <h2>Things I've <span>created.</span></h2>
            <p className="section-subtitle">
              A collection of my internship and personal development projects.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.color}`} key={project.title}>
                <div className="project-preview">
                  <span className="project-icon">{project.icon}</span>
                  <span className="preview-code">&lt; / &gt;</span>
                </div>
                <div className="project-info">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                      View on GitHub ↗
                    </a>
                  ) : (
                    <span className="project-link coming-soon">
                      Project details coming soon
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="section-label">MY TOOLKIT</p>
            <h2>Technologies I <span>work with.</span></h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {skill}
                <b>✦</b>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-label">HAVE A PROJECT IN MIND?</p>
          <h2>Let's create something <span>amazing.</span></h2>
          <p>
            I'm always excited to learn, collaborate and explore new opportunities.
          </p>
          <a
            href="https://github.com/ashuu-pixel"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Connect on GitHub ↗
          </a>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          Build<span>With</span>Code<span className="logo-dot">.</span>
        </a>
        <p>Designed & built with passion by Ayesha. © 2026</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
