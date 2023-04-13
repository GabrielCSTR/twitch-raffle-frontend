<script lang="ts">
import { defineComponent } from 'vue'

const API_MAIN = import.meta.env.NODE_ENV === 'development' ? 'http://localhost:3005/api/v1' : `${import.meta.env.VITE_API_URL}/api/v1`;
export default defineComponent({
    setup() {
        
    },
    methods: {
        loginWithTwitch() {
            window.location.href = `${API_MAIN}/auth/twitch`;
        },
    }
})
</script>

<template>
    <div class="flex bg-purple-700 flex-col items-center justify-center h-screen">
        <span class="text-5xl">🎲</span>
        <span class="font-medium text-gray-200">Stream Raffle</span>
        <p class="p-2 focus:outline-none text-xs md:text-sm font-medium leading-none text-white-500">Surpreenda seus espectadores com sorteios inovadores !</p>
        <button @click="loginWithTwitch" class="flex bg-white hover:bg-purple-300 text-white font-bold px-8 rounded items-center">
            <svg width="20" height="40" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="pl-2"><path d="M3.54167 0L0 3.57143V16.4286H4.25V20L7.79167 16.4286H10.625L17 10V0H3.54167ZM15.5833 9.28571L12.75 12.1429H9.91667L7.4375 14.6429V12.1429H4.25V1.42857H15.5833V9.28571Z" fill="#9146ff"></path><path d="M13.4584 3.92847H12.0417V8.21418H13.4584V3.92847Z" fill="#9146ff"></path><path d="M9.56242 3.92847H8.14575V8.21418H9.56242V3.92847Z" fill="#9146ff"></path></svg>
            <span class="text-black pl-2">Login whit Twitch</span>
        </button>
    </div>
</template>