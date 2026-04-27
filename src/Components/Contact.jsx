import React, { useState } from 'react'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'

const Contact = () => {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const form = e.target
    const data = new FormData(form)

    try {
      await fetch('https://getform.io/f/c18a3d6c-03e9-40bb-aebc-d599269872fe', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      setSent(true)
      form.reset()
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const contactDetails = [
    {
      icon: <HiOutlineMail size={20} />,
      label: 'Email',
      value: 'estachi4luv@gmail.com',
      href: 'mailto:estachi4luv@gmail.com',
    },
    {
      icon: <HiOutlinePhone size={20} />,
      label: 'Phone',
      value: '07071235846',
      href: 'tel:07071235846',
    },
    {
      icon: <HiOutlineLocationMarker size={20} />,
      label: 'Location',
      value: 'Nigeria',
      href: null,
    },
  ]



  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&display=swap');

        #contact {
          font-family: 'DM Sans', sans-serif;
          background: #f9f7ff;
          position: relative;
          overflow: hidden;
        }

        /* background blob */
        #contact::before {
          content: '';
          position: absolute;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%);
          border-radius: 50%;
          bottom: -150px; left: -100px;
          pointer-events: none;
        }
        #contact::after {
          content: '';
          position: absolute;
          width: 320px; height: 320px;
          background: radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%);
          border-radius: 50%;
          top: -80px; right: -60px;
          pointer-events: none;
        }

        /* Section label */
        .contact-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #7c3aed;
        }
        .contact-label-line {
          width: 32px; height: 2px;
          background: linear-gradient(90deg, #7c3aed, #ec4899);
          border-radius: 2px;
        }

        .contact-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 700;
          color: #1a1023;
          line-height: 1.2;
        }
        .contact-heading span { color: #7c3aed; }

        /* Info card */
        .info-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 4px 30px rgba(0,0,0,0.06);
          display: flex;
          flex-direction: column;
          gap: 28px;
          height: 100%;
        }

        /* Contact detail row */
        .detail-row {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          color: inherit;
          transition: transform 0.2s ease;
        }
        .detail-row:hover { transform: translateX(4px); }
        .detail-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: #ede9fe;
          color: #7c3aed;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .detail-row:hover .detail-icon {
          background: #7c3aed;
          color: #fff;
        }
        .detail-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #9ca3af;
          font-weight: 600;
          margin-bottom: 2px;
        }
        .detail-value {
          font-size: 0.92rem;
          font-weight: 500;
          color: #1a1023;
        }

        /* Divider */
        .info-divider {
          height: 1px;
          background: rgba(124,58,237,0.1);
        }

        /* Social icons */
        .social-icon {
          width: 38px; height: 38px;
          border-radius: 50%;
          border: 1.5px solid rgba(124,58,237,0.2);
          color: #7c3aed;
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          transition: all 0.22s ease;
        }
        .social-icon:hover {
          background: #7c3aed;
          border-color: #7c3aed;
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(124,58,237,0.3);
        }

        /* Form card */
        .form-card {
          background: #fff;
          border-radius: 20px;
          padding: 36px;
          box-shadow: 0 4px 30px rgba(0,0,0,0.06);
        }

        /* Inputs */
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6b7280;
        }
        .form-input, .form-textarea {
          width: 100%;
          padding: 13px 18px;
          border: 1.5px solid rgba(124,58,237,0.15);
          border-radius: 12px;
          font-size: 0.92rem;
          font-family: 'DM Sans', sans-serif;
          color: #1a1023;
          background: #faf9ff;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .form-input:focus, .form-textarea:focus {
          border-color: #7c3aed;
          box-shadow: 0 0 0 3px rgba(124,58,237,0.1);
          background: #fff;
        }
        .form-textarea { resize: vertical; min-height: 130px; }

        /* Grid for name row */
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 500px) {
          .form-row { grid-template-columns: 1fr; }
        }

        /* Submit button */
        .submit-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          color: #fff;
          font-size: 0.95rem;
          font-weight: 700;
          font-family: 'DM Sans', sans-serif;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: opacity 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 6px 22px rgba(124,58,237,0.3);
          letter-spacing: 0.04em;
        }
        .submit-btn:hover:not(:disabled) {
          opacity: 0.92;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(124,58,237,0.38);
        }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        /* Success state */
        .success-msg {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 40px 20px;
          text-align: center;
        }
        .success-icon {
          width: 64px; height: 64px;
          border-radius: 50%;
          background: #ede9fe;
          display: flex; align-items: center; justify-content: center;
          font-size: 2rem;
          animation: popIn 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        @keyframes popIn {
          from { transform: scale(0.5); opacity: 0; }
          to   { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <section id="contact" className="w-full py-24 px-6">
        <div className="max-w-6xl mx-auto relative z-10">

          {/* Header */}
          <div className="mb-14 space-y-4">
            <div className="contact-label">
              <span className="contact-label-line" />
              Contact
              <span className="contact-label-line" />
            </div>
            <h2 className="contact-heading">
              Let's <span>Work Together</span>
            </h2>
            <p style={{ color: '#4b4560', maxWidth: 460, lineHeight: 1.75 }}>
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
          </div>

          {/* Two-column layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>

            {/* ── Left: Info Card ── */}
            <div className="info-card">
              <div>
                <p style={{ fontSize: '1rem', color: '#4b4560', lineHeight: 1.8 }}>
                  I'm currently open to freelance opportunities, full-time roles,
                  and exciting collaborations. Let's build something great together.
                </p>
              </div>

              <div className="info-divider" />

              {/* Contact details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {contactDetails.map(({ icon, label, value, href }) =>
                  href ? (
                    <a key={label} href={href} className="detail-row">
                      <div className="detail-icon">{icon}</div>
                      <div>
                        <div className="detail-label">{label}</div>
                        <div className="detail-value">{value}</div>
                      </div>
                    </a>
                  ) : (
                    <div key={label} className="detail-row">
                      <div className="detail-icon">{icon}</div>
                      <div>
                        <div className="detail-label">{label}</div>
                        <div className="detail-value">{value}</div>
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="info-divider" />

              {/* Socials */}
              {/* <div>
                <p style={{ fontSize: '0.75rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                  Find me on
                </p>
                <div style={{ display: 'flex', gap: 10 }}>
                  {socials.map(({ href, icon, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                       className="social-icon" aria-label={label}>
                      {icon}
                    </a>
                  ))}
                </div>
              </div> */}
            </div>

            {/* ── Right: Form Card ── */}
            <div className="form-card">
              {sent ? (
                <div className="success-msg">
                  <div className="success-icon">✅</div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#1a1023' }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: '#4b4560', fontSize: '0.92rem' }}>
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    style={{ marginTop: 8, color: '#7c3aed', fontSize: '0.85rem', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>

                  {/* Name row */}
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input className="form-input" type="text" name="firstName" placeholder="Esther" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input className="form-input" type="text" name="lastName" placeholder="Otudoh" required />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input className="form-input" type="email" name="email" placeholder="hello@example.com" required />
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input className="form-input" type="tel" name="phone" placeholder="070 0000 0000" />
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className="form-textarea" name="message" placeholder="Tell me about your project..." required />
                  </div>

                  <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message →'}
                  </button>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact