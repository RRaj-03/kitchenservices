import { create } from "zustand";
import { combine } from "zustand/middleware";
import dayjs from "dayjs";
import axios from "axios";

interface KitchenState {
  ModalOpen: boolean;
  name: string;
  lastName: string;
  email: string;
  date: string;
  phone: string;
  service: {
    _id: string;
    name: string;
    href: string;
    breadcrumbs: never[];
    images: never[];
    description: string;
    highlights: never[];
    Faqs: never[];
    details: string;
    reviews: {
      href: string;
      average: number;
      totalCount: number;
    };
    pricing: {
      title: string;
      Price: string;
      Features: never[];
    }[];
    topindex: number;
    type: string;
    cities: string[];
  };
  // price: string;
  city: string;
  address: string;

  allServices: {
    _id: string;
    name: string;
    href: string;
    breadcrumbs: never[];
    images: never[];
    description: string;
    highlights: never[];
    details: string;
    Faqs: never[];
    reviews: {
      href: string;
      average: number;
      totalCount: number;
    };
    pricing: {
      title: string;
      Price: string;
      Features: never[];
    }[];
    topindex: number;
    type: string;
    cities: string[];
  }[];
  Services: {
    _id: string;
    name: string;
    href: string;
    breadcrumbs: never[];
    images: never[];
    description: string;
    highlights: never[];
    details: string;
    Faqs: never[];
    reviews: {
      href: string;
      average: number;
      totalCount: number;
    };
    pricing: {
      title: string;
      Price: string;
      Features: never[];
    }[];
    topindex: number;
    type: string;
    cities: string[];
  }[];
  cities: string[];
  selectedCity: string;
  AppointmentID: string | undefined;
  SetForm: (form: any) => void;
  SetServices: () => void;
  SetCities: () => void;
  setSelectedCity: (selectedCity: string) => void;
  setServiceForm: (ele: any) => void;
  // setPriceForm: (ele: any) => void
  SetModalOpen: (ModalOpen: boolean) => void;
  SetAppointmentID: (id: string) => void;
  ImageString: (src: any) => string;
}
const useKitchenStore = create<KitchenState>()((set, get) => ({
  ModalOpen: true,
  name: "",
  lastName: "",
  email: "",
  date: dayjs().format("YYYY-MM-DD").toString(),
  phone: "",
  service: {
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
    Faqs: [],
    pricing: [],
    topindex: 0,
    type: "",
    cities: [],
  },
  // price:'',
  city: "",
  address: "",
  allServices: [],
  Services: [],
  cities: [],
  selectedCity: "",
  AppointmentID: undefined,
  SetAppointmentID: (id: string) => {
    set(() => ({ AppointmentID: id }));
  },
  SetModalOpen: (ModalOpen: boolean) => set(() => ({ ModalOpen: ModalOpen })),
  SetForm: (form: any) => {
    set({ ...form });
  },
  SetServices: () => {
    const city = get().selectedCity;
    const service = get().allServices.filter((ele: { cities: string[] }) => {
      return ele.cities.includes(city);
    });
    set({ Services: service });
  },
  SetCities: () => {
    axios.post("/api/Services").then((res) => {
      set({
        allServices: res?.data?.value,
      });
      res?.data?.value.forEach((ele: any) => {
        ele?.cities.forEach((city: string) => {
          if (!get().cities.includes(city)) {
            set({ cities: [...get().cities, city] });
          }
        });
      });
      set({ selectedCity: get().cities[0] });
      const city = get().cities[0];
      const service = res?.data?.value.filter((ele: any) => {
        return ele?.cities.includes(city);
      });
      // console.log('service', service)
      set({ Services: service });
      // console.log(res.data)
    });
  },
  setSelectedCity: (selectedCity: string) => {
    set({ selectedCity: selectedCity });
    const city = get().selectedCity;
    const service = get().allServices.filter((ele: { cities: string[] }) => {
      return ele?.cities.includes(city);
    });
    set({ Services: service });
  },
  setServiceForm: (ele: any) => {
    set({ service: ele });
  },
  // setPriceForm:(ele:any)=>{
  //     set({price:ele})
  // }
  ImageString: ({ src }: any) => {
    let newsrc = (src: string) =>
      src
        .replace("/file/d/", "/uc?export=view&id=")
        .replace("/view?usp=drive_link", "");
    return `${newsrc(src)}`;
  },
}));

// https://drive.google.com/file/d/1quND1C6iM1vlR0xd1I-fKJtjkrw5cxQp/view?usp=drive_link
// useAccountStore.subscribe(console.log)

export default useKitchenStore;
