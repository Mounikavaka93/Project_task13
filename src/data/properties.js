export const locations = [
  'Mumbai',
  'Bengaluru',
  'Delhi NCR',
  'Hyderabad',
  'Pune',
  'Chennai',
]

export const propertyTypes = [
  'Apartment',
  'House',
  'Studio',
  'Penthouse',
  'Villa',
]

export const amenitiesList = [
  'WiFi',
  'Parking',
  'Gym',
  'Balcony',
  'Pet Friendly',
  'Washer',
  'Workspace',
  'Garden',
  'Air Conditioning',
  'Elevator',
  'Power Backup',
  'Security',
]

export const properties = [
  {
    id: 'fl-101',
    title: 'Elegant 2 BHK with Balcony in Bandra West',
    location: 'Mumbai',
    neighborhood: 'Bandra West',
    type: 'Apartment',
    price: 85000,
    rating: 4.9,
    reviews: 128,
    bedrooms: 2,
    bathrooms: 2,
    area: 920,
    featured: true,
    availability: 'Available from 1 Sep 2026',
    description:
      'A bright two-bedroom apartment with a private balcony overlooking leafy Bandra streets. Fully furnished with a dedicated workspace, high-speed WiFi, and thoughtful storage — ready for flexible stays in Mumbai.',
    amenities: ['WiFi', 'Balcony', 'Washer', 'Workspace', 'Elevator', 'Security'],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 'fl-102',
    title: 'Peaceful 2 BHK Flat in Indiranagar',
    location: 'Bengaluru',
    neighborhood: 'Indiranagar',
    type: 'Apartment',
    price: 72000,
    rating: 4.8,
    reviews: 96,
    bedrooms: 2,
    bathrooms: 2,
    area: 880,
    featured: true,
    availability: 'Available now',
    description:
      'Calm interiors and soft natural light make this Indiranagar flat ideal for professionals. Walk to cafes, metro access, and parks while enjoying a fully equipped kitchen and quiet nights in Bengaluru.',
    amenities: ['WiFi', 'Washer', 'Workspace', 'Pet Friendly', 'Power Backup'],
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1554995207-c18c203606cb?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 'fl-103',
    title: 'Spacious 5 BHK Villa in Whitefield',
    location: 'Bengaluru',
    neighborhood: 'Whitefield',
    type: 'Villa',
    price: 185000,
    rating: 4.95,
    reviews: 64,
    bedrooms: 5,
    bathrooms: 4,
    area: 3200,
    featured: true,
    availability: 'Available from 15 Sep 2026',
    description:
      'A generous family villa near ITPL with a private garden, open living spaces, and five well-appointed bedrooms. Perfect for longer corporate or family stays in Bengaluru’s east.',
    amenities: [
      'WiFi',
      'Parking',
      'Garden',
      'Washer',
      'Pet Friendly',
      'Workspace',
      'Security',
      'Power Backup',
    ],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 'fl-104',
    title: 'Modern Studio Apartment in Powai',
    location: 'Mumbai',
    neighborhood: 'Powai',
    type: 'Studio',
    price: 42000,
    rating: 4.7,
    reviews: 211,
    bedrooms: 1,
    bathrooms: 1,
    area: 420,
    featured: true,
    availability: 'Available now',
    description:
      'Compact and cleverly designed studio with premium finishes, smart storage, and lake-side vibes. An effortless base for solo professionals and remote workers in Mumbai.',
    amenities: ['WiFi', 'Washer', 'Workspace', 'Elevator', 'Gym', 'Security'],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 'fl-105',
    title: 'Stylish 2 BHK in Koregaon Park',
    location: 'Pune',
    neighborhood: 'Koregaon Park',
    type: 'Apartment',
    price: 58000,
    rating: 4.85,
    reviews: 73,
    bedrooms: 2,
    bathrooms: 2,
    area: 950,
    featured: false,
    availability: 'Available from 10 Oct 2026',
    description:
      'Warm timber floors, a chef-ready kitchen, and a quiet residential lane. Close to cafes, parks, and nightlife without sacrificing comfort in Pune.',
    amenities: ['WiFi', 'Balcony', 'Parking', 'Washer', 'Air Conditioning'],
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 'fl-106',
    title: 'Skyline Penthouse in Golf Course Road',
    location: 'Delhi NCR',
    neighborhood: 'Gurugram',
    type: 'Penthouse',
    price: 275000,
    rating: 4.92,
    reviews: 41,
    bedrooms: 3,
    bathrooms: 3,
    area: 2450,
    featured: true,
    availability: 'Available now',
    description:
      'Floor-to-ceiling glass, a private terrace, and panoramic city views. Designed for elevated living with hotel-grade amenities and flexible lease terms in Gurugram.',
    amenities: [
      'WiFi',
      'Gym',
      'Balcony',
      'Parking',
      'Air Conditioning',
      'Elevator',
      'Security',
      'Power Backup',
    ],
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 'fl-107',
    title: 'Cosy 3 BHK House near Jubilee Hills',
    location: 'Hyderabad',
    neighborhood: 'Jubilee Hills',
    type: 'House',
    price: 95000,
    rating: 4.75,
    reviews: 58,
    bedrooms: 3,
    bathrooms: 3,
    area: 1800,
    featured: false,
    availability: 'Available from 20 Sep 2026',
    description:
      'Character home steps from cafes and retail. Open-plan living downstairs, three comfortable bedrooms upstairs, and a courtyard perfect for morning chai.',
    amenities: ['WiFi', 'Garden', 'Washer', 'Workspace', 'Pet Friendly', 'Parking'],
    images: [
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cd1d?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 'fl-108',
    title: 'Bright 1 BHK in Hitech City',
    location: 'Hyderabad',
    neighborhood: 'Hitech City',
    type: 'Apartment',
    price: 38000,
    rating: 4.8,
    reviews: 112,
    bedrooms: 1,
    bathrooms: 1,
    area: 610,
    featured: true,
    availability: 'Available now',
    description:
      'Modern comfort close to tech parks. Soft neutrals, a full kitchen, and a walkable location near metro, malls, and coworking spaces.',
    amenities: ['WiFi', 'Washer', 'Workspace', 'Elevator', 'Gym', 'Power Backup'],
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203606cb?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1630699144867-37acec97df5a?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 'fl-109',
    title: 'Family House with Garden in Adyar',
    location: 'Chennai',
    neighborhood: 'Adyar',
    type: 'House',
    price: 78000,
    rating: 4.7,
    reviews: 49,
    bedrooms: 4,
    bathrooms: 3,
    area: 2100,
    featured: false,
    availability: 'Available from 5 Oct 2026',
    description:
      'Spacious family home with a sunny garden, covered parking, and a flexible downstairs office. Ideal for longer stays with room to spread out in Chennai.',
    amenities: [
      'WiFi',
      'Parking',
      'Garden',
      'Washer',
      'Pet Friendly',
      'Workspace',
      'Power Backup',
    ],
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 'fl-110',
    title: 'Minimal Studio Loft in Connaught Place',
    location: 'Delhi NCR',
    neighborhood: 'Connaught Place',
    type: 'Studio',
    price: 45000,
    rating: 4.65,
    reviews: 87,
    bedrooms: 1,
    bathrooms: 1,
    area: 380,
    featured: false,
    availability: 'Available now',
    description:
      'A crisp loft-style studio in the heart of Delhi with everything you need within arm’s reach. Perfect for short flexible contracts downtown.',
    amenities: ['WiFi', 'Gym', 'Elevator', 'Air Conditioning', 'Security'],
    images: [
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 'fl-111',
    title: 'River-Facing Apartment in Andheri East',
    location: 'Mumbai',
    neighborhood: 'Andheri East',
    type: 'Apartment',
    price: 68000,
    rating: 4.88,
    reviews: 134,
    bedrooms: 2,
    bathrooms: 2,
    area: 860,
    featured: false,
    availability: 'Available from 12 Sep 2026',
    description:
      'Contemporary two-bed with open kitchen and building gym access. A favourite for professionals relocating near the airport and metro corridor.',
    amenities: ['WiFi', 'Gym', 'Balcony', 'Washer', 'Elevator', 'Security'],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 'fl-112',
    title: 'Garden Flat Retreat in Koramangala',
    location: 'Bengaluru',
    neighborhood: 'Koramangala',
    type: 'Apartment',
    price: 65000,
    rating: 4.9,
    reviews: 77,
    bedrooms: 2,
    bathrooms: 2,
    area: 780,
    featured: true,
    availability: 'Available now',
    description:
      'Quiet garden-level flat surrounded by greenery. Soft furnishings, a full kitchen, and a private patio for evenings outdoors in Koramangala.',
    amenities: ['WiFi', 'Garden', 'Washer', 'Pet Friendly', 'Workspace', 'Parking'],
    images: [
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80',
    ],
  },
]

export const getPropertyById = (id) => properties.find((p) => p.id === id)

export const filterProperties = (list, filters) => {
  return list.filter((property) => {
    const matchesLocation =
      !filters.location || property.location === filters.location
    const matchesType = !filters.type || property.type === filters.type
    const matchesBedrooms =
      !filters.bedrooms || property.bedrooms >= Number(filters.bedrooms)
    const matchesMinPrice =
      filters.minPrice === '' ||
      filters.minPrice === undefined ||
      property.price >= Number(filters.minPrice)
    const matchesMaxPrice =
      filters.maxPrice === '' ||
      filters.maxPrice === undefined ||
      property.price <= Number(filters.maxPrice)
    const matchesAmenities =
      !filters.amenities?.length ||
      filters.amenities.every((item) => property.amenities.includes(item))
    const matchesQuery =
      !filters.query ||
      `${property.title} ${property.neighborhood} ${property.location}`
        .toLowerCase()
        .includes(filters.query.toLowerCase())

    return (
      matchesLocation &&
      matchesType &&
      matchesBedrooms &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesAmenities &&
      matchesQuery
    )
  })
}
