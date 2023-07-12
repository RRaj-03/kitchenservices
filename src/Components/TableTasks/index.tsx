"use client"
import axios from 'axios'
import { loadComponents } from 'next/dist/server/load-components'
import React, { useEffect, useState } from 'react'
const Loading = () =>{
    return (
        <tr className="h-24 animate-pulse border-gray-300  border-b">
                                
                                
                                <td className="pl-8 text-sm pr-6 whitespace-nowrap text-gray-800  tracking-normal leading-4"><div className="h-3 bg-slate-700 rounded"></div></td>
                                <td className="text-sm pr-6 whitespace-nowrap text-gray-800  tracking-normal leading-4"><div className="h-3 bg-slate-700 rounded"></div></td>
                                <td className="text-sm pr-6 whitespace-nowrap text-gray-800  tracking-normal leading-4">
                                        <div className="h-3 bg-slate-700 rounded"></div>
                                </td>
                                <td className="text-sm pr-6 whitespace-nowrap text-gray-800  tracking-normal leading-4"><div className="h-3 bg-slate-700 rounded"></div></td>
                                <td className="text-sm pr-6 whitespace-nowrap text-gray-800  tracking-normal leading-4"><div className="h-3 bg-slate-700 rounded"></div></td>
                                
                                <td className="text-sm pr-6 whitespace-nowrap text-gray-800  tracking-normal leading-4"><div className="h-3 bg-slate-700 rounded"></div></td>
                                <td className="text-sm pr-6 whitespace-nowrap text-gray-800  tracking-normal leading-4"><div className="h-3 bg-slate-700 rounded"></div></td>
                                <td className="text-sm pr-6 whitespace-nowrap text-gray-800  tracking-normal leading-4"><div className="h-3 bg-slate-700 rounded"></div></td>
                                <td className="pr-8 relative">
                                    <div className="dropdown-content mt-8 absolute left-0 -ml-12 shadow-md z-10 hidden w-32">
                                        <ul className="bg-white  shadow rounded py-1">
                                            <li className="cursor-pointer text-gray-600  text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                            <li className="cursor-pointer text-gray-600  text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                            <li className="cursor-pointer text-gray-600  text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                        </ul>
                                    </div>
                                    <button className="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg"  className="icon icon-tabler icon-tabler-dots-vertical dropbtn" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
    )
}
const Table = () => {
    const [page, setPage] = useState(1)
    const [totalnum, setTotalnum] = useState(-1)
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchdata =async (pagenum:number)=>{
        setLoading(true)
        const data  = await axios.post("/api/Tasks",{
            userid:"rraj1369",
            password:"password",
            page:pagenum
        })
        const {Task , totalData} = data.data
        setTasks(Task)
        setTotalnum(totalData)
        setLoading(false)
    }
    useEffect(() => {
        fetchdata(page)
    }, [])
    const colorlist = ["bg-yellow-100","bg-red-100","bg-green-100","bg-purple-100","bg-cyan-100","bg-indigo-100"]
  return (
    <div className="py-20">
            <div className="sm:mx-8 bg-white  shadow rounded bg-">
                <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
                    {/* <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                        <div className="flex items-center">
                            <a className="text-gray-600  p-2 border-transparent border bg-gray-100  hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                    <line x1={16} y1={5} x2={19} y2={8} />
                                </svg>
                            </a>
                            <a className="text-gray-600  mx-2 p-2 border-transparent border bg-gray-100   hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <circle cx={12} cy={12} r={3} />
                                </svg>
                            </a>
                            <a className="text-gray-600  mr-2 p-2 border-transparent border bg-gray-100   hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                </svg>
                            </a>
                            <a className="text-gray-600  mr-2 p-2 border-transparent border bg-gray-100   hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-copy" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={8} y={8} width={12} height={12} rx={2} />
                                    <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                                </svg>
                            </a>
                            <a className="text-red-500 p-2 border-transparent border bg-gray-100   hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-trash" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={4} y1={7} x2={20} y2={7} />
                                    <line x1={10} y1={11} x2={10} y2={17} />
                                    <line x1={14} y1={11} x2={14} y2={17} />
                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                </svg>
                            </a>
                        </div>
                    </div> */}
                    <div className="w-full lg:w-full flex flex-col lg:flex-row items-start lg:items-center justify-end">
                        <div className="flex items-center lg:border-l lg:border-r border-gray-300  py-3 lg:py-0 lg:px-6">
                            <p className="text-base text-gray-600 " id="page-view">
                                Viewing {((page-1)*20)+1} - {Math.min(20*page,totalnum)} of {totalnum}
                            </p>
                            <div onClick={()=>{
                                setPage(page-1)
                                fetchdata(page-1)
                            }} className={`text-gray-600 ${((0<((page-1)*20)+1)&&(((page-1)*20)+1<=20))?"pointer-events-none  cursor-not-allowed":"text-black"} mr-2 ml-2 border-transparent border cursor-pointer rounded `} >
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                            </div>
                            <div  onClick={()=>{
                                setPage(page+1)
                                fetchdata(page+1)
                            }} className={`text-gray-600 ${totalnum<=(page*20)?"pointer-events-none cursor-not-allowed":"text-black"}  border-transparent border rounded focus:outline-none cursor-pointer ml-2 `} >
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="9 6 15 12 9 18" />
                                </svg>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                    <table className="min-w-full bg-white ">
                        <thead>
                            {/* <Loading/> */}
                            <tr className="w-full h-16 border-gray-300  border-b py-8">
                                
                                <th className="pl-8 text-gray-600  font-normal pr-6 text-left text-sm tracking-normal leading-4">Appintment Id</th>
                                <th className="text-gray-600  font-normal pr-6 text-left text-sm tracking-normal leading-4">Client Name</th>
                                <th className="text-gray-600  font-normal pr-6 text-left text-sm tracking-normal leading-4">Contact</th>
                                <th className="text-gray-600  font-normal pr-6 text-left text-sm tracking-normal leading-4">Email</th>
                                <th className="text-gray-600  font-normal pr-6 text-left text-sm tracking-normal leading-4">Date</th>
                                <th className="text-gray-600  font-normal pr-6 text-left text-sm tracking-normal leading-4">Service</th>
                                <th className="text-gray-600  font-normal pr-6 text-left text-sm tracking-normal leading-4">City</th>
                                <th className="text-gray-600  font-normal pr-6 text-left text-sm tracking-normal leading-4">Address</th>
                                {/* <th className="text-gray-600  font-normal pr-6 text-left text-sm tracking-normal leading-4">
                                    <div className="opacity-1 w-2 h-2 rounded-full bg-indigo-400" />
                                    Status
                                </th> */}
                                
                            </tr>
                        </thead>
                        <tbody>
                        {
                                ((tasks.length===0)&&!loading)?<div className='w-full text-center'>Nothing to Show</div>:!loading?null:<Loading/>
                            }
                                {tasks.map((task:any,index:number)=>{
                                    return(
                                        <tr key={task?._id} className={"h-24 border-gray-300   border-b "+colorlist[index%6]}>
                                
                                
                                <td className="pl-8 text-sm pr-6 whitespace-nowrap text-gray-800  tracking-normal leading-4">{task?._id}</td>
                                <td className="text-sm pr-6 whitespace-nowrap text-gray-800 font-bold tracking-normal leading-4">{task?.name}</td>
                                <td className="pr-6 whitespace-nowrap">
                                    <div className="flex items-center">
                                        
                                        <p className="ml-2 text-gray-800  tracking-normal leading-4 text-sm">{task?.phone}</p>
                                    </div>
                                </td>
                                <td className="text-sm pr-6 whitespace-nowrap text-gray-800  tracking-normal leading-4">{task?.email}</td>
                                <td className="text-sm pr-6 whitespace-nowrap text-gray-800  tracking-normal leading-4">{task?.date}</td>
                                
                                <td className="text-sm pr-6 whitespace-nowrap text-gray-800  tracking-normal leading-4">{task?.service?.name}</td>
                                <td className="text-sm pr-6 whitespace-nowrap text-gray-800  tracking-normal leading-4">{task?.city}</td>
                                <td className="text-sm pr-6 whitespace-nowrap text-gray-800  tracking-normal leading-4">{task?.address}</td>
                                
                            </tr>
                                    )
                                })}
                            
                          
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  )
}

export default Table