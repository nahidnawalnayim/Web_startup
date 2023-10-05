import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import Form from '../components/form'

const product = {
  name: '',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Serivce', href: '#' },
  ],
  images: [
    {
      src: 'https://res.cloudinary.com/derxrzqhj/image/upload/v1696485453/kzka2lu07kruf1v06qbi.png',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://res.cloudinary.com/derxrzqhj/image/upload/v1696485453/hk9uyjj28nfb7rqoc9yn.png',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://res.cloudinary.com/derxrzqhj/image/upload/v1696486164/yd9rn3i4wqdaac4stros.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://res.cloudinary.com/derxrzqhj/image/upload/v1696485454/gazarxfrwkxjgtp7x69y.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Web Development',
    'Mobile App Development',
    'Data Science',
    'Machine Learning',
   
  ],
  details:[
    {
        a: 'Client-Centric Approach: Your satisfaction is our priority. We work closely with you to understand your needs and deliver solutions that align with your business objectives.'
    },
    {
        b: 'Technological Excellence: Our team of seasoned professionals is adept at utilizing the latest technologies to bring your vision to life.'
    },
    {
        c: 'Scalable Solutions: Our solutions are designed to grow with your business, ensuring you are well-equipped to adapt to the evolving market demands..'
    },
    {
        d: '24/7 Support: We believe in building long-term relationships with our clients, offering round-the-clock support to assist you whenever you need us.'
    }
  ],
  policy : [
    {
        a: 'Initial Consultation: Understand clients requirements through detailed discussions',

    },
    {
        b: 'Proposal and Agreement: Provide a clear proposal with scope, timelines, and cost estimates.',

    },
    {
        c: 'Regular Updates: Offer regular project status updates to keep clients informed.',

    },
    {
        d: 'Feedback and Adjustments: Welcome client feedback and make necessary project adjustments. ',

    },
    {
        e: 'Payment Structure: Structured payment plans aligned with project milestones. ',

    },
    {
        f: 'Initial Consultation: Understand clients requirements through detailed discussions',

    },
    {
        g: 'Initial Consultation: Understand clients requirements through detailed discussions',

    },
    {
        h: 'Initial Consultation: Understand clients requirements through detailed discussions',

    },
    {
        i: 'Initial Consultation: Understand clients requirements through detailed discussions',

    },
    {
        j: 'Initial Consultation: Understand clients requirements through detailed discussions',

    },
  ]
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ServiceDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div className="bg-white" style={{fontFamily: "Lato"}} >
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0" >
            <h2 className="text-lg font-bold text-gray-900" style={{fontFamily: "Lato"}}>Guidelines and Policies</h2>

            <form className="mt-2 space-y-3 " style={{fontFamily: "Lato"}}>
     <p>{product.policy[0].a}.</p>
     <p>{product.policy[1].b}</p>
     <p>{product.policy[2].c}</p>
     <p>{product.policy[3].d}</p>
     <p>{product.policy[4].e}.</p>
             
              <Form />
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900 text-justify">
                Revolutionize Your Business with Our ExpertiseIn an era where digital presence is not just an advantage but a necessity, our comprehensive technology solutions are here to elevate your business to unprecedented heights. Here at <span className='font-bold'>SCRIPTERS IT</span>, we blend innovation with mastery to deliver digital solutions that not only meet but exceed your expectations. From visually stunning websites to state-of-the-art mobile apps and insightful data science solutions, we are your one-stop destination for a dynamic and transformative digital experience. Web Design & Development Responsive Designs: Our web designs are not just visually appealing but are built with a user-first approach, ensuring seamless experience on any device.Customized Solutions: Every business is unique, and we understand that. Our web development strategies are tailored to meet your specific business goals and customer needs.
    
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <li className="text-sm text-gray-600">
                {product.details[0].a}
                    </li>
                <li className="text-sm text-gray-600">
                {product.details[1].b}
                    </li>
                <li className="text-sm text-gray-600">
                {product.details[2].c}
                    </li>
                <li className="text-sm text-gray-600">
                {product.details[3].d}
                    </li>
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
