import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import { validateEmail, validatePassword } from '../utils/helpers'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '', remember: false })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const validate = () => {
    const next = {}
    if (!validateEmail(form.email)) next.email = 'Enter a valid email address.'
    if (!form.password) next.password = 'Password is required.'
    else if (!validatePassword(form.password)) {
      next.password = 'Password must be at least 8 characters.'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSuccess('Logged in successfully. Redirecting...')
    setTimeout(() => navigate('/properties'), 700)
  }

  return (
    <section className="section-space">
      <div className="container-page flex justify-center">
        <div className="w-full max-w-md rounded-2xl border border-line bg-white p-4 shadow-sm sm:p-6 md:p-8">
          <div className="mb-6 text-center">
            <p className="font-display text-2xl font-extrabold text-brand">
              Flex Living
            </p>
            <h1 className="mt-2 text-2xl font-bold">Welcome back</h1>
            <p className="mt-1 text-sm text-muted">
              Log in to manage favorites and booking requests.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label className="label-field" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={`input-field ${errors.email ? 'border-danger' : ''}`}
                value={form.email}
                onChange={onChange}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div>
              <label className="label-field" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className={`input-field ${errors.password ? 'border-danger' : ''}`}
                value={form.password}
                onChange={onChange}
              />
              {errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
            </div>

            <label className="flex items-center gap-2 text-sm text-muted">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={onChange}
                className="h-4 w-4 rounded border-line text-accent"
              />
              Remember me
            </label>

            {success && (
              <p className="rounded-xl bg-mist px-3 py-2 text-sm font-medium text-brand">
                {success}
              </p>
            )}

            <Button type="submit" className="w-full" size="lg">
              Login
            </Button>
          </form>

          <p className="mt-5 text-center text-sm text-muted">
            New to Flex Living?{' '}
            <Link to="/signup" className="font-bold text-accent hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
