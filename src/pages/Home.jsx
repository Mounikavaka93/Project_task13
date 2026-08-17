import { CheckCircle2, Shield, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import FeaturedProperties from '../components/ui/FeaturedProperties'
import SearchBar from '../components/ui/SearchBar'

const highlights = [
  {
    icon: Sparkles,
    title: 'Move-in ready',
    text: 'Furnished homes with utilities and WiFi included.',
  },
  {
    icon: Shield,
    title: 'Flexible terms',
    text: 'Stay for weeks or months — exit when plans change.',
  },
  {
    icon: CheckCircle2,
    title: 'Trusted quality',
    text: 'Consistent standards across every Flex Living home.',
  },
]

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[min(88svh,780px)] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Modern furnished home available for rent"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(15,44,36,0.92)_0%,rgba(15,44,36,0.72)_42%,rgba(20,32,28,0.38)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(212,184,150,0.2),transparent_42%)]" />

        <div className="container-page relative flex min-h-[min(88svh,780px)] flex-col justify-center py-16 sm:py-20 md:py-24 lg:py-28">
          <div className="max-w-3xl animate-fade-up">
            <p className="font-display text-3xl font-extrabold tracking-tight text-white min-[360px]:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              Flex Living
            </p>
            <h1 className="mt-3 max-w-2xl text-xl font-semibold leading-snug text-white sm:mt-4 sm:text-3xl lg:text-4xl">
              Find flexible homes for rent across India
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base md:text-lg">
              Browse furnished apartments, villas, and studios with transparent
              pricing — search by city, type, or neighborhood and move in on
              your timeline.
            </p>
          </div>

          <div className="mt-6 w-full max-w-5xl animate-fade-up sm:mt-8 md:mt-10 [animation-delay:140ms]">
            <SearchBar labeled />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 md:gap-5">
            {highlights.map((item, index) => (
              <article
                key={item.title}
                className="card-surface flex h-full flex-col p-4 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-md sm:p-5"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <item.icon className="mb-3 h-6 w-6 text-accent" />
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FeaturedProperties limit={6} />

      <section className="section-space">
        <div className="container-page">
          <div className="overflow-hidden rounded-[28px] bg-brand px-6 py-12 text-white sm:px-10 lg:px-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="min-w-0">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Ready to find your next home?
                </h2>
                <p className="mt-3 max-w-lg text-white/70">
                  Browse listings, filter by what matters, and book a Flex Living
                  property with confidence.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button to="/properties" variant="sand" size="lg" className="w-full sm:w-auto">
                    Browse properties
                  </Button>
                  <Button to="/contact" variant="light" size="lg" className="w-full sm:w-auto">
                    Talk to us
                  </Button>
                </div>
              </div>
              <div className="hidden overflow-hidden rounded-2xl lg:block">
                <img
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80"
                  alt="Bright living room"
                  className="aspect-[5/4] h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page text-center">
          <p className="text-sm text-muted">
            Looking for something specific?{' '}
            <Link
              to="/contact"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              Contact our team
            </Link>{' '}
            and we will help you match a home.
          </p>
        </div>
      </section>
    </>
  )
}
