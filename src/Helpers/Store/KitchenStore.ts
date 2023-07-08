import { create } from "zustand"
import { combine } from 'zustand/middleware'
import dayjs from 'dayjs'
import axios from 'axios'
interface KitchenState {
    ModalOpen:boolean;
    firstName: string;
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
    price: string;
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
SetForm: (form: any) => void;
SetServices: () => void
SetCities: () => void
setSelectedCity: (selectedCity: string) => void
setServiceForm: (ele: any) => void
setPriceForm: (ele: any) => void
SetModalOpen:(ModalOpen: boolean) => void
}
const useKitchenStore = create<KitchenState>()((set,get) => ({
        ModalOpen:true,
            firstName: '',
        lastName: '',
        email: '',
        date: dayjs().format("YYYY-MM-DD").toString(),
        phone: '',
        service: {
            _id: "",
            name: "Select",
            href: "",
            breadcrumbs: [
            
            ],
            images: [
            
            ],
            description: "",
            highlights: [
            ],
            details: "",
            reviews: {
            href: "",
            average: 0,
            totalCount: 0
            },
            pricing: [],
            topindex: 0,
            type: "",
            cities:[]
        },
        price:'',
        city:'',
        address:'',
        allServices: [],
        Services:[],
        cities:[],
        selectedCity:"",
    
            SetModalOpen:(ModalOpen: boolean) => set(() => ({ ModalOpen: ModalOpen })),
            SetForm : (form:any)=>{
                set(
                    {...form}
                )
            },
            SetServices: ()=>{
                const city = get().selectedCity
                const service = get().allServices.filter((ele: { cities: string[] })=>{
                    return ele.cities.includes(city)
                })
                set({Services:service})
            },
            SetCities:  ()=>{
                axios.get("/api/Services").then(
                    (res)=>{
                        set({
                            allServices:res.data.value
                        })
                        res.data.value.forEach((ele:any)=>{
                            ele.cities.forEach((city: string)=>{
                                if (!get().cities.includes(city)){
                                    set({cities:[...get().cities,city]})
                                }
                            })
                        })
                        set({selectedCity:get().cities[0]})
                        const city = get().cities[0]
                const service = res.data.value.filter((ele:any)=>{
                    return ele.cities.includes(city)
                })
                // console.log('service', service)
                set({Services:service})   
                      // console.log(res.data)
                    }
                  )
                
            },
            setSelectedCity: (selectedCity: string)=>{
                set({selectedCity:selectedCity})
                const city = get().selectedCity
                const service = get().allServices.filter((ele: { cities: string[] })=>{
                    return ele.cities.includes(city)
                })
                set({Services:service})
            },
            setServiceForm:(ele:any)=>{
                set({service:ele})
            },
            setPriceForm:(ele:any)=>{
                set({price:ele})
            }
        }))


// useAccountStore.subscribe(console.log)


export default useKitchenStore