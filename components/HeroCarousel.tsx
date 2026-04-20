'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const heroSlides = [
  {
    id: 1,
    title: 'Discover Ancient China',
    subtitle: 'Walk the Great Wall and explore timeless temples',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'Seoul & Korean Wonders',
    subtitle: 'Experience vibrant culture and modern Asia',
    image: 'https://images.unsplash.com/photo-1657461821555-492764a6940a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFub2t8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 3,
    title: 'Tropical Thailand',
    subtitle: 'Paradise beaches and spiritual temples await',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&h=600&fit=crop'
  }
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{slide.title}</h1>
              <p className="text-lg md:text-2xl drop-shadow-md">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
