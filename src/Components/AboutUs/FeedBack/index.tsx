"use client"
import useKitchenStore from '@/Helpers/Store/KitchenStore';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';
import axios from 'axios';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import Link from 'next/link'
import router from 'next/router';
import React, { Fragment, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import * as Yup from 'yup'
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
const Feedback = () => {
    const cities = useKitchenStore(state=>state.cities)
    const formik = useFormik({
        initialValues: {
            name: '',
            city:'',
            message:''

        },
        validationSchema: Yup.object({
            name: Yup.string().required(),
            city:Yup.string().required(),
            message:Yup.string().required()
        }),
        onSubmit: values => {
            const data = {
                "name": values.name,
                "city":values.city,
                "message":values.message
            }
            axios.post("/api/Feedback", data).then((res: any) => {
                console.log('res.status', res.status)
                if(res.status===200){
                    toast.success(res.data.value.message)
                }
                else{
                    toast.error(res.data.message)
                }
            }).catch(err=>{
                console.log('err', err.name)
                toast.error(err?.message)
            })
        }
    })
    
    return (
        <>
            <div className=" bg-stone-100 px-5 pt-8 pb-16 mx-auto lg:grid lg:grid-cols-3 gap-4 grid">
                
                <form onSubmit={formik.handleSubmit} className="lg:col-start-3 bg-gray-200 rounded-lg p-8 sm:max-lg:grid sm:max-lg:grid-cols-2 gap-x-4 justify-center w-full  md:mt-0 relative shadow-md ">
                    <h2 className="sm:max-lg:col-span-2 text-center text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                    <p className="sm:max-lg:col-span-2 text-center leading-relaxed mb-5 text-gray-600">Kitchen Chimney Services</p>
                    <div className="relative ">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}/>
                        {formik.touched.name && formik.errors.name ? (
          <p className="  text-sm text-right text-red-600 dark:text-red-500">
            <span className="font-medium">{formik.errors.name}</span>
          </p>
        ) : (<br />
        )}
                    </div>
                    <div className="relative ">
                    <div onClick={()=>{
                formik.setFieldTouched('city',true)
              }}>
        <Listbox value={formik.values.city} onChange={(ele)=>formik.setFieldValue("city",ele)}
         >
      {({ open }) => (
        <>
          <Listbox.Label className="block leading-7 text-sm text-gray-600">City</Listbox.Label>
          <div className="relative">
            <Listbox.Button className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              <span className="flex items-center">
                {/* <img src={selectedPrice.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                <span className="block truncate " onChange={formik.handleChange} onBlur={formik.handleBlur}>{formik.values.city||"Select"}</span>
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
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
          </div>
          {formik.touched.city && formik.errors.city ? (
          <p className=" mt-1 text-sm text-right text-red-600 dark:text-red-500">
            <span className="font-medium">{formik.errors.city}</span>
          </p>
        ) : (<br />
        )}
        </>
      )}
    </Listbox>
    </div>
                    </div>
                    <div className="relative sm:max-lg:col-span-2">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message}></textarea>
                        {formik.touched.message && formik.errors.message ? (
          <p className="mb-2 -mt-1 text-sm text-right text-red-600 dark:text-red-500">
            <span className="font-medium">{formik.errors.message}</span>
          </p>
        ) : (null
        )}
                    </div>
                    <button type='submit'  className="sm:max-lg:col-span-2 w-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Book</button>
                    <p className="sm:max-lg:col-span-2 text-xs text-gray-500 mt-3"></p>
                </form>
                <div className="lg:col-span-2 lg:row-start-1  mx-auto bg-gray-200 rounded-lg p-8 shadow-md">
                    <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Reviews</h1>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4  w-full">
                            <div className="h-full bg-gray-100 p-8 rounded flex justify-between flex-col">

                                <p className="leading-relaxed mb-6">Outstanding service! Impeccable work, flawless repairs, and exceptional customer service. Highly recommended!</p>
                                <Link className="inline-flex items-center" href={''}>
                                    <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-gray-900">Rahul Agarawal</span>
                                        <span className="text-gray-500 text-sm">sai nagar,Amravati</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="p-4  w-full">
                            <div className="h-full bg-gray-100 p-8 rounded flex justify-between flex-col">

                                <p className="leading-relaxed mb-6">kitchen chimney services serves with prompt, professional cleaning, flawless repairs, and a strong commitment to customer satisfaction</p>
                                <Link className="inline-flex items-center" href={''}>
                                    <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-gray-900">Ujjwal Makode</span>
                                        <span className="text-gray-500 text-sm">Morshi</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Feedback