import { WrenchScrewdriverIcon,BuildingOffice2Icon, CurrencyRupeeIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'EXPERT REPAIRERS',
    description:
      'We have experienced technicians for all the home & kitchen services to ensure that you get top-quality solutions.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'COST EFFECTIVE',
    description:
      'Our services are the most economical in Amravati and Nagpur. Starting at only ₹199.',
    icon: CurrencyRupeeIcon,
  },
  {
    name: 'MULTIPLE BRANDS & MODELS',
    description:
      'We repair kitchen chimneys of all brands and models, including Faber, Elica, Hafele,Elisa, and many more.',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'SAME DAY SERVICE',
    description:
      'When you book a service with Kitchen Chimney Services, our expert technicians reach your doorstep at the scheduled time.',
    icon: RocketLaunchIcon,
  },
]

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Kitchen Chimney Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
           Delivering Services at Your DoorStep
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          We are the most trusted kitchen appliance repair and services brand in Mumbai, Hyderabad, and Pune, with 5,000+ happy customers.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}