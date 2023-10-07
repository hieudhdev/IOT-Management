import React from 'react';

const Profile = () => {
    return (
        <div class="bg-white overflow-hidden shadow rounded-lg border">
            <div class="ml-80  px-4 py-5 sm:px-6">
                <h3 class="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Hieu Dang's Proflie
                </h3>
                <p class="ml-3 mt-1 max-w-2xl text-sm text-gray-500">
                    This is some information about Hieu Dang.
                </p>
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl class="sm:divide-y sm:divide-gray-200">
                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="ml-72 text-sm font-medium text-gray-500">
                            Fullname
                        </dt>
                        <dd class="ml-52 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            Đặng Hữu Hiếu
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="ml-72 text-sm font-medium text-gray-500">
                            Identity
                        </dt>
                        <dd class="ml-52 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            B20DCCN243
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="ml-72 text-sm font-medium text-gray-500">
                            Email
                        </dt>
                        <dd class="ml-52 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            danghieuyt2@gmail.com
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="ml-72 text-sm font-medium text-gray-500">
                            PhoneNumber
                        </dt>
                        <dd class="ml-52 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            (+84) 385832714
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="ml-72 text-sm font-medium text-gray-500">
                            Address
                        </dt>
                        <dd class="ml-52 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            Long Nam, Yên Thành, Nghệ An
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="ml-72 text-sm font-medium text-gray-500">
                            Academy
                        </dt>
                        <dd class="ml-52 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            Post and Telecommunications Institute of Technology
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export default Profile;