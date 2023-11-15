import React, {useState, useEffect, useContext} from 'react';
import { FaSun, FaHandHoldingWater, FaTemperatureHigh, FaLightbulb, FaFan, FaEllipsisV } from "react-icons/fa"
import { dataSensorContext } from '../App';

const SensorView = () => {

    const datas = useContext(dataSensorContext)
    // console.log(datas)
    let temp = datas[9].Temperature
    let humi = datas[9].Humidity
    let lig = datas[9].Light
    let dobui = datas[9].DoBui

    let tempColor = Math.floor(temp / 10) * 100
    let humiColor = Math.floor(humi / 10) * 100
    let lightColor = Math.floor(lig / 10) * 100
    let dobuiColor = Math.floor(dobui / 10) * 100
    
    switch (tempColor) {
        case 0:
            tempColor = 'bg-pink-50'
            break
        case 100:
            tempColor = 'bg-pink-100'
            break
        case 200:
            tempColor = 'bg-pink-200'
            break
        case 300:
            tempColor = 'bg-pink-300'
            break
        case 400:
            tempColor = 'bg-pink-400'
            break
        case 500:
            tempColor = 'bg-pink-500'
            break
        case 600:
            tempColor = 'bg-pink-600'
            break
        case 700:
            tempColor = 'bg-pink-700'
            break
        case 800:
            tempColor = 'bg-pink-800'
            break
        case 900:
            tempColor = 'bg-pink-900'
            break
    }

    switch (lightColor) {
        case 0:
            lightColor = 'bg-yellow-50'
            break
        case 100:
            lightColor = 'bg-yellow-100'
            break
        case 200:
            lightColor = 'bg-yellow-200'
            break
        case 300:
            lightColor = 'bg-yellow-300'
            break
        case 400:
            lightColor = 'bg-yellow-400'
            break
        case 500:
            lightColor = 'bg-yellow-500'
            break
        case 600:
            lightColor = 'bg-yellow-600'
            break
        case 700:
            lightColor = 'bg-yellow-700'
            break
        case 800:
            lightColor = 'bg-yellow-800'
            break
        case 900:
            lightColor = 'bg-yellow-900'
            break
    }

    switch (humiColor) {
        case 0:
            humiColor = 'bg-sky-50'
            break
        case 100:
            humiColor = 'bg-sky-50'
            break
        case 200:
            humiColor = 'bg-sky-100'
            break
        case 300:
            humiColor = 'bg-sky-100'
            break
        case 400:
            humiColor = 'bg-sky-200'
            break
        case 500:
            humiColor = 'bg-sky-200'
            break
        case 600:
            humiColor = 'bg-sky-300'
            break
        case 700:
            humiColor = 'bg-sky-400'
            break
        case 800:
            humiColor = 'bg-sky-500'
            break
        case 900:
            humiColor = 'bg-sky-600'
            break
    }

    switch (dobuiColor) {
        case 0:
            dobuiColor = 'bg-slate-50'
            break
        case 100:
            dobuiColor = 'bg-slate-50'
            break
        case 200:
            dobuiColor = 'bg-slate-100'
            break
        case 300:
            dobuiColor = 'bg-slate-100'
            break
        case 400:
            dobuiColor = 'bg-slate-200'
            break
        case 500:
            dobuiColor = 'bg-slate-200'
            break
        case 600:
            dobuiColor = 'bg-slate-300'
            break
        case 700:
            dobuiColor = 'bg-slate-400'
            break
        case 800:
            dobuiColor = 'bg-slate-500'
            break
        case 900:
            dobuiColor = 'bg-slate-600'
            break
    }

    return (
        <div className='grid grid-cols-3 gap-[30px] '>
            <div className={`${tempColor} h-[100px] rounded-[8px] border-l-[5px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out `}>
                <div>
                    <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>TEMPERATURE (℃)</h2>
                    <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>{temp} (℃)</h1>
                </div>
                <FaTemperatureHigh fontSize={28} color="" />
            </div>
            <div className={`${humiColor} h-[100px] rounded-[8px] border-l-[5px] border-[#1CC88A] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out`}>
                <div>
                    <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>HUMIDITY (%)</h2>
                    <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>{humi} (%)</h1>
                </div>
                <FaHandHoldingWater fontSize={28} />
            </div>
            <div className={`${lightColor} h-[100px] rounded-[8px] border-l-[5px] border-amber-500 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out`}  >
                <div>
                    <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>LIGHT (Lux)</h2>
                    <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>{lig} (Lux)</h1>
                </div>
                <FaSun fontSize={28} />
            </div>
            {/* <div className={`${dobuiColor} h-[100px] rounded-[8px] border-l-[5px] border-amber-500 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out`}  >
                <div>
                    <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>Do Bui (%)</h2>
                    <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>{dobui} (Lux)</h1>
                </div>
                <FaSun fontSize={28} />
            </div> */}
        </div>
    )
}

export default SensorView;