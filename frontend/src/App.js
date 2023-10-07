import { Outlet } from 'react-router-dom';
import Dashboardview from './components/Dashboardview';
import Sidebar from './components/Sidebar';
import { createContext, useState, useEffect } from 'react';

// Initiate Context
export const dataSensorContext = createContext(); // ROOT context of datasensor
// export const dataJsonContext = createContext(); 

function App() {

  const [dataJson, setDataJson] = useState(
  [
    {
      device: 'NodeMCU',
      sensor: 'DHT11',
      dataSensor: 'null',
      time: '05-08-2002'
    },
    {
      device: 'NodeMCU',
      sensor: 'DHT11',
      dataSensor: 'null',
      time: '05-08-2002'
    },
    {
      device: 'NodeMCU',
      sensor: 'DHT11',
      dataSensor: 'null',
      time: '05-08-2002'
    },
    {
      device: 'NodeMCU',
      sensor: 'DHT11',
      dataSensor: 'null',
      time: '05-08-2002'
    },
    {
      device: 'NodeMCU',
      sensor: 'DHT11',
      dataSensor: 'null',
      time: '05-08-2002'
    }
  ])

  const [datas, setDatas] = useState(
  [
    {
        time: '12:10',
        Temperature: 0,
        Humidity: 0,
        Light: 0,
        amt: 2400,
    },
    {
        time: '12:10',
        Temperature: 0,
        Humidity: 0,
        Light: 0,
        amt: 2210,
    },
    {
        time: '12:10',
        Temperature: 0,
        Humidity: 0,
        Light: 0,
        amt: 2290,
    },
    {
        time: '12:10',
        Temperature: 0,
        Humidity: 0,
        Light: 0,
        amt: 2000,
    },
    {
        time: '12:10',
        Temperature: 0,
        Humidity: 0,
        Light: 0,
        amt: 2181,
    },
    {
        time: '12:10',
        Temperature: 0,
        Humidity: 0,
        Light: 0,
        amt: 2500,
    },
    {
        time: '12:10',
        Temperature: 0,
        Humidity: 0,
        Light: 0,
        amt: 2100,
    },
    {
        time: '12:10',
        Temperature: 0,
        Humidity: 0,
        Light: 0,
        amt: 2100,
    },
    {
        time: '12:10',
        Temperature: 0,
        Humidity: 0,
        Light: 0,
        amt: 2100,
    },
    {
        time: '12:10',
        Temperature: 0,
        Humidity: 0,
        Light: 0,
        amt: 2100,
    },
  ])  

const getData = async () => {
    const response = await fetch('http://localhost:4000/v1/api/datasensor')
    if (response.ok) {
        const data = await response.json();
        const newData = {
            time: "12:10",
            Temperature: data[0].temperature.toFixed(),
            Humidity: data[0].humidity,
            Light: ((data[0].light)/15).toFixed(),
            amt: 2100
        }
        setDatas((prevState)=> [...prevState, newData].slice(1))
        // setDataJson((prevState)=> [...prevState, {
        //     device: 'NodeMCU',
        //     sensor: 'DHT11',
        //     dataSensor: `temperature: ${data[0].temperature.toFixed()}, humidity: ${data[0].humidity}, light: ${data[0].light.toFixed()}`,
        //     time: 'null'
        // }].slice(1))
    }
} 

useEffect(() => {
    let mounted = true  // fix useState duplicate (react 18 strict mode)    
    let interval = setInterval(() => {
        if (mounted) {
            getData()
        }
    }, 2000);

    return () => {
        clearInterval(interval);
        mounted = false
    };
})

  return (
    // mutil data context provider
    <dataSensorContext.Provider value={datas}>
      {/* <dataJsonContext.Provider value={dataJson}> */}
        <div className="">
          <div className="flex overflow-scroll ">
            <div className="basis-[12%] h-[100vh]">
              <Sidebar />
            </div>
            <div className="basis-[88%] border overflow-scroll h-[100vh]">
              <Dashboardview />
              <div>
                <Outlet></Outlet>
              </div>
            </div>
          </div>
        </div>
      {/* </dataJsonContext.Provider> */}
    </dataSensorContext.Provider>
  );
}

export default App;
