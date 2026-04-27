import React from 'react'
import ProjectItem from './ProjectItem'

const projects = [
  {
    link: 'https://nidanetng.com/',
    title: 'Nindanet',
    framework: 'wordpress',
    imgBg: require('../assets/first.png'),
  },
  {
    link: 'https://naija-home.com/',
    title: 'NaijaHome',
    framework: 'wordpress',
    imgBg: require('../assets/cap.png'),
  },
  {
    link: 'https://turakalagos.com/',
    title: 'TurakaLagos',
    framework: 'WordPress',
    imgBg: require('../assets/second.png'),
  },
  {
    link: 'https://hlbautocare.com',
    title: 'Hlb-Autocare',
    framework: 'WordPress',
    imgBg: require('../assets/hlb.png'),
  },
  {
    link: 'https://nestopialtd.com/',
    title: 'Nestopia',
    framework: 'Wordpress',
    imgBg: require('../assets/third.png'),
  },
  {
    link: 'https://plixsports.com',
    title: 'Plixsports',
    framework: 'WordPress',
    imgBg: require('../assets/px.png'),
  },
]

const Work = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&display=swap');

        #projects {
          font-family: 'DM Sans', sans-serif;
          background: #f9f7ff;
          position: relative;
          overflow: hidden;
        }

        /* Section blob */
        #projects::before {
          content: '';
          position: absolute;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%);
          border-radius: 50%;
          top: -200px; right: -150px;
          pointer-events: none;
        }

        .work-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #7c3aed;
        }
        .work-label-line {
          width: 32px; height: 2px;
          background: linear-gradient(90deg, #7c3aed, #ec4899);
          border-radius: 2px;
        }

        .work-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 700;
          color: #1a1023;
          line-height: 1.2;
        }
        .work-heading span {
          position: relative;
          color: #7c3aed;
        }
        .work-heading span::after {
          content: '';
          position: absolute;
          left: 0; bottom: 0;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #7c3aed, #ec4899);
          border-radius: 2px;
        }

        .work-sub {
          color: #4b4560;
          font-size: 1rem;
          max-width: 480px;
          line-height: 1.7;
        }

        /* Stats row */
        .work-stats {
          display: flex;
          align-items: center;
          gap: 28px;
          padding: 20px 0;
          border-top: 1px solid rgba(124,58,237,0.1);
          border-bottom: 1px solid rgba(124,58,237,0.1);
          flex-wrap: wrap;
        }
        .stat-item { text-align: center; }
        .stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #7c3aed;
          line-height: 1;
        }
        .stat-label {
          font-size: 0.7rem;
          color: #4b4560;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 3px;
        }
        .stat-divider {
          width: 1px; height: 36px;
          background: rgba(124,58,237,0.15);
        }

        /* Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }

        /* CTA */
        .work-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border: 2px solid rgba(124,58,237,0.3);
          color: #7c3aed;
          font-weight: 600;
          font-size: 0.88rem;
          border-radius: 999px;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .work-cta:hover {
          background: #7c3aed;
          border-color: #7c3aed;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(124,58,237,0.28);
        }
      `}</style>

      <section id="projects" className="w-full pb-24 px-6">
        <div className="max-w-6xl mx-auto relative z-10">

          {/* Header */}
          <div className="mb-14 space-y-5">
            <div className="work-label">
              <span className="work-label-line" />
              Selected Work
              <span className="work-label-line" />
            </div>

            <h2 className="work-heading">
              Things I've <span>Built</span>
            </h2>

            <p className="work-sub">
              A curated selection of projects spanning web apps, mobile apps,
              and quality-assured digital experiences.
            </p>

            {/* Stats */}
            <div className="work-stats">
              <div className="stat-item">
                <div className="stat-num">6+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <div className="stat-num">3</div>
                <div className="stat-label">Platforms</div>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <div className="stat-num">100%</div>
                <div className="stat-label">QA Tested</div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {projects.map((proj) => (
              <ProjectItem
                key={proj.title}
                button="Demo"
                {...proj}
              />
            ))}
          </div>

          {/* Footer CTA */}
         

        </div>
      </section>
    </>
  )
}

export default Work