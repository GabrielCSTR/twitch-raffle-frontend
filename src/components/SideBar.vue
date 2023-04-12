<template>
    <!-- Sidebar starts -->
        <!-- Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] -->
        <div class="w-64 min-h-screen absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex">
            <div class="px-8">
                <div class="h-16 w-full flex items-center">
                    <svg viewBox="0 0 45 40" aria-hidden="true" class="h-10 w-auto">

                        <svg viewBox="37.4 13.88 425.53 461.48" xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true" width="40" height="40">

                            <path
                                d="m108.27 227.25-4.301-5.155 27.688-13.349 1.536-10.959 14.339-11.915 19.494-16.216 22.43-7.989 14.715-16.115 16.626-13.826 9.252 2.97L248.69 93.01l20.621-17.172 13.314-15.466 14.749-7.92 35.813-38.579-33.696 27.073-19.494 10.379-9.082 12.393-10.993 4.302-25.776 21.474s-16.251 27.107-17.002 29.668c-.751 2.56-8.228 2.97-8.228 2.97l-25.025 21.782 2.185-8.433s-24.649 25.161-28.848 24.786c-4.2-.376-17.958 22.703-17.958 22.703l-38.681 29.293-8.228 14.612-8.023.853-46.909 49.709 25.196-20.997 45.645-29.19z"
                                fill="#de3a3a" data-layer-id="6562545520390"></path>

                            <path
                                d="m220.76 239.85 9.252 2.97 18.641-41.685 20.621-17.173 13.314-15.465 14.749-7.921 35.813-38.544-33.696 27.073-19.494 10.379-9.082 12.393-10.993 4.301-25.776 21.475s-16.251 27.107-17.002 29.668c-.751 2.56-8.228 2.97-8.228 2.97l-25.025 21.781 2.185-8.432s-24.649 25.161-28.848 24.786c-4.2-.376-17.958 22.703-17.958 22.703l-38.681 29.293-8.228 14.612-8.023.853-46.909 49.709 25.196-20.997 45.543-29.19-4.302-5.155 27.688-13.349 1.536-10.959 14.339-11.915 19.494-16.217 22.431-7.988 14.714-16.115 16.729-13.861z"
                                fill="#de3a3a" data-layer-id="1773385220416"></path>

                            <path
                                d="m252.92 315.64-3.755-4.541 24.308-11.71 1.331-9.627 12.564-10.482 17.104-14.236 19.699-7.033 12.905-14.168 14.578-12.154 8.126 2.594 16.353-36.598 18.094-15.056 11.711-13.554 12.939-6.93 31.443-33.833-29.6 23.761-17.104 9.116-7.955 10.891-9.627 3.755-22.635 18.845s-14.271 23.796-14.92 26.05c-.683 2.253-7.203 2.594-7.203 2.594l-21.953 19.119 1.912-7.409s-21.611 22.089-25.298 21.748c-3.687-.342-15.773 19.938-15.773 19.938l-33.935 25.708-7.204 12.802-7.033.751-41.173 43.632 22.123-18.402 39.978-25.571z"
                                fill="#de3a3a" data-layer-id="463586520438"></path>

                            <path
                                d="m433.36 267.78-17.104 9.116-7.955 10.89-9.627 3.756-22.635 18.845s-14.271 23.796-14.92 26.049c-.683 2.254-7.203 2.595-7.203 2.595l-21.953 19.119 1.912-7.409s-21.611 22.089-25.298 21.748c-3.687-.342-15.773 19.938-15.773 19.938l-33.935 25.707-7.204 12.803-7.033.751-41.207 43.666 22.123-18.402 39.978-25.605-3.755-4.541 24.308-11.71 1.331-9.628 12.564-10.481 17.104-14.236 19.699-7.033 12.905-14.169 14.578-12.154 8.126 2.595 16.353-36.598 18.094-15.056 11.71-13.554 12.94-6.931 31.443-33.833-29.566 23.762z"
                                fill="#de3a3a" data-layer-id="7536383420460"></path>

                        </svg>
                        </svg>

                        <span class="font-medium text-gray-200">Stream Raffle</span>
                </div>
                <ul class="mt-12">
                    <li class="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                                <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                                <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                                <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                            </svg>
                            <router-link class="text-sm ml-2" to="/">Sorteio Subs</router-link>
                        </div>
                        <div class="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">5</div>
                    </li>
                    <li class="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                            </svg>
                            <router-link class="text-sm ml-2" to="/classifier-subs">Sorteio views</router-link>
                        </div>
                        <div class="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">8</div>
                    </li>
                    <li class="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                                <circle cx="12" cy="12" r="9"></circle>
                            </svg>
                            <router-link class="text-sm ml-2" to="/classifier-subs">Sorteio número</router-link>
                        </div>
                    </li>
                </ul>
                <div class="flex justify-center mt-48 mb-4 w-full">
                    <div class="relative">
                    </div>
                </div>
            </div>
            <div class="px-8 border-t border-gray-700">
                <ul class="w-full flex items-center justify-between bg-gray-800">
                    <li class="cursor-pointer text-white pt-5 pb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                        </svg>
                    </li>
                    <li class="cursor-pointer text-white pt-5 pb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-messages" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
                            <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
                        </svg>
                    </li>
                    <li class="cursor-pointer text-white pt-5 pb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </li>
                    <li class="cursor-pointer text-white pt-5 pb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-archive" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <rect x="3" y="4" width="18" height="4" rx="2"></rect>
                            <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"></path>
                            <line x1="10" y1="12" x2="14" y2="12"></line>
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Sidebar ends -->
</template>