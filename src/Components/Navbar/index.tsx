"use client"
import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition, Listbox } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, MagnifyingGlassIcon, CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import useKitchenStore from '@/Helpers/Store/KitchenStore'
import { usePathname, useRouter } from 'next/navigation'

const navigation = [
  { name: 'Home', href: 'Home', current: true },
  { name: 'About Us', href: 'AboutUs', current: false },
  { name: 'Services', href: 'Services', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const useKitchen = useKitchenStore()
  const cities = useKitchenStore(state => state.cities)
  const services = useKitchenStore(state => state.Services)
  const selectcity = useKitchenStore(state => state.selectedCity)
  const pathname = usePathname()
  const router = useRouter()
  const [current, setCurrent] = useState<string>('Home')
  useEffect(() => {
    useKitchen.SetCities()

  }, [])
  const [prevScrollPos, setPrevScrollPos] = useState(0);
const [visible, setVisible] = useState(true)

const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if(currentScrollPos > prevScrollPos){
        setVisible(false)
    }else{
        setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
}

useEffect( () => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
})
  useEffect(() => {
    if(pathname){
      setCurrent(pathname.split("/")[1])
    }
  }, [pathname])
  
  return (
    <>
      <Disclosure as="nav" className={`ease-in duration-500 transition-all   z-10 fixed w-full ${visible ? 'top-0' : 'md:-top-16 -top-[104px]'}`}>
        {({ open }) => (
          <div className={`ease-in duration-500 transition-color ${prevScrollPos===0?"hover:bg-gray-800":"bg-gray-800"} ${open?"bg-gray-800":""}`}>
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


                <div className='items-center pr-2 ml-8 rounded-md hidden md:flex'>
                  
                  <div className="relative items-center min-w-[8rem] pr-2 ml-2 pl-2 rounded-md">
                    

                    <Listbox
                      onChange={(ele) => {
                        useKitchen.setSelectedCity(ele)
                        if (pathname.split('/')[1] === "Services" && pathname.split('/').length > 2) {
                          router.replace('/Services')
                        }
                      }} value={selectcity}
                    >
                      {({ open }) => (
                        <>
                          <Listbox.Button className="relative w-full min-w-16 cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                              {/* <img src={selectedPrice.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                              <span className="block truncate" >{selectcity}</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                          </Listbox.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full min-w-max overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {cities.map((person: string) => (
                                <Listbox.Option
                                  key={person}
                                  className={({ active }) =>
                                    classNames(
                                      active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                      'relative cursor-default select-none py-2 pl-3 pr-9'
                                    )
                                  }
                                  value={person}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <div className="flex items-center">
                                        {/* <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                                        <span
                                          className={classNames(selected ? 'font-semibold' : 'font-normal', ' block truncate')}
                                        >
                                          {person}
                                        </span>
                                      </div>

                                      {selected ? (
                                        <span
                                          className={classNames(
                                            active ? 'text-white' : 'text-indigo-600',
                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                          )}
                                        >
                                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </>
                      )}
                    </Listbox>


                  </div>
                  <div className="relative items-center min-w-[8rem] pr-2 ml-6 md:ml-0 pl-2 rounded-md">
                    

                    <Listbox
                      onChange={(ele) => {
                        router.push(`/Services/${ele.split(" ").join("-")}`)
                      }}
                    >
                      {({ open }) => (
                        <>
                          <Listbox.Button className="relative w-full min-w-16 cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                              {/* <img src={selectedPrice.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                              <span className="block truncate" >Search For Service Here</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                            <MagnifyingGlassIcon className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400 "
                        aria-hidden="true" />
                            </span>
                          </Listbox.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full min-w-max overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    
                              {services.map((service:{_id:string,name:string}) => (
                                <Listbox.Option
                                  key={service?._id}
                                  className={({ active }) =>
                                    classNames(
                                      active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                      'relative cursor-default select-none py-2 pl-3 pr-9'
                                    )
                                  }
                                  value={service?.name}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <div className="flex items-center">
                                        {/* <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                                        <span
                                          className={classNames(selected ? 'font-semibold' : 'font-normal', ' block truncate')}
                                        >
                                          {service?.name}
                                        </span>
                                      </div>

                                      {selected ? (
                                        <span
                                          className={classNames(
                                            active ? 'text-white' : 'text-indigo-600',
                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                          )}
                                        >
                                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </>
                      )}
                    </Listbox>


                  </div>
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
                    <Link
                    
                href={"/BookAppointment"}
                        key={"Book Now"}
                        className={'text-white lg:!ml-4 whitespace-nowrap bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 md:px-2 lg:px-5 py-2.5 text-center'
                        }
                        // onClick={() => {
                        //   useKitchen.SetModalOpen(true)
                        // }}
                        aria-current={current === "Book Now" ? 'page' : undefined}
                      >
                        {"Book Now"}
                      </Link>
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
                <Link
                        key={"Book Now"}
                        className={'block text-white whitespace-nowrap bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 md:px-2 lg:px-5 py-2.5 '
                        }
                        href={"/BookAppointment"}
                        aria-current={current === "Book Now" ? 'page' : undefined}
                      >
                        {"Book Now"}
                      </Link>
              </div>
            </Disclosure.Panel>
            <div className='items-center justify-center pb-2 pr-2 text-sm ml-2  rounded-md flex md:hidden'>


                  <label htmlFor="search" className='hidden sm:inline mr-2 text-gray-300'>City:</label>
                  <div className="relative items-center min-w-[8rem] pr-2 ml-0 sm:mr-4 pl-2 rounded-md">
                    

                    <Listbox
                      onChange={(ele) => {
                        useKitchen.setSelectedCity(ele)
                        if (pathname.split('/')[1] === "Services" && pathname.split('/').length > 2) {
                          router.replace('/Services')
                        }
                      }} value={selectcity}
                    >
                      {({ open }) => (
                        <>
                          <Listbox.Button className="relative w-full min-w-16 cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                              {/* <img src={selectedPrice.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                              <span className="block truncate" >{selectcity}</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                          </Listbox.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full min-w-max overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {cities.map((person: string) => (
                                <Listbox.Option
                                  key={person}
                                  className={({ active }) =>
                                    classNames(
                                      active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                      'relative cursor-default select-none py-2 pl-3 pr-9'
                                    )
                                  }
                                  value={person}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <div className="flex items-center">
                                        {/* <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                                        <span
                                          className={classNames(selected ? 'font-semibold' : 'font-normal', ' block truncate')}
                                        >
                                          {person}
                                        </span>
                                      </div>

                                      {selected ? (
                                        <span
                                          className={classNames(
                                            active ? 'text-white' : 'text-indigo-600',
                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                          )}
                                        >
                                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </>
                      )}
                    </Listbox>


                  </div>

              <label htmlFor="search" className='hidden sm:inline mr-2 text-gray-300'>Search:</label>
                  <div className="relative items-center min-w-[8rem] pr-2 ml-0 pl-2 rounded-md">
                    

                    <Listbox
                      onChange={(ele) => {
                        router.push(`/Services/${ele.split(" ").join("-")}`)
                      }}
                    >
                      {({ open }) => (
                        <>
                          <Listbox.Button className="relative w-full min-w-16 cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                              {/* <img src={selectedPrice.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                              <span className="block truncate" >Search For Service Here</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                            <MagnifyingGlassIcon className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400 "
                        aria-hidden="true" />
                            </span>
                          </Listbox.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full min-w-max overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    
                              {services.map((service:{_id:string,name:string}) => (
                                <Listbox.Option
                                  key={service?._id}
                                  className={({ active }) =>
                                    classNames(
                                      active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                      'relative cursor-default select-none py-2 pl-3 pr-9'
                                    )
                                  }
                                  value={service?.name}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <div className="flex items-center">
                                        {/* <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                                        <span
                                          className={classNames(selected ? 'font-semibold' : 'font-normal', ' block truncate')}
                                        >
                                          {service?.name}
                                        </span>
                                      </div>

                                      {selected ? (
                                        <span
                                          className={classNames(
                                            active ? 'text-white' : 'text-indigo-600',
                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                          )}
                                        >
                                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </>
                      )}
                    </Listbox>


                  </div>
             
            </div>
          </div>
        )}

      </Disclosure>

    </>
  )
}
