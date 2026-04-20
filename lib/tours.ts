export interface Tour {
  id: number
  title: string
  region: string
  price: number
  duration: string
  image: string
  rating: number
  reviews: number
  highlights: string[]
  description: string
}

export const tours: Tour[] = [
  {
    id: 1,
    title: 'Bangkok, Pataya',
    region: 'Thailand',
    price: 4.5,
    duration: '4 days',
    image: './bangkok-pataya.png',
    rating: 4.8,
    reviews: 342,
    highlights: ['Street food', 'Pattaya Beach', 'Floating markets', 'Nightlife'],
    description: 'Experience the vibrant energy of Bangkok\'s temples and bustling markets, then unwind on the sun-soaked beaches of Pattaya with its lively coastal atmosphere.'
  },
  {
    id: 2,
    title: 'Blossom Korea',
    region: 'Korea',
    price: 9.8,
    duration: '6 days',
    image: './blossom-korea.png',
    rating: 4.6,
    reviews: 215,
    highlights: ['Cherry blossoms', 'Gyeongbokgung Palace', 'K-pop district', 'Street food tours'],
    description: 'Travel Korea during peak cherry blossom season, exploring royal palaces draped in pink petals, vibrant street food alleys, and the heart of modern K-pop culture.'
  },
  {
    id: 3,
    title: 'China Autumn',
    region: 'China',
    price: 14.9,
    duration: '9 days',
    image: 'china-autumn.png',
    rating: 4.9,
    reviews: 287,
    highlights: ['Great Wall', 'Autumn foliage', 'Ancient villages', 'Forbidden City'],
    description: 'Witness China at its most breathtaking — the Great Wall and ancient temples draped in vivid autumn colours, with crisp air and fewer crowds than peak summer season.'
  },
  {
    id: 4,
    title: 'China Autumn V2',
    region: 'China',
    price: 14.4,
    duration: '9 days',
    image: './china-autumn2.jpg',
    rating: 4.7,
    reviews: 198,
    highlights: ['Li River cruise', 'Karst mountains', 'Yangshuo village', 'Bamboo rafting'],
    description: 'A second take on China\'s golden season — cruise the Li River through dramatic karst peaks, drift past traditional villages, and soak in the serene autumn landscapes of Yangshuo.'
  },
  {
    id: 5,
    title: 'Bangkok Dinner Cruise',
    region: 'Thailand',
    price: 2.2,
    duration: '4 days',
    image: './dinner-cruise.png',
    rating: 4.8,
    reviews: 156,
    highlights: ['Chao Phraya river cruise', 'Fine dining on water', 'City light views', 'Live entertainment'],
    description: 'Glide along Bangkok\'s iconic Chao Phraya River at night, dining on authentic Thai cuisine while taking in the glittering skyline and illuminated riverside temples.'
  },
  {
    id: 6,
    title: 'Open Trip Hongkong',
    region: 'Hong Kong',
    price: 13.9,
    duration: '5 days',
    image: './hongkong2.png',
    rating: 4.9,
    reviews: 421,
    highlights: ['Victoria Peak', 'Harbor cruises', 'Star Ferry', 'City lights tour'],
    description: 'Marvel at Hong Kong\'s spectacular skyline from Victoria Peak, ride the iconic Star Ferry across the harbour, and explore the vibrant mix of East-meets-West street culture.'
  },
  {
    id: 7,
    title: 'Hongkong v2',
    region: 'Hong Kong',
    price: 13.9,
    duration: '6 days',
    image: './hongkong3.png',
    rating: 4.7,
    reviews: 298,
    highlights: ['Lantau Island', 'Big Buddha', 'Dim sum trails', 'Night markets'],
    description: 'Dive deeper into Hong Kong with a longer itinerary — visit the giant Tian Tan Buddha on Lantau Island, wander bustling night markets, and feast your way through world-class dim sum spots.'
  },
  {
    id: 8,
    title: 'From Jakarta to Chongqing',
    region: 'China',
    price: 11.9,
    duration: '8 days',
    image: './jakarta-chonqing.png',
    rating: 4.6,
    reviews: 267,
    highlights: ['Yangtze River', 'Three Gorges', 'Chongqing hotpot', 'Mountain scenery'],
    description: 'Journey from the Indonesian capital all the way to Chongqing, tracing dramatic river gorges along the Yangtze and diving into China\'s fiery hotpot culture in one of its most unique mountain cities.'
  },
  {
    id: 9,
    title: 'From Medan to China',
    region: 'China',
    price: 13.4,
    duration: '8 days',
    image: './medan-china.png',
    rating: 4.8,
    reviews: 334,
    highlights: ['Ancient temples', 'Traditional tea houses', 'Silk Road heritage', 'Scenic countryside'],
    description: 'Depart from Medan and venture into the heart of China, uncovering ancient temples, centuries-old tea houses, and landscapes that have changed little since the days of the Silk Road.'
  },
  {
    id: 10,
    title: 'Open Trip South Korea',
    region: 'Other',
    price: 5.9,
    duration: '5 days',
    image: './south-korea.png',
    rating: 4.9,
    reviews: 445,
    highlights: ['Gyeongju heritage', 'Busan beaches', 'Korean BBQ', 'Hanbok experience'],
    description: 'Join an open group trip across South Korea\'s highlights — from the ancient royal city of Gyeongju to the coastal buzz of Busan, with plenty of Korean BBQ and cultural experiences along the way.'
  },
  {
    id: 11,
    title: 'From Surabaya to Chongqing',
    region: 'China',
    price: 11.9,
    duration: '8 days',
    image: './surabaya-chonqing.png',
    rating: 4.7,
    reviews: 278,
    highlights: ['Yangtze cruise', 'Chongqing old town', 'Dazu rock carvings', 'Spicy cuisine'],
    description: 'Starting from Surabaya, this 8-day adventure winds through Chongqing\'s steep hillside streets, ancient Buddhist rock carvings at Dazu, and a scenic cruise along the mighty Yangtze River.'
  }
]