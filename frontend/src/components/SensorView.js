import React, {useState, useEffect, useContext} from 'react';
import { FaSun, FaHandHoldingWater, FaTemperatureHigh, FaLightbulb, FaFan, FaEllipsisV } from "react-icons/fa"
import { dataSensorContext } from '../App';

const SensorView = () => {

    const datas = useContext(dataSensorContext)
    // console.log(datas)
    let temp = datas[9].Temperature
    let humi = datas[9].Humidity
    let lig = datas[9].Light

    return (
        <div className='grid grid-cols-3 gap-[30px] '>
                <div className=' h-[100px] rounded-[8px] bg-white border-l-[5px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>TEMPERATURE (℃)</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>{temp} (℃)</h1>
                    </div>
                    <FaTemperatureHigh fontSize={28} color="" />
                </div>
                <div className=' h-[100px] rounded-[8px] bg-white border-l-[5px] border-[#1CC88A] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>HUMIDITY (%)</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>{humi} (%)</h1>
                    </div>
                    <FaHandHoldingWater fontSize={28} />
                </div>
                <div className=' h-[100px] rounded-[8px] bg-white border-l-[5px] border-amber-500 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>LIGHT (Lux)</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>{lig} (Lux)</h1>
                    </div>
                    <FaSun fontSize={28} />
                </div>
            </div>
    )
}

export default SensorView;