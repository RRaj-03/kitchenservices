"use client";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition, Listbox } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import useKitchenStore from "@/Helpers/Store/KitchenStore";
import React, { useEffect } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const Form = () => {
  const services = useKitchenStore((state) => state.allServices);
  // const [price, setPrice] = useState<any>([])
  const [city, setCity] = useState<any>([]);
  const useKitchen = useKitchenStore();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: useKitchen.name || "",
      email: useKitchen.email || "",
      date: useKitchen.date || dayjs().format("YYYY-MM-DD").toString(),
      phone: useKitchen.phone || "",
      service: useKitchen.service || {
        _id: "",
        name: "Select",
        href: "",
        breadcrumbs: [],
        images: [],
        description: "",
        highlights: [],
        details: "",
        reviews: {
          href: "",
          average: 0,
          totalCount: 0,
        },
        pricing: [
          {
            title: "",
            Price: "",
            Features: [],
          },
        ],
        topindex: 0,
        type: "",
        cities: [],
      },
      // price:useKitchen.price||'',
      city: useKitchen.selectedCity || "",
      address: useKitchen.address || "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Must be 3 characters or more")
        .required("Required"),
      email: Yup.string().email("Invalid email address"),
      date: Yup.string().required("Required"),
      phone: Yup.number()
        .min(1000000000, "Invalid Phone Number")
        .max(9999999999, "Invalid Phone Number")
        .typeError("Invalid Phone Number")
        .integer("Invalid Phone Number")
        .required("Required"),
      service: Yup.object({
        _id: Yup.string().required("Required"),
        name: Yup.string().required("Required"),
      }),
      // price: Yup.string().required('Required'),
      city: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const data = {
        name: values.name,
        email: values.email,
        date: values.date,
        phone: values.phone,
        service: {
          _id: values.service._id,
          name: values.service.name,
        },
        // "price": values.price,
        city: values.city,
        address: values.address,
      };
      axios
        .post("/api/Tasks", data)
        .then((res: any) => {
          if (res.status === 200) {
            toast.success(res.data.value.message);
            useKitchen.SetForm({ ...data, service: values.service });
            if (res?.data?.value?.AppointmentID) {
              useKitchen.SetAppointmentID(res?.data?.value?.AppointmentID);
              useKitchen.SetModalOpen(false);
              router.push(
                "/BookAppointment/Success/" + res?.data?.value?.AppointmentID
              );
            }
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          console.log("err", err);
          toast.error(err?.message);
        });
    },
  });

  useEffect(() => {
    setCity(formik.values.service.cities);
  }, [formik.values.service]);

  return (
    <div className="min-w-[90%] mx-auto sm:w-auto scale-95">
      <div className="isolate bg-white px-6 py-8  lg:px-10">
        <div
          className="absolute inset-x-0 top-[0rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                " polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Book Appointment
          </h2>
          {/* <p className="mt-0 text-sm leading-8 text-gray-600">kitchen chimney services.</p> */}
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="mx-auto mt-2 max-w-xl sm:mt-2"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2 ">
            <div className="w-full  justify-self-center">
              <label
                htmlFor="name"
                className="block text-xs font-semibold leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-0.5 relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="mt-2 absolute right-0 text-xs text-right text-red-600 dark:text-red-500">
                    <span className="font-medium">{formik.errors.name}</span>
                  </p>
                ) : null}
              </div>
            </div>

            <div className="w-full  justify-self-center">
              <label
                htmlFor="Date"
                className="block text-xs font-semibold leading-6 text-gray-900"
              >
                Date
              </label>
              <div className="mt-0.5 relative">
                <input
                  type="date"
                  name="Date"
                  id="Date"
                  autoComplete="off"
                  className="block w-full rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  min={dayjs().format("YYYY-MM-DD")}
                  defaultValue={formik.values.date}
                  required
                />
                {formik.touched.date && formik.errors.date ? (
                  <p className="mt-2 text-xs text-right absolute right-0 text-red-600 dark:text-red-500">
                    <span className="font-medium">{formik.errors.date}</span>
                  </p>
                ) : null}
              </div>
            </div>
            <div className="w-full  justify-self-center">
              <label
                htmlFor="phone"
                className="block text-xs font-semibold leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-0.5 relative">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <p className="mt-2 text-xs text-right absolute right-0 text-red-600 dark:text-red-500">
                    <span className="font-medium">{formik.errors.phone}</span>
                  </p>
                ) : null}
              </div>
            </div>
            <div className="w-full  justify-self-center">
              <label
                htmlFor="email"
                className="block text-xs font-semibold leading-6 text-gray-900"
              >
                Email (optional)
              </label>
              <div className="mt-0.5 relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="mt-2 text-xs text-right absolute right-0 text-red-600 dark:text-red-500">
                    <span className="font-medium">{formik.errors.email}</span>
                  </p>
                ) : null}
              </div>
            </div>
            {/* <div >
        <label htmlFor="phone-number" className="block text-xs font-semibold leading-6 text-gray-900">Phone number</label>
        <div className="relative mt-0.5 relative">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="country" className="sr-only">Country</label>
          </div>
          <input type="tel" name="phone-number" id="phone-number" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-1  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"  onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.phone} />
        </div>
      </div> */}
            <div className=" w-full  justify-self-center relative">
              <div
                onClick={() => {
                  formik.setFieldTouched("service", true);
                }}
              >
                <Listbox
                  value={formik.values.service}
                  onChange={(ele) => formik.setFieldValue("service", ele)}
                >
                  {({ open }) => (
                    <>
                      <Listbox.Label className="block text-xs font-semibold leading-6 text-gray-900">
                        Service
                      </Listbox.Label>
                      <div className="mt-0.5">
                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-xs sm:leading-6">
                          <span className="flex items-center">
                            {/* <img src={selectedService.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                            <span
                              className=" block truncate"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            >
                              {formik.values.service.name}
                            </span>
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-xs">
                            {services.map(
                              (person: { _id: string; name: string }) => (
                                <Listbox.Option
                                  key={person._id}
                                  className={({ active }) =>
                                    classNames(
                                      active
                                        ? "bg-indigo-600 text-white"
                                        : "text-gray-900",
                                      "relative cursor-default select-none py-1 pl-3 pr-9"
                                    )
                                  }
                                  value={person}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <div className="flex items-center">
                                        {/* <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                                        <span
                                          className={classNames(
                                            selected
                                              ? "font-semibold"
                                              : "font-normal",
                                            "block truncate"
                                          )}
                                        >
                                          {person.name}
                                        </span>
                                      </div>

                                      {selected ? (
                                        <span
                                          className={classNames(
                                            active
                                              ? "text-white"
                                              : "text-indigo-600",
                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                          )}
                                        >
                                          <CheckIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              )
                            )}
                          </Listbox.Options>
                        </Transition>
                      </div>
                      {formik.touched.service && formik.errors.service ? (
                        <p className="mt-2 text-xs text-right absolute right-0 text-red-600 dark:text-red-500">
                          <span className="font-medium">
                            {formik.errors.service._id}
                          </span>
                        </p>
                      ) : null}
                    </>
                  )}
                </Listbox>
              </div>
            </div>
            {/* <div >
        <div onClick={()=>{
                formik.setFieldTouched('price',true)
              }}>
        <Listbox value={formik.values.price} onChange={(ele)=>formik.setFieldValue("price",ele)}
         >
      {({ open }) => (
        <>
          <Listbox.Label className="block text-xs font-semibold leading-6 text-gray-900">Price Option</Listbox.Label>
          <div className="relative mt-0.5 relative">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-xs sm:leading-6">
              <span className="flex items-center">
                <span className="block truncate" onChange={formik.handleChange} onBlur={formik.handleBlur}>{formik.values.price||"Service"}</span>
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
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-xs">
                {price.map((person: string) => (
                  <Listbox.Option
                    key={person}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-1 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
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
          {formik.touched.price && formik.errors.price ? (
          <p className="mt-2 text-xs text-right absolute right-0 text-red-600 dark:text-red-500">
            <span className="font-medium">{formik.errors.price}</span>
          </p>
        ) : (null
        )}
        </>
      )}
    </Listbox>
        </div>
      </div> */}

            <div className=" w-full  justify-self-center relative">
              <div
                onClick={() => {
                  formik.setFieldTouched("city", true);
                }}
              >
                <Listbox
                  value={formik.values.city}
                  onChange={(ele) => formik.setFieldValue("city", ele)}
                >
                  {({ open }) => (
                    <>
                      <Listbox.Label className="block text-xs font-semibold leading-6  text-gray-900">
                        City
                      </Listbox.Label>
                      <div className=" mt-0.5 ">
                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-xs sm:leading-6">
                          <span className="flex items-center">
                            {/* <img src={selectedPrice.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                            <span
                              className="block truncate"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            >
                              {formik.values.city || "Select"}
                            </span>
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-xs">
                            {city.map((person: string) => (
                              <Listbox.Option
                                key={person}
                                className={({ active }) =>
                                  classNames(
                                    active
                                      ? "bg-indigo-600 text-white"
                                      : "text-gray-900",
                                    "relative cursor-default select-none py-1 pl-3 pr-9"
                                  )
                                }
                                value={person}
                              >
                                {({ selected, active }) => (
                                  <>
                                    <div className="flex items-center">
                                      {/* <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                                      <span
                                        className={classNames(
                                          selected
                                            ? "font-semibold"
                                            : "font-normal",
                                          " block truncate"
                                        )}
                                      >
                                        {person}
                                      </span>
                                    </div>

                                    {selected ? (
                                      <span
                                        className={classNames(
                                          active
                                            ? "text-white"
                                            : "text-indigo-600",
                                          "absolute inset-y-0 right-0 flex items-center pr-4"
                                        )}
                                      >
                                        <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
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
                        <p className="mt-2 text-xs text-right absolute right-0 text-red-600 dark:text-red-500">
                          <span className="font-medium">
                            {formik.errors.city}
                          </span>
                        </p>
                      ) : null}
                    </>
                  )}
                </Listbox>
              </div>
            </div>
            <div className="sm:col-span-2 w-full  justify-self-center">
              <label
                htmlFor="address"
                className="block text-xs font-semibold leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-0.5 relative">
                <textarea
                  name="address"
                  id="address"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                ></textarea>
                {formik.touched.address && formik.errors.address ? (
                  <p className="mt-2 text-xs text-right absolute right-0 text-red-600 dark:text-red-500">
                    <span className="font-medium">{formik.errors.address}</span>
                  </p>
                ) : null}
              </div>
            </div>

            {/* <div className="flex gap-x-4 sm:col-span-2">
        <div className="flex h-6 items-center">
          <button type="button" className="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
            <span className="sr-only">Agree to policies</span>
            <span aria-hidden="true" className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
          </button>
        </div>
        <label className="text-xs leading-6 text-gray-600" id="switch-1-label">
          By selecting this, you agree to our
          <Link href="#" className="font-semibold text-indigo-600">privacy&nbsp;policy</Link>.
        </label>
      </div> */}
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Book Appointment
            </button>
          </div>
        </form>
        <div
          className="absolute inset-x-0 bottom-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:bottom-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative right-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                " polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default function Modal() {
  const [open, setOpen] = useKitchenStore((state) => [
    state.ModalOpen,
    state.SetModalOpen,
  ]);
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center sm:items-center sm:p-0 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative md:min-w-[750px] min-w-[80%] my-4 max-h-fit transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div
                  className="h-8 w-8 absolute z-[1] right-0 mt-1 mr-1 s"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <XMarkIcon />
                </div>
                <Form />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
