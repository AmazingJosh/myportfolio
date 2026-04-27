import { FaTwitter, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { HiArrowRight } from 'react-icons/hi'
import ProfilePhoto from "../assets/Esther.jpeg"


const MainPage = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --violet: #7c3aed;
          --violet-light: #ede9fe;
          --pink: #ec4899;
          --dark: #1a1023;
          --mid: #4b4560;
          --light: #f9f7ff;
        }

        #home {
          font-family: 'DM Sans', sans-serif;
          background: var(--light);
          min-height: 100vh;
          overflow: hidden;
        }

        /* ── Noise grain overlay ── */
        #home::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.5;
        }

        /* ── Decorative blobs ── */
        .blob-1 {
          position: absolute;
          width: 520px; height: 520px;
          background: radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%);
          border-radius: 50%;
          top: -120px; left: -100px;
          pointer-events: none;
          animation: blobDrift 14s ease-in-out infinite alternate;
        }
        .blob-2 {
          position: absolute;
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 70%);
          border-radius: 50%;
          bottom: 0; right: -80px;
          pointer-events: none;
          animation: blobDrift 18s ease-in-out infinite alternate-reverse;
        }
        @keyframes blobDrift {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(30px, 20px) scale(1.08); }
        }

        /* ── Staggered entrance ── */
        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .fade-up:nth-child(1) { animation-delay: 0.1s; }
        .fade-up:nth-child(2) { animation-delay: 0.25s; }
        .fade-up:nth-child(3) { animation-delay: 0.4s; }
        .fade-up:nth-child(4) { animation-delay: 0.55s; }
        .fade-up:nth-child(5) { animation-delay: 0.7s; }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── Badge ── */
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 16px;
          background: var(--violet-light);
          color: var(--violet);
          border: 1px solid rgba(124,58,237,0.2);
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .badge-dot {
          width: 7px; height: 7px;
          background: var(--violet);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }

        /* ── Heading ── */
        .hero-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3.4rem);
          font-weight: 700;
          color: var(--dark);
          line-height: 1.15;
        }
        .hero-heading em {
          font-style: italic;
          color: var(--violet);
          position: relative;
        }
        .hero-heading em::after {
          content: '';
          position: absolute;
          left: 0; bottom: 2px;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, var(--violet), var(--pink));
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          animation: underlineGrow 0.8s 1.1s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        @keyframes underlineGrow { to { transform: scaleX(1); } }

        /* ── CTA Buttons ── */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          background: var(--violet);
          color: #fff;
          font-weight: 600;
          font-size: 0.9rem;
          border-radius: 999px;
          box-shadow: 0 8px 24px rgba(124,58,237,0.28);
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .btn-primary:hover {
          background: #6d28d9;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(124,58,237,0.38);
        }
        .btn-primary:hover .btn-arrow { transform: translateX(4px); }
        .btn-arrow { transition: transform 0.25s ease; }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          border: 2px solid rgba(124,58,237,0.3);
          color: var(--violet);
          font-weight: 600;
          font-size: 0.9rem;
          border-radius: 999px;
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .btn-outline:hover {
          background: var(--violet-light);
          border-color: var(--violet);
          transform: translateY(-2px);
        }

        /* ── Social Pills ── */
        .social-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(124,58,237,0.2);
          color: var(--mid);
          transition: all 0.22s ease;
          text-decoration: none;
        }
        .social-pill:hover {
          background: var(--violet);
          border-color: var(--violet);
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(124,58,237,0.3);
        }

        /* ── Photo Frame ── */
        .photo-wrapper {
          position: relative;
          width: 320px; height: 380px;
        }
        @media (max-width: 640px) {
          .photo-wrapper { width: 220px; height: 265px; }
        }

        /* Spinning dashed ring */
        .ring-spin {
          position: absolute;
          inset: -18px;
          border-radius: 42% 58% 60% 40% / 48% 42% 58% 52%;
          border: 2px dashed rgba(124,58,237,0.35);
          animation: morphSpin 12s linear infinite;
        }
        @keyframes morphSpin {
          0%   { border-radius: 42% 58% 60% 40% / 48% 42% 58% 52%; transform: rotate(0deg); }
          50%  { border-radius: 60% 40% 38% 62% / 52% 60% 40% 48%; }
          100% { border-radius: 42% 58% 60% 40% / 48% 42% 58% 52%; transform: rotate(360deg); }
        }

        /* Outer glow ring */
        .ring-glow {
          position: absolute;
          inset: -6px;
          border-radius: 38% 62% 54% 46% / 46% 50% 50% 54%;
          background: linear-gradient(135deg, rgba(124,58,237,0.15), rgba(236,72,153,0.15));
          animation: morphGlow 8s ease-in-out infinite alternate;
          z-index: 0;
        }
        @keyframes morphGlow {
          0%   { border-radius: 38% 62% 54% 46% / 46% 50% 50% 54%; }
          100% { border-radius: 60% 40% 46% 54% / 54% 46% 60% 40%; }
        }

        /* The actual image container */
        .photo-frame {
          position: relative;
          z-index: 1;
          width: 100%; height: 100%;
          border-radius: 38% 62% 54% 46% / 46% 50% 50% 54%;
          overflow: hidden;
          animation: morphFrame 8s ease-in-out infinite alternate;
          box-shadow:
            0 20px 60px rgba(124,58,237,0.2),
            0 4px 16px rgba(0,0,0,0.08);
          border: 3px solid rgba(255,255,255,0.8);
        }
        @keyframes morphFrame {
          0%   { border-radius: 38% 62% 54% 46% / 46% 50% 50% 54%; }
          100% { border-radius: 60% 40% 46% 54% / 54% 46% 60% 40%; }
        }

        .photo-frame img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.6s ease;
        }
        .photo-wrapper:hover .photo-frame img {
          transform: scale(1.04);
        }

        /* Floating accent dots */
        .dot {
          position: absolute;
          border-radius: 50%;
          animation: floatDot 4s ease-in-out infinite alternate;
        }
        .dot-1 {
          width: 14px; height: 14px;
          background: var(--violet);
          top: 12%; right: -8%;
          animation-delay: 0s;
          box-shadow: 0 0 0 4px rgba(124,58,237,0.15);
        }
        .dot-2 {
          width: 9px; height: 9px;
          background: var(--pink);
          bottom: 20%; left: -6%;
          animation-delay: 1.2s;
          box-shadow: 0 0 0 3px rgba(236,72,153,0.15);
        }
        .dot-3 {
          width: 6px; height: 6px;
          background: var(--violet);
          bottom: 8%; right: 0%;
          animation-delay: 0.6s;
          opacity: 0.6;
        }
        @keyframes floatDot {
          from { transform: translateY(0px); }
          to   { transform: translateY(-10px); }
        }

        /* Experience badge */
        .exp-badge {
          position: absolute;
          bottom: -16px;
          left: -20px;
          background: #fff;
          border-radius: 16px;
          padding: 10px 16px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 3;
          animation: floatDot 5s ease-in-out infinite alternate;
          animation-delay: 0.5s;
        }
        .exp-badge-icon {
          width: 36px; height: 36px;
          background: var(--violet-light);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
        }
        .exp-badge-text { line-height: 1.3; }
        .exp-badge-num {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--dark);
        }
        .exp-badge-label {
          font-size: 0.7rem;
          color: var(--mid);
        }

        /* Divider */
        .section-divider {
          width: 48px; height: 3px;
          background: linear-gradient(90deg, var(--violet), var(--pink));
          border-radius: 2px;
          margin: 0 auto;
        }
      `}</style>

      <div id="home" className="relative w-full min-h-screen flex items-center">
        {/* Background blobs */}
        <div className="blob-1" />
        <div className="blob-2" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 w-full pt-28 pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-12 lg:gap-20">

            {/* ── Left: Text Content ── */}
            <div className="flex-1 text-center sm:text-left space-y-6">

              <div className="fade-up flex justify-center sm:justify-start">
                <div className="badge">
                  <span className="badge-dot" />
                  Available for Work
                </div>
              </div>

              <div className="fade-up">
                <h1 className="hero-heading">
                  Hi, I'm <em>Esther</em><br />
                  QA Engineer &<br />
                  WordPress Dev
                </h1>
              </div>

              <div className="fade-up">
                <p style={{ color: 'var(--mid)', maxWidth: '420px', lineHeight: 1.75, fontSize: '1rem' }}
                   className="mx-auto sm:mx-0">
                  Passionate about building digital products that work beautifully
                  and perform flawlessly — from pixel-perfect UIs to bulletproof test coverage.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="fade-up flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <a href="/#projects" className="btn-primary">
                  See My Work <HiArrowRight className="btn-arrow" size={16} />
                </a>
                <a href="/#contact" className="btn-outline">
                  Let's Connect
                </a>
              </div>

              {/* Socials */}
              {/* <div className="fade-up">
                <div className="flex items-center justify-center sm:justify-start gap-2 pt-2">
                  <span style={{ fontSize: '0.75rem', color: 'var(--mid)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Find me on
                  </span>
                  <div style={{ flex: 1, maxWidth: 40, height: 1, background: 'rgba(124,58,237,0.2)' }} />
                  {socials.map(({ href, icon, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                       aria-label={label} className="social-pill">
                      {icon}
                    </a>
                  ))}
                </div>
              </div> */}
            </div>

            {/* ── Right: Photo Frame ── */}
            <div className="fade-up flex justify-center flex-shrink-0">
              <div className="photo-wrapper">
                {/* Glowing morphing background */}
                <div className="ring-glow" />

                {/* Spinning dashed orbit ring */}
                <div className="ring-spin" />

                {/* Photo */}
                <div className="photo-frame">
                  
                    <img src={ProfilePhoto} alt="Esther Ozichi Otudoh" />
                 
                  <div style={{
                    width: '100%', height: '100%',
                    background: 'linear-gradient(160deg, #ede9fe 0%, #ddd6fe 40%, #c4b5fd 100%)',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    gap: 8
                  }}>
                    <div style={{ fontSize: '3.5rem' }}>👩‍💻</div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--violet)', fontWeight: 600, letterSpacing: '0.05em' }}>
                      Add your photo here
                    </p>
                  </div>
                </div>

                {/* Floating accent dots */}
                <div className="dot dot-1" />
                <div className="dot dot-2" />
                <div className="dot dot-3" />

                {/* Experience floating badge */}
                <div className="exp-badge">
                  <div className="exp-badge-icon">✅</div>
                  <div className="exp-badge-text">
                    <div className="exp-badge-num">QA + WordPress</div>
                    <div className="exp-badge-label">Full-stack quality</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ── Scroll hint ── */}
          <div className="mt-20 flex flex-col items-center gap-2 opacity-50">
            <div className="section-divider" />
            <div style={{
              width: 22, height: 36, border: '2px solid rgba(124,58,237,0.35)',
              borderRadius: 12, display: 'flex', justifyContent: 'center', paddingTop: 6, marginTop: 8
            }}>
              <div style={{
                width: 4, height: 8, background: 'var(--violet)', borderRadius: 2,
                animation: 'scrollDot 1.5s ease-in-out infinite'
              }} />
            </div>
          </div>
          <style>{`
            @keyframes scrollDot {
              0%, 100% { transform: translateY(0); opacity: 1; }
              50% { transform: translateY(8px); opacity: 0.3; }
            }
          `}</style>
        </div>
      </div>
    </>
  )
}

export default MainPage