import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { FaSun, FaHandHoldingWater, FaTemperatureHigh, FaLightbulb, FaFan, FaEllipsisV } from "react-icons/fa"
import { BsLightbulbFill, BsLightbulbOffFill, BsLightbulbOff, BsLightbulb } from "react-icons/bs"
import { Switch } from 'antd';
import { handleLed, handleFan, handleLedPlus } from '../redux/ledReducer';
import { dataSensorContext } from '../App';

const SwitchComponent = () => {

    const stateLed = useSelector(state => state.ledState)
    const stateFan = useSelector(state => state.fanState)
    const stateLedPlus = useSelector(state => state.ledPlusState)
    const dispatch = useDispatch()

    const [totalLedOn, setTotalLedOn] = useState(0)
    const [totalFanOn, setTotalFanOn] = useState(0)
    
    const getTotalOnLed = async () => {
        const res = await fetch(`http://localhost:4000/v1/api/devicecontrol/led/totalOnLed`)
            .then((res) => res.json())
            .then((data) => {
                setTotalLedOn(data);
            });
    };

    const getTotalOnFan = async () => {
        const res = await fetch(`http://localhost:4000/v1/api/devicecontrol/fan/totalOnFan`)
            .then((res) => res.json())
            .then((data) => {
                setTotalFanOn(data);
            });
    };

    const ledSwitch = async () => {
        getTotalOnLed()
        dispatch(handleLed(!stateLed)) 
        if (stateLed == false) {
            const res = fetch('http://localhost:4000/v1/api/devicecontrol/led/1')
            .then(() => { console.log('Turn on led success') })
            .catch(() => { console.log ('Turn on led fail') })
        } else {
            const res = fetch('http://localhost:4000/v1/api/devicecontrol/led/0')
            .then(() => { console.log('Turn off led success') })
            .catch(() => { console.log ('Turn off led fail') })
        }
    }
    
    const fanSwitch = () => {
        dispatch(handleFan(!stateFan))
        if (stateFan == false) {
            getTotalOnFan()
            const res = fetch('http://localhost:4000/v1/api/devicecontrol/fan/1')
            .then(() => { console.log('Turn on fan success') })
            .catch(() => { console.log ('Turn on fan fail') })
        } else {
            getTotalOnFan()
            const res = fetch('http://localhost:4000/v1/api/devicecontrol/fan/0')
            .then(() => { console.log('Turn off fan success') })
            .catch(() => { console.log ('Turn off fan fail') })
        }
    }
    
    useEffect(() => {
        getTotalOnLed()
        getTotalOnFan()
    }, [totalLedOn, totalFanOn, stateLed, stateFan])

    // const ledPlusSwitch = () => {
    //     dispatch(handleLedPlus(!stateLedPlus))
    //     if (stateLedPlus == false) {
    //         const res = fetch('http://localhost:4000/v1/api/devicecontrol/ledplus/1')
    //         .then(() => { console.log('Turn on led plus success') })
    //         .catch(() => { console.log ('Turn on led plus fail') })
    //     } else {
    //         const res = fetch('http://localhost:4000/v1/api/devicecontrol/ledplus/0')
    //         .then(() => { console.log('Turn off led plus success') })
    //         .catch(() => { console.log ('Turn off led plus fail') })
    //     }
    // }

    return (
        <div className='basis-[40%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
            Số lần bật đèn: {totalLedOn}
            <div className='flex justify-center items-center h-3/6'>
                <h2 className='text-[#B589DF] text-[23px] leading-[17px] font-bold'>LED</h2>
                    {
                        stateLed && 
                        <div>
                            <BsLightbulb fontSize={30} className='ml-2 mr-10'/>
                        </div>
                    }
                    {
                        !stateLed &&
                        <div>
                            <BsLightbulbOffFill fontSize={30} className='ml-2 mr-10'/>
                        </div>
                    }
                <Switch style={!stateLed ? {backgroundColor: 'rgba(0, 0, 0, 0.45'} : {backgroundColor: '#1677ff'}} checked={stateLed} onClick={ledSwitch} />
            </div>

            <hr class="h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-100" />
            Số lần bật quạt: {totalFanOn}

            <div className='flex justify-center items-center h-3/6'>
                <h2 className='text-[#1cc88a] text-[23px] leading-[17px] font-bold'>FAN</h2>
                    {
                        stateFan && 
                        <div>
                            <FaFan fontSize={30} className='ml-2 mr-10 animate-spin'/>
                        </div>
                    }
                    {
                        !stateFan &&
                        <div>
                            <FaFan fontSize={30} className='ml-2 mr-10'/>
                        </div>
                    }
                <Switch style={!stateFan ? {backgroundColor: 'rgba(0, 0, 0, 0.45'} : {backgroundColor: '#1677ff'}} checked={stateFan} onClick={fanSwitch} />
            </div>

            {/* Live code */}
            {/* <hr class="h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-100" />

            <div className='flex justify-center items-center h-2/6'>
                <h2 className='text-[#1cc88a] text-[23px] leading-[17px] font-bold'>LED PLUS</h2>
                    {
                        stateLedPlus && 
                        <div>
                            <BsLightbulb fontSize={30} className='ml-2 mr-10'/>
                        </div>
                    }
                    {
                        !stateLedPlus &&
                        <div>
                            <BsLightbulbOffFill fontSize={30} className='ml-2 mr-10'/>
                        </div>
                    }
                <Switch style={!stateLedPlus ? {backgroundColor: 'rgba(0, 0, 0, 0.45'} : {backgroundColor: '#1677ff'}} checked={stateLedPlus} onClick={ledPlusSwitch} />
            </div> */}

        </div>
    )
}

export default SwitchComponent;