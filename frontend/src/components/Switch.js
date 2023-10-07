import React, {useState} from 'react';
import { FaSun, FaHandHoldingWater, FaTemperatureHigh, FaLightbulb, FaFan, FaEllipsisV } from "react-icons/fa"
import { BsLightbulbFill, BsLightbulbOffFill, BsLightbulbOff, BsLightbulb } from "react-icons/bs"

const SwitchComponent = () => {

    const [openLed, setOpenLed] = useState(false)
    const [openFan, setOpenFan] = useState(false)

    const ledSwitch = () => {
        setOpenLed(!openLed)
        // console.log(open)
    }

    const fanSwitch = () => {
        setOpenFan(!openFan)
        // console.log(open)
    }

    return (
        <div className='basis-[40%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
            <div className='flex justify-center items-center h-3/6'>
                <h2 className='text-[#B589DF] text-[23px] leading-[17px] font-bold'>LED</h2>
                    {
                        openLed && 
                        <div>
                            <BsLightbulb fontSize={30} className='ml-2 mr-10'/>
                        </div>
                    }
                    {
                        !openLed &&
                        <div>
                            <BsLightbulbOffFill fontSize={30} className='ml-2 mr-10'/>
                        </div>
                    }
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" onClick={ledSwitch}/>
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </div>

            <hr class="h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-100" />

            <div className='flex justify-center items-center h-3/6'>
                <h2 className='text-[#1cc88a] text-[23px] leading-[17px] font-bold'>FAN</h2>
                    {
                        openFan && 
                        <div>
                            <FaFan fontSize={30} className='ml-2 mr-10 animate-spin'/>
                        </div>
                    }
                    {
                        !openFan &&
                        <div>
                            <FaFan fontSize={30} className='ml-2 mr-10'/>
                        </div>
                    }
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" onClick={fanSwitch}/>
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </div>
        </div>
    )
}

export default SwitchComponent;