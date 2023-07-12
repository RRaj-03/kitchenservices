"use client"
import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition, Listbox } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, MagnifyingGlassIcon, CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Feedback', href: 'Feedback', current: false },
  { name: 'Services', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const pathname = usePathname()
  const router = useRouter()
  const [current, setCurrent] = useState<string>('Home')



  useEffect(() => {
    if(pathname){
      setCurrent(pathname.split("/")[1])
    }
  }, [pathname])
  
  return (
    <>
      <Disclosure as="nav" className={`ease-in duration-500 transition-all   z-10 fixed w-full top-0`}>
        {({ open }) => (
          <div className={`ease-in duration-500 transition-color bg-gray-800`}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <Link href={'/Home'} className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="/icon.ico"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="icon.ico"
                      alt="Your Company"
                    />
                    <div className='ml-2 hidden lg:block text-slate-200'>
                      Kitchen Chimney Services
                    </div>
                  </Link>

                </div>


                
                <div className="hidden sm:ml-2  sm:block">
                  <div className="flex space-x-2 items-center">
                    {navigation.map((item) => (
                      <Link
                        key={item?.name}
                        href={"/" + item?.href}
                        className={classNames(
                          current === item?.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        
                        aria-current={current === item?.name ? 'page' : undefined}
                      >
                        {item?.name}
                      </Link>
                    ))}
                    
                  </div>
                </div>

              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-0.5 pb-3 pt-2">
                {navigation.map((item) => (
                  <Link href={"/" + item?.href}>
                  <Disclosure.Button
                    key={item?.name}
                    as="div"
                    className={classNames(
                      current === item?.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    onClick={() => {
                      setCurrent(item?.name)
                    }}
                    aria-current={current === item?.name ? 'page' : undefined}
                  >
                    {item?.name}
                    
                  </Disclosure.Button>
                  </Link>
                ))}
                
              </div>
            </Disclosure.Panel>
           
          </div>
        )}

      </Disclosure>

    </>
  )
}