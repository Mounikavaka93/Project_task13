import { Building2, HeartHandshake, TimerReset } from 'lucide-react'
import Button from '../components/ui/Button'
import PageHeader from '../components/ui/PageHeader'

const values = [
  {
    icon: Building2,
    title: 'Consistent quality',
    text: 'Every Flex Living home follows the same design and service standards.',
  },
  {
    icon: TimerReset,
    title: 'True flexibility',
    text: 'Lease terms that adapt to travel, relocation, and evolving plans.',
  },
  {
    icon: HeartHandshake,
    title: 'Human support',
    text: 'A dedicated team available around the clock when you need help.',
  },
]

export default function About() {
  return (
    <section className="section-space">
      <div className="container-page">
        <PageHeader
          eyebrow="About"
          title="Living, made flexible"
          description="Flex Living was built for people who need a real home without a rigid lease. We furnish, manage, and care for apartments and houses so you can unpack and start living — on your timeline."
          action={
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <Button to="/properties" className="w-full sm:w-auto">
                Explore homes
              </Button>
              <Button to="/contact" variant="outline" className="w-full sm:w-auto">
                Get in touch
              </Button>
            </div>
          }
        />

        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-2">
          <div className="order-2 min-w-0 overflow-hidden rounded-2xl border border-line sm:rounded-[28px] lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
              alt="Flex Living interior"
              className="aspect-[5/4] w-full object-cover"
            />
          </div>
          <div className="order-1 min-w-0 lg:order-2">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5">
              {values.map((item) => (
                <article
                  key={item.title}
                  className="card-surface flex h-full flex-col p-5 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-md sm:p-6"
                >
                  <item.icon className="h-7 w-7 text-accent" />
                  <h2 className="mt-4 text-lg font-bold sm:text-xl">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
