'use client'

import { useState } from 'react'
import { Tour } from '@/lib/tours'
import { MapPin, Star, Clock, X } from 'lucide-react'

interface TourCardProps {
  tour: Tour
}

export default function TourCard({ tour }: TourCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Card */}
      <div
        className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="relative overflow-hidden h-48">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            IDR {tour.price} jt
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {tour.title}
            </h3>
          </div>

          <div className="flex items-center gap-1 mb-3 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{tour.region}</span>
          </div>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {tour.description}
          </p>

          <div className="flex items-center gap-4 mb-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="font-medium text-foreground">{tour.rating}</span>
              <span className="text-muted-foreground">({tour.reviews})</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">{tour.duration}</span>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-xs text-muted-foreground mb-2">Highlights:</p>
            <div className="flex flex-wrap gap-1">
              {tour.highlights.slice(0, 3).map((highlight, idx) => (
                <span key={idx} className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          <button
            className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            onClick={(e) => { e.stopPropagation(); setOpen(true) }}
          >
            View Details
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-card rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Full image — uncropped */}
            <div className="relative">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full object-contain bg-black"
              />
              {/* Close button */}
              <button
                className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
                onClick={() => setOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
              {/* Price badge */}
              <div className="absolute bottom-3 left-3 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                IDR {tour.price} jt
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-2xl font-bold text-foreground">{tour.title}</h2>
              </div>

              <div className="flex items-center gap-1 mb-4 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{tour.region}</span>
              </div>

              <div className="flex items-center gap-6 mb-5 text-sm">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="font-semibold text-foreground">{tour.rating}</span>
                  <span className="text-muted-foreground">({tour.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{tour.duration}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {tour.description}
              </p>

              <div className="mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">Highlights</p>
                <div className="flex flex-wrap gap-2">
                  {tour.highlights.map((highlight, idx) => (
                    <span key={idx} className="text-sm bg-secondary/20 text-secondary px-3 py-1.5 rounded-full">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors text-base">
                Book This Tour
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}