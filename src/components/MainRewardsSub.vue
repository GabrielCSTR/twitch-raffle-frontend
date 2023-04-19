<script lang="ts">
import { defineComponent } from 'vue'
import { useRouletteStore } from '../store/user';
import Roleta from './Roleta.vue';
export default defineComponent({
    components: {
        Roleta
    },
    setup(){
        const useRoulleteStore = useRouletteStore();
        return {
            useRoulleteStore
        }
    }
})
</script>

<template>
    <div class="flex flex-col shadow-lg p-5 min-h-96">
        <h1 class="glow-title uppercase text-3xl font-semibold text-center text-gray-800 lg:text-4xl dark:text-white">Roleta de SUBS</h1>
        <p class="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
            Sorteio de subs que permite que o organizador escolha um ganhador aleatorio entre os subs! 
        </p>
        <div class="grid grid-cols-1 gap-8 mt-6 lg:grid-cols-3 xl:mt-12">
                    <div class="flex items-center justify-between px-8 py-4 border border-purple-700 cursor-pointer rounded-xl ">
                        <div class="flex flex-col items-center space-y-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <h2 class="text-lg font-medium text-gray-700 sm:text-xl dark:text-gray-200">Subs:</h2>
                        </div>
                        
                        <h2 class="text-2xl font-semibold text-gray-500 sm:text-3xl dark:text-gray-300">{{ useRoulleteStore.users?.length }}</h2>
                    </div>

                    <div v-if="useRoulleteStore.winner" class="flex items-center justify-between px-8 py-4 border border-green-500 cursor-pointer rounded-xl">
                        <div class="flex flex-col items-center space-y-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-600 dark:text-green-500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <h2 class="text-lg font-medium text-gray-700 sm:text-xl dark:text-gray-200">Ganhador</h2>
                        </div>
                        
                        
                        <div  class="flex flex-col items-center space-y-1">
                            <div class="px-2 text-xs text-green-500 bg-gray-100 rounded-full dark:text-green-400 sm:px-4 sm:py-1 dark:bg-gray-700 ">
                                {{ new Date().toLocaleDateString() }}
                            </div>

                            <h2 class="text-2xl font-semibold text-green-600 dark:text-green-500 sm:text-3xl">{{ useRoulleteStore.users[useRoulleteStore.winner].from_name }}</h2>
                        </div>
                    </div>
                  
                </div>
        <Roleta />
    </div>
</template>
<style>
.glow-title.h1,
h1.glow-title {
    position: relative;
    line-height: 30px;
    margin-top: 0;
    margin-bottom: 20px;
    background: linear-gradient(#d2b8ff 0, #d2b8ff 30%, #a16ff7 75%, #a16ff7 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: #0000;
}
</style>