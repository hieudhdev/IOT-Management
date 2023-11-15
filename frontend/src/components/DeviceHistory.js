import React, { useContext, useEffect, useRef, useState } from 'react';
import { IoMdRefresh } from "react-icons/io"
import { BiDownArrow, BiUpArrow, BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi"
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io"
import {format} from "date-fns";

const DeviceHistory = () => {

    const inputSearch = useRef(null)
    const optionSearch = useRef(null)
    const getSelectDevice = useRef('led')
    
    const [device, setDevice] = useState('led')
    const [sort, setSort] = useState('newest')
    const [filter, setFilter] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [dataPagination, setDataPagination] = useState([])
    const [totalPage, setTotalPage] = useState([])
    
    let pageItem = []

    const selectPage = (e) => {   
        setCurrentPage(e.target.value)
        // getDataSensor()
        document.getElementById(currentPage).classList.remove('bg-blue-300') // unselect page (remove background-color)
    }
    
    // pagination component
    // console.log(totalPage)
    if (totalPage <= 10) {
        for (let i=1; i<=totalPage; i++) {
            pageItem.push(<button value={i} onClick={selectPage} id={i} class="w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full">{i}</button>)
        }
    } else {
        pageItem.push(
            <span class="w-40 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full">
                Page {currentPage} of {totalPage}
            </span>
        )
    }
    
    const nextPage = () => {
        if (parseInt(currentPage) ==  totalPage) return 
        setCurrentPage(parseInt(currentPage) + 1)
        document.getElementById(currentPage).classList.remove('bg-blue-300') // unselect page (remove background-color)
    }

    const previousPage = () => {
        if (parseInt(currentPage) == 1) return
        setCurrentPage(parseInt(currentPage) - 1)
        document.getElementById(currentPage).classList.remove('bg-blue-300') // unselect page (remove background-color)
    }

    const getDataSensor = async () => {
        const res = await fetch(`http://localhost:4000/v1/api/devicecontrol/${device}/history?sort=${sort}&page=${currentPage}&filter=${filter}`)
        .then((res) => res.json())
        .then((data) => {
            setDataPagination(data)
        })
    }

    const getTotalPage = async () => {
        const res = await fetch(`http://localhost:4000/v1/api/devicecontrol/${device}/totalRecord?filter=${filter}`)
        .then((res) => res.json())
        .then((data) => {
            setTotalPage(Math.floor(data/10) + (data%10==0 ? 0 : 1))
        })
    }

    const submitSearch = () => {
        setFilter([optionSearch.current.value, inputSearch.current.value])  // ref of input field
    }

    const refresh = () => {
        window.location.reload()
    }

    const sortDateOldest = () => {
        setSort('oldest')
    }

    const sortDateNewest = () => {
        setSort('newest')
    }
    
    const chooseDevice = () => {
        let deviceSelect = getSelectDevice.current.value
        setDevice(deviceSelect)
    }
    
    useEffect(() => {

        getDataSensor()
        getTotalPage()

        if (document.getElementById(currentPage)) {
            document.getElementById(currentPage).classList.add('bg-blue-300')
        }
        
    }, [currentPage, filter, sort, totalPage, device])
    

    return (
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">

                        <div class="ml-5 flex flex-col md:flex-row gap-1">
                            <select onChange={chooseDevice} ref={getSelectDevice} id="pricingType" name="pricingType" class="w-30 h-9 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
                                <option value="led">Led</option>
                                <option value="fan">Fan</option>
                                {/* <option value="ledplus">Led Plus</option> */}
                            </select>
                            <div class="flex">
                                <input ref={inputSearch} type="text" placeholder="Search for the tool you like" class="w-full md:w-80 px-3 h-9 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"/>
                                <button onClick={submitSearch} type="submit" class="bg-sky-500 text-white h-9 rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>
                            </div>
                            <select ref={optionSearch} id="pricingType" name="pricingType" class="w-30 h-9 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
                                <option value="createdAt" selected="">Date & Time</option>
                                <option value="state">ON || OFF</option>
                                <option value="_id">ID</option>
                            </select>

                            <button onClick={refresh} type="button" class="flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Refresh
                                <IoMdRefresh />
                            </button>  
                        </div>
                        
                        <table class="min-w-full text-left text-sm font-light">
                            <thead class="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th onClick={chooseDevice} scope="col" class="px-6 py-4">STT</th>
                                    <th scope="col" class="px-6 py-4">ID</th>
                                    <th scope="col" class="px-6 py-4">Devices</th>
                                    <th scope="col" class="px-6 py-4">Actions</th>
                                    <th scope="col" class="px-6 py-4">
                                        <div style={{display: 'flex'}}>

                                        <div class="">Date & Time</div> 
                                        <div class="">
                                        {
                                            sort != 'oldest' ?
                                            <BiUpArrow onClick={sortDateOldest} class="cursor-pointer"/> :
                                            <IoMdArrowDropupCircle onClick={sortDateOldest} class="cursor-pointer"/>
                                        }
                                        {
                                            sort != 'newest' ?
                                            <BiDownArrow onClick={sortDateNewest} class="cursor-pointer"/> :
                                            <IoMdArrowDropdownCircle onClick={sortDateNewest} class="cursor-pointer"/>
                                        }  

                                        </div>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* LOOP DATA */}
                                {dataPagination.map((data, i) => (
                                    <tr class="border-b dark:border-neutral-500">
                                        <td class="whitespace-nowrap px-6 py-2">{(currentPage-1)*10+i+1}</td>
                                        <td class="whitespace-nowrap px-6 py-2">{data._id}</td>
                                        <td class="whitespace-nowrap px-6 py-2">{data.type}</td>
                                        <td class="whitespace-nowrap px-6 py-2">{data.state}</td>
                                        <td class="whitespace-nowrap px-6 py-2">{format(new Date(data.createdAt), 'dd/MM/yyyy H:mm:ss')}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center my-3">
                <div class="flex text-gray-700">
                    <div onClick={previousPage} class="h-8 w-8 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-4 h-4">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </div>
                    <div class="flex h-8 font-medium rounded-full bg-gray-200">
                        {/* LOOP PAGINATION */}
                        {pageItem}

                    </div>
                    <div onClick={nextPage} class="h-8 w-8 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-4 h-4">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default DeviceHistory;