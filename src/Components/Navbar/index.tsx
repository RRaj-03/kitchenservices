"use client"
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Services', href: '#', current: false },
]
const cities = [
  'Pune',
  'Kolkata',
  'Ahemdabad'
]
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [current, setCurrent] = useState<string>('Home')
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
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
                  <Link href={'Home'} className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                    <div className='ml-2 hidden lg:block text-slate-200'>
                      Your Company
                    </div>
                  </Link>

                </div>


                <div className='items-center pr-2 ml-6 rounded-md hidden md:flex'>
                <div className="relative items-center pr-2 ml-6 pl-2 rounded-md">
                <div className="absolute inset-y-0 right-0 flex items-center bg-indigo-500 mr-1">
                <MagnifyingGlassIcon className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400 "
                  aria-hidden="true"/>


                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  autoComplete="given-name"
                  placeholder='Search for Service Here'
                  className="block w-full rounded-md border-0 px-3.5 py-[0.2rem] pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
 

              </div>
                  <div className="flex items-center pr-2 ml-6 rounded-md ">

                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 px-1.5 text-white shadow-sm ring-1 ring-inset bg-slate-600 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      {cities.map((city) => {
                        return <option>{city}</option>
                      })}
                    </select>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={"/"+item.name}
                        className={classNames(
                          current === item.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        onClick={() => {
                          setCurrent(item.name)
                        }}
                        aria-current={current === item.name ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-0.5 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={"/"+item.name}
                    className={classNames(
                      current === item.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    onClick={()=>{
                      setCurrent(item.name)
                    }}
                    aria-current={current === item.name ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
            <div className='items-center justify-center pb-2 pr-2 text-sm ml-2  rounded-md flex md:hidden'>
           

                      <label htmlFor="search" className='hidden sm:inline mr-2 text-gray-300'>Search:</label>
              <div className="relative items-center pr-2 rounded-md">
                <div className="absolute inset-y-0 right-0 flex items-center bg-indigo-500 mr-1">
                <MagnifyingGlassIcon className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400 "
                  aria-hidden="true"/>


                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  autoComplete="given-name"
                  placeholder='Search for Service Here'
                  className="block w-full rounded-md border-0 px-3.5 py-1 pr-10 text-gray-900 shadow-sm ring-1 ring-inset bg-slate-600 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
 

              </div>
              <div className="flex items-center pr-2 ml-6 rounded-md ">
                      <label htmlFor="search" className='hidden sm:inline mr-2 text-gray-300'>City:</label>

                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block  rounded-md border-0 py-1.5 px-1.5 text-gray-300 shadow-sm ring-1 ring-inset bg-slate-600 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {cities.map((city) => {
                    return <option>{city}</option>
                  })}
                </select>
              </div>
            </div>
          </>
        )}

      </Disclosure>

    </>
  )
}
