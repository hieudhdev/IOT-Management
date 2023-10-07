import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from '../App'
import Main from '../components/Main'
import Profile from '../components/Profile'
import DataSensor from '../components/DataSensor'
import DeviceHistory from '../components/DeviceHistory'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Main />} />
                    </Route>
                    <Route path="/profile" element={<App />}>
                        <Route index element={<Profile />} />
                    </Route>
                    <Route path="/datasensor" element={<App />}>
                        <Route index element={<DataSensor />} />
                    </Route>
                    <Route path="/devicehistory" element={<App />}>
                        <Route index element={<DeviceHistory />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router