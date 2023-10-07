import React, { useState } from 'react'
import { FaNode, FaSearch, FaEnvelope, FaRegBell } from "react-icons/fa"
import profile from "../assets/profile.png"
import { Link } from 'react-router-dom'

const Dashboardview = () => {
    const [open, setOpen] = useState(false)

    const showProfile = () => {
        // alert("helloo")
        setOpen(!open)
        console.log(open)
    }

    return (
        <div className=''>
            <div className='flex items-center justify-between h-[70px] shadow-lg px-[25px] '>  
                <div className='flex items-center rounded-[5px] ml-96'>
                    {/* <input type="text" className=' bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='Search for...' />
                    <div className='bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'>
                    <FaSearch color='white' />
                </div> */}
                    
                    <h1 className='text-[#4e73df] text-[20px] leading-[19px] font-bold'>
                        IOT Management
                    </h1>

                </div>
                <div className='flex items-center gap-[20px]'>
                    {/* <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px]'>
                        <FaRegBell />
                        <FaEnvelope />
                    </div> */}
                    <div className='flex items-center gap-[15px] relative' onClick={showProfile} >
                        <p>Hieu Dang</p>
                        <div className='h-[40px] w-[40px] rounded-full bg-[#4E73DF] cursor-pointer flex items-center justify-center relative z-40' >
                            <img src={profile} alt="../assets/DENO.png" />

                        </div>

                        {
                            open &&
                            <div className='bg-white border h-[120px] w-[150px] absolute bottom-[-135px] z-20 right-0 pt-[15px] pl-[15px] space-y-[10px]'>
                                <Link to='/profile'>
                                    <p className='cursor-pointer hover:text-[blue] font-semibold'>Profile</p>
                                </Link>
                                <p className='cursor-pointer hover:text-[blue] font-semibold'>Settings</p>
                                <p className='cursor-pointer hover:text-[blue] font-semibold'>Log out</p>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboardview