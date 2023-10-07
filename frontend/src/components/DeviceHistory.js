import React from 'react';

const DeviceHistory = () => {
    return (
        <div class="flex flex-col">
            {/* <div class="ml-80 px-3 py-2 sm:px-6">
                <h3 class="ml-16 text-lg leading-6 font-medium text-gray-900">
                    DATA SENSOR
                </h3>
                <p class="ml-3 mt-1 max-w-2xl text-sm text-gray-500">
                    This is some information about Hieu Dang.
                </p>
            </div> */}
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full text-left text-sm font-light">
                        <thead class="border-b font-medium dark:border-neutral-500">
                            <tr>
                                <th scope="col" class="px-6 py-4">ID</th>
                                <th scope="col" class="px-6 py-4">Device ID</th>
                                <th scope="col" class="px-6 py-4">Name</th>
                                <th scope="col" class="px-6 py-4">Type</th>
                                <th scope="col" class="px-6 py-4">Action</th>
                                <th scope="col" class="px-6 py-4">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b dark:border-neutral-500">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                <td class="whitespace-nowrap px-6 py-4">050802</td>
                                <td class="whitespace-nowrap px-6 py-4">Led RGB 5V</td>
                                <td class="whitespace-nowrap px-6 py-4">LED</td>
                                <td class="whitespace-nowrap px-6 py-4">ON</td>
                                <td class="whitespace-nowrap px-6 py-4">12:10 9/9/2023</td>
                            </tr>
                            <tr class="border-b dark:border-neutral-500">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                <td class="whitespace-nowrap px-6 py-4">050802</td>
                                <td class="whitespace-nowrap px-6 py-4">Fan Moto 5V</td>
                                <td class="whitespace-nowrap px-6 py-4">FAN</td>
                                <td class="whitespace-nowrap px-6 py-4">OFF</td>
                                <td class="whitespace-nowrap px-6 py-4">12:10 9/9/2023</td>
                            </tr>
                            <tr class="border-b dark:border-neutral-500">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                <td class="whitespace-nowrap px-6 py-4">050802</td>
                                <td class="whitespace-nowrap px-6 py-4">Led RGB 5</td>
                                <td class="whitespace-nowrap px-6 py-4">LED</td>
                                <td class="whitespace-nowrap px-6 py-4">ON</td>
                                <td class="whitespace-nowrap px-6 py-4">12:10 9/9/2023</td>
                            </tr>
                            <tr class="border-b dark:border-neutral-500">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">4</td>
                                <td class="whitespace-nowrap px-6 py-4">050802</td>
                                <td class="whitespace-nowrap px-6 py-4">Fan Moto 5V</td>
                                <td class="whitespace-nowrap px-6 py-4">FAN</td>
                                <td class="whitespace-nowrap px-6 py-4">OFF</td>
                                <td class="whitespace-nowrap px-6 py-4">12:10 9/9/2023</td>
                            </tr>
                            <tr class="border-b dark:border-neutral-500">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">5</td>
                                <td class="whitespace-nowrap px-6 py-4">050802</td>
                                <td class="whitespace-nowrap px-6 py-4">Fan Moto 5V</td>
                                <td class="whitespace-nowrap px-6 py-4">FAN</td>
                                <td class="whitespace-nowrap px-6 py-4">ON</td>
                                <td class="whitespace-nowrap px-6 py-4">12:10 9/9/2023</td>
                            </tr>
                            <tr class="border-b dark:border-neutral-500">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">6</td>
                                <td class="whitespace-nowrap px-6 py-4">050802</td>
                                <td class="whitespace-nowrap px-6 py-4">Led RGB 5</td>
                                <td class="whitespace-nowrap px-6 py-4">LED</td>
                                <td class="whitespace-nowrap px-6 py-4">OFF</td>
                                <td class="whitespace-nowrap px-6 py-4">12:10 9/9/2023</td>
                            </tr>
                            <tr class="border-b dark:border-neutral-500">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">7</td>
                                <td class="whitespace-nowrap px-6 py-4">050802</td>
                                <td class="whitespace-nowrap px-6 py-4">Fan Moto 5V</td>
                                <td class="whitespace-nowrap px-6 py-4">FAN</td>
                                <td class="whitespace-nowrap px-6 py-4">ON</td>
                                <td class="whitespace-nowrap px-6 py-4">12:10 9/9/2023</td>
                            </tr>
                            <tr class="border-b dark:border-neutral-500">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">7</td>
                                <td class="whitespace-nowrap px-6 py-4">050802</td>
                                <td class="whitespace-nowrap px-6 py-4">Fan Moto 5V</td>
                                <td class="whitespace-nowrap px-6 py-4">FAN</td>
                                <td class="whitespace-nowrap px-6 py-4">ON</td>
                                <td class="whitespace-nowrap px-6 py-4">12:10 9/9/2023</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeviceHistory;