import React, { useState } from 'react'
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const tagColor = {
  'React Js':      '#7c3aed',
  'React Native':  '#0ea5e9',
  'AppStore':      '#000000',
  'Playstore':     '#16a34a',
  'WordPress':     '#2563eb',
}

const ProjectItem = ({ title, framework, imgBg, link, git, button }) => {
  const [hovered, setHovered] = useState(false)
  const color = tagColor[framework] ?? '#7c3aed'

  return (
    <>
      <style>{`
        .proj-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          transition: transform 0.38s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.38s cubic-bezier(0.22,1,0.36,1);
          cursor: pointer;
        }
        .proj-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(124,58,237,0.18), 0 4px 16px rgba(0,0,0,0.06);
        }

        /* Image */
        .proj-img {
          width: 100%; height: 230px;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        .proj-card:hover .proj-img { transform: scale(1.06); }

        /* Shimmer overlay on hover */
        .proj-img-wrap {
          overflow: hidden;
          position: relative;
        }
        .proj-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            transparent 40%,
            rgba(124,58,237,0.18) 100%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .proj-card:hover .proj-img-wrap::after { opacity: 1; }

        /* Bottom bar */
        .proj-body {
          padding: 18px 20px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .proj-meta { flex: 1; min-width: 0; }
        .proj-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a1023;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 6px;
        }
        .proj-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 10px;
          border-radius: 999px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* Action buttons */
        .proj-actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
        .proj-btn-demo {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 8px 16px;
          background: #7c3aed;
          color: #fff;
          font-size: 0.78rem;
          font-weight: 600;
          border-radius: 999px;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 14px rgba(124,58,237,0.3);
        }
        .proj-btn-demo:hover {
          background: #6d28d9;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(124,58,237,0.4);
        }
        .proj-btn-git {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 1.5px solid rgba(124,58,237,0.25);
          color: #7c3aed;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .proj-btn-git:hover {
          background: #7c3aed;
          color: #fff;
          border-color: #7c3aed;
          transform: translateY(-1px);
        }

        /* Number badge (top-left) */
        .proj-num {
          position: absolute;
          top: 14px; left: 14px;
          z-index: 2;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(6px);
          border-radius: 10px;
          padding: 4px 10px;
          font-size: 0.7rem;
          font-weight: 700;
          color: #7c3aed;
          letter-spacing: 0.08em;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
      `}</style>

      <div
        className="proj-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div className="proj-img-wrap">
          <img className="proj-img" src={imgBg} alt={title} />
        </div>

        {/* Bottom info bar */}
        <div className="proj-body">
          <div className="proj-meta">
            <div className="proj-title">{title}</div>
            <span
              className="proj-tag"
              style={{
                background: `${color}18`,
                color: color,
                border: `1px solid ${color}30`
              }}
            >
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: color, display: 'inline-block', flexShrink: 0
              }} />
              {framework}
            </span>
          </div>

          <div className="proj-actions">
            {git && (
              <a href={git} target="_blank" rel="noopener noreferrer"
                 className="proj-btn-git" aria-label="GitHub repo">
                <FaGithub size={15} />
              </a>
            )}
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer"
                 className="proj-btn-demo">
                {button ?? 'Demo'}
                <HiExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectItem