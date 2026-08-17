import { useState } from 'react'
import Button from '../components/ui/Button'
import PageHeader from '../components/ui/PageHeader'
import { validateEmail, validatePhone } from '../utils/helpers'

const initial = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim() || form.name.trim().length < 2) {
      next.name = 'Name must be at least 2 characters.'
    }
    if (!validateEmail(form.email)) {
      next.email = 'Please enter a valid email.'
    }
    if (form.phone && !validatePhone(form.phone)) {
      next.phone = 'Please enter a valid phone number.'
    }
    if (!form.subject.trim()) {
      next.subject = 'Subject is required.'
    }
    if (!form.message.trim() || form.message.trim().length < 15) {
      next.message = 'Message should be at least 15 characters.'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSent(true)
    setForm(initial)
  }

  return (
    <section className="section-space">
      <div className="container-page">
        <PageHeader
          eyebrow="Contact"
          title="We are here to help"
          description="Questions about a listing, availability, or corporate housing? Send a message and our team will reply within one business day."
        />

        <div className="grid items-start gap-6 md:gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
        <div className="min-w-0">
          <div className="card-surface space-y-4 p-4 text-sm sm:p-5">
            <p className="flex flex-col gap-1 sm:flex-row sm:gap-2">
              <span className="shrink-0 font-bold text-ink">Email:</span>
              <span className="break-all text-muted">hello@flexliving.in</span>
            </p>
            <p className="flex flex-col gap-1 sm:flex-row sm:gap-2">
              <span className="shrink-0 font-bold text-ink">Phone:</span>
              <span className="text-muted">+91 98765 43210</span>
            </p>
            <p className="flex flex-col gap-1 sm:flex-row sm:gap-2">
              <span className="shrink-0 font-bold text-ink">Office:</span>
              <span className="text-muted">
                12th Floor, Prestige Towers, Koramangala, Bengaluru 560034
              </span>
            </p>
          </div>
        </div>

        <div className="card-surface min-w-0 p-4 sm:p-6 md:p-8">
          {sent ? (
            <div className="py-10 text-center">
              <h2 className="text-2xl font-bold">Message sent</h2>
              <p className="mt-2 text-muted">
                Thanks for reaching out. We will get back to you soon.
              </p>
              <Button className="mt-6" onClick={() => setSent(false)}>
                Send another message
              </Button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="label-field" htmlFor="name">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    className={`input-field ${errors.name ? 'border-danger' : ''}`}
                    value={form.name}
                    onChange={onChange}
                  />
                  {errors.name && <p className="error-text">{errors.name}</p>}
                </div>
                <div>
                  <label className="label-field" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`input-field ${errors.email ? 'border-danger' : ''}`}
                    value={form.email}
                    onChange={onChange}
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="label-field" htmlFor="phone">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className={`input-field ${errors.phone ? 'border-danger' : ''}`}
                    value={form.phone}
                    onChange={onChange}
                  />
                  {errors.phone && <p className="error-text">{errors.phone}</p>}
                </div>
                <div>
                  <label className="label-field" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    className={`input-field ${errors.subject ? 'border-danger' : ''}`}
                    value={form.subject}
                    onChange={onChange}
                  />
                  {errors.subject && (
                    <p className="error-text">{errors.subject}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="label-field" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`input-field resize-y ${errors.message ? 'border-danger' : ''}`}
                  value={form.message}
                  onChange={onChange}
                />
                {errors.message && (
                  <p className="error-text">{errors.message}</p>
                )}
              </div>

              <Button type="submit" size="lg">
                Send message
              </Button>
            </form>
          )}
        </div>
        </div>
      </div>
    </section>
  )
}
