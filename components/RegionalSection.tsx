import { MapPin } from 'lucide-react'

interface RegionalSectionProps {
  onRegionSelect: (region: string) => void
}

const regions = [
  {
    name: 'China',
    image: './china-autumn.png',
    description: 'Great walls, ancient temples, and modern metropolises'
  },
  {
    name: 'South Korea',
    image: 'south-korea.png',
    description: 'K-culture, royal palaces, and island paradise'
  },
  {
    name: 'Thailand',
    image: 'bangkok.png',
    description: 'Temples, beaches, and vibrant street markets'
  },
  {
    name: 'Hong Kong',
    image: 'hongkong2.png',
    description: 'Harbor views, shopping, and modern marvels'
  },
  {
    name: 'Vietnam',
    image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpZXRuYW18ZW58MHx8MHx8fDA%3D',
    description: 'Ha Long Bay, historic sites, and river cruises'
  },
  {
    name: 'Bali',
    image: 'https://plus.unsplash.com/premium_photo-1661955632358-85564b2810b2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFsaSUyMHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Temples, rice terraces, and spiritual retreats'
  }
]

export default function RegionalSection() {
  return (
    <section id="regions" className="py-16 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Popular Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our most sought-after regions in Asia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region) => (
            <div
              key={region.name}
              className="group cursor-pointer rounded-lg overflow-hidden bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {region.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {region.description}
                </p>
                <button className="inline-block text-primary font-medium hover:text-primary/80 transition-colors">
                  Explore {region.name} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
