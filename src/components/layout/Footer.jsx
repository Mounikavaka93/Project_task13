import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = [
  {
    title: 'Explore',
    items: [
      { to: '/properties', label: 'All properties' },
      { to: '/about', label: 'About Flex Living' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Account',
    items: [
      { to: '/login', label: 'Login' },
      { to: '/signup', label: 'Create account' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-brand text-white">
      <div className="container-page grid gap-8 py-10 sm:gap-10 sm:py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link to="/" className="inline-flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-sm font-extrabold text-sand">
              FL
            </span>
            <span className="font-display text-xl font-extrabold">Flex Living</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
            Furnished, flexible homes designed for how you actually live. Move in
            when you need to — with quality you can trust across every city.
          </p>
          <div className="mt-6 space-y-3 text-sm text-white/75">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sand" />
              <span>12th Floor, Prestige Towers, Koramangala, Bengaluru 560034</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-sand" />
              <span>+91 98765 43210</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-sand" />
              <span>hello@flexliving.in</span>
            </p>
          </div>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title}>
            <h3 className="font-display text-base font-bold text-sand">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Flex Living. All rights reserved.</p>
          <p>Flexible leases · Transparent pricing · 24/7 support</p>
        </div>
      </div>
    </footer>
  )
}
