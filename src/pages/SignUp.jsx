import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import { validateEmail, validatePassword } from '../utils/helpers'

const initial = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agree: false,
}

export default function SignUp() {
  const navigate = useNavigate()
  const [form, setForm] = useState(initial)
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
    if (!form.name.trim() || form.name.trim().length < 2) {
      next.name = 'Please enter your full name.'
    }
    if (!validateEmail(form.email)) {
      next.email = 'Enter a valid email address.'
    }
    if (!validatePassword(form.password)) {
      next.password = 'Password must be at least 8 characters.'
    }
    if (form.confirmPassword !== form.password) {
      next.confirmPassword = 'Passwords do not match.'
    }
    if (!form.agree) {
      next.agree = 'You must accept the terms to continue.'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSuccess('Account created successfully. Redirecting...')
    setTimeout(() => navigate('/login'), 800)
  }

  return (
    <section className="section-space">
      <div className="container-page flex justify-center">
        <div className="w-full max-w-md rounded-2xl border border-line bg-white p-4 shadow-sm sm:p-6 md:p-8">
          <div className="mb-6 text-center">
            <p className="font-display text-2xl font-extrabold text-brand">
              Flex Living
            </p>
            <h1 className="mt-2 text-2xl font-bold">Create your account</h1>
            <p className="mt-1 text-sm text-muted">
              Join Flex Living to save homes and request bookings faster.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label className="label-field" htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                name="name"
                autoComplete="name"
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
                autoComplete="new-password"
                className={`input-field ${errors.password ? 'border-danger' : ''}`}
                value={form.password}
                onChange={onChange}
              />
              {errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
            </div>

            <div>
              <label className="label-field" htmlFor="confirmPassword">
                Confirm password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                className={`input-field ${errors.confirmPassword ? 'border-danger' : ''}`}
                value={form.confirmPassword}
                onChange={onChange}
              />
              {errors.confirmPassword && (
                <p className="error-text">{errors.confirmPassword}</p>
              )}
            </div>

            <div>
              <label className="flex items-start gap-2 text-sm text-muted">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={onChange}
                  className="mt-0.5 h-4 w-4 rounded border-line text-accent"
                />
                I agree to the Flex Living terms and privacy policy.
              </label>
              {errors.agree && <p className="error-text">{errors.agree}</p>}
            </div>

            {success && (
              <p className="rounded-xl bg-mist px-3 py-2 text-sm font-medium text-brand">
                {success}
              </p>
            )}

            <Button type="submit" className="w-full" size="lg">
              Sign Up
            </Button>
          </form>

          <p className="mt-5 text-center text-sm text-muted">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-accent hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
