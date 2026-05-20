import { useState } from 'react'
import { site } from '../data/portfolio'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
        throw new Error('validation')
      }
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
      if (!emailOk) throw new Error('validation')
      await new Promise((resolve) => setTimeout(resolve, 800))
      setForm({ name: '', email: '', message: '' }) // refresh / clear form
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }
  const resetForm = () => {
    setStatus('idle')
    setForm({ name: '', email: '', message: '' })
  }

  const contactItems = [
    {
      icon: <HiMail />,
      label: 'Email',
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: <HiPhone />,
      label: 'Phone',
      value: site.phone,
      href: `tel:${site.phone?.replace(/\s/g, '')}`,
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: site.social.linkedin,
      external: true,
    },
    {
      icon: <HiLocationMarker />,
      label: 'Address',
      value: site.address,
      href: null,
    },
  ]

  return (
    <section id="contact" className="section">
      <h2 className="section__title">Contact</h2>
      <p className="section__subtitle">Let's work together. Send me a message.</p>
      <div className="contact__grid">
        <div className="contact__info">
          <h3 className="contact__info-title">Get in touch</h3>
          <p className="contact__info-text">
            Designing and developing end‑to‑end web solutions that are fast, scalable, and user‑focused.<br />
            Let’s build something impactful together.
          </p>
          <ul className="contact__details">
            {contactItems.map((item) => (
              <li key={item.label} className="contact__detail-item">
                <span className="contact__icon" aria-hidden="true">
                  {item.icon}
                </span>
                <div className="contact__detail-content">
                  <span className="contact__label">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noreferrer' : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="contact__form-wrap">
          <form className="contact__form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                required
                placeholder="Your name"
                value={form.name}
                disabled={status === 'loading'}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={form.email}
                disabled={status === 'loading'}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>
            <label>
              Message
              <textarea
                required
                rows={5}
                placeholder="Your message..."
                value={form.message}
                disabled={status === 'loading'}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </label>

            <button
              type="submit"
              className="btn btn--primary"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="contact__message contact__message--success">
                Your message has been sent successfully. I'll get back to you soon.
              </p>
            )}

            {status === 'error' && (
              <p className="contact__message contact__message--error">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}