import React, {useEffect, useState} from 'react'
import { FaTachometerAlt, FaNode, FaUserCircle, FaStickyNote, FaRegChartBar, FaRegCalendarAlt, FaChevronRight, FaChevronLeft, FaBolt } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { BsDatabaseFillAdd, BsClipboardDataFill } from "react-icons/bs"

const Sidebar = () => {

    return (
        <div className='bg-[#4E73DF] px-[25px] h-screen'>
            <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
                <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>Admin</h1>
            </div>
            <Link to='/'>
                <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer'>
                    <FaTachometerAlt color='white' />
                        <p className='text-[14px] leading-[20px] font-bold text-white'>Dashboard</p>
                </div>
            </Link>
            <Link to='/profile'>
                <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer'>
                    <FaUserCircle color='white'/>
                    <p className='text-[14px] leading-[20px] font-bold text-white'>Profile</p>
                </div>
            </Link>
            <Link to='/datasensor'>
                <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer'>
                    <BsDatabaseFillAdd color='white' />
                    <p className='text-[14px] leading-[20px] font-bold text-white'>Data Sensor</p>
                </div>
            </Link>
            <Link to='/devicehistory'>
                <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer'>
                    <BsClipboardDataFill color='white' />
                    <p className='text-[14px] leading-[20px] font-bold text-white'>Devices History</p>
                </div>
            </Link>
            
            <div className='flex mt-40 ml-5'>
                <FaNode className='flex text-lime-100' fontSize={60}/>      
            </div>
            
        </div>
    )
}

export default Sidebar