import { useEffect, useState, createContext, useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Sector, ZAxis } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, } from 'recharts';
import { dataSensorContext } from '../App';

const ChartComponent = () => {

    const datas = useContext(dataSensorContext)
    // console.log(datas)

    return (
        <div className="w-full">
            {/* <canvas id="myAreaChart"></canvas> */}
            {/* <Line options={options} data={data} /> */}
            <LineChart
                width={706}
                height={300}
                data={datas}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis 
                    // dataKey="Temperature"
                    orientation="left"
                    type="number"
                    domain={[0, 100]}
                    // yAxisId="left-axis"
                />
                {/* <YAxis
                    // dataKey="Light"
                    orientation="right"
                    type="number"
                    domain={[0, 1000]}
                    // allowDataOverflow
                    yAxisId="right-axis"
                /> */}
                <Tooltip />
                <Legend />
                <Line isAnimationActive={false} type="monotone" dataKey="Temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line isAnimationActive={false} type="monotone" dataKey="Humidity" stroke="#82ca9d" activeDot={{ r: 8 }} />
                <Line isAnimationActive={false} type="monotone" dataKey="Light" stroke="rgb(245 158 11)" activeDot={{ r: 8 }} />
            </LineChart>

            {/* live code */}
            {/* <LineChart
                width={706}
                height={300}
                data={datas}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis 
                    // dataKey="Temperature"
                    orientation="left"
                    type="number"
                    domain={[0, 100]}
                    // yAxisId="left-axis"
                />
                <Tooltip />
                <Legend />
                <Line isAnimationActive={false} type="monotone" dataKey="DoBui" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart> */}

        </div>
    )
}

export default ChartComponent