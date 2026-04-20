'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import HeroCarousel from '@/components/HeroCarousel'
import TourGrid from '@/components/TourGrid'
import RegionalSection from '@/components/RegionalSection'
import WhyBookUs from '@/components/WhyBookUs'
import BlogSection from '@/components/BlogSection'
import Footer from '@/components/Footer'

export default function Home() {
  const [activeRegion, setActiveRegion] = useState('all')

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      <TourGrid activeRegion={activeRegion} />
      <RegionalSection onRegionSelect={setActiveRegion} />
      <WhyBookUs />
      <BlogSection />
      <Footer />
    </div>
  )
}
