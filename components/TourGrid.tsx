'use client'

import { tours } from '@/lib/tours'
import TourCard from './TourCard'
import { useState } from 'react'

interface TourGridProps {
  activeRegion: string
}

const regions = ['all', 'China', 'Korea', 'Thailand', 'Hong Kong', 'Other']

export default function TourGrid({ activeRegion }: TourGridProps) {
  const [selected, setSelected] = useState('all')

  const filteredTours = selected === 'all' 
    ? tours 
    : tours.filter(tour => tour.region === selected)

  return (
    <section id="tours" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Explore Our Amazing Tours
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover carefully curated travel experiences across Asia's most captivating destinations
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelected(region)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selected === region
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/20 text-foreground hover:bg-secondary/30'
              }`}
            >
              {region.charAt(0).toUpperCase() + region.slice(1)}
            </button>
          ))}
        </div>

        {/* Tours grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  )
}
