import { Award, Heart, MapPin, Users } from 'lucide-react'

export default function WhyBookUs() {
  const benefits = [
    {
      icon: Award,
      title: 'Expert Guides',
      description: 'Local experts with 15+ years of experience leading unforgettable tours'
    },
    {
      icon: Heart,
      title: 'Personalized Service',
      description: 'Customized itineraries tailored to your preferences and interests'
    },
    {
      icon: MapPin,
      title: 'Hidden Gems',
      description: 'Discover lesser-known attractions beyond typical tourist trails'
    },
    {
      icon: Users,
      title: 'Small Groups',
      description: 'Intimate group sizes for genuine connections and personalized attention'
    }
  ]

  return (
    <section id="why" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose Turavia Travels?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re committed to creating transformative travel experiences that go beyond sightseeing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div key={idx} className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg group">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 border border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15K+</div>
              <p className="text-foreground font-medium">Happy Travelers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
              <p className="text-foreground font-medium">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-foreground font-medium">Curated Tours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
