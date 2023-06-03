<template>
  <Loading :isLoading="useApp.loading"></Loading>
  <div class="relative">
    <div class="absolute pt-5 w-full h-full flex items-center justify-center z-10">
      <div v-if="this.useRoulleteStore.winner != null && !useApp.isRunning"
        class="text-3xl font-bold text-white bg-green-500 p-2 rounded-lg explosion">
        Winner {{ useApp.resultado?.from_name }} !!
      </div>
    </div>
  </div>
  <div class="block max-w-full overflow-hidden relative contain-p p-8 mt-8 space-y-8 bg-gray-100 dark:bg-gray-800 rounded-xl">
    <div class="flex
            max-w-full
            relative
            items-center
            flex-wrap
            overflow-hidden
            h-full">
      <div class="flex relative left-1/2">
        <div class="flex justify-center my-0.5 transition transform duration-1000 ease-in-out"
          :style="{ transform: 'translateX(-' + useApp.posicaoAtual + '%)' }">
          <div v-for="(item, index) in useRoulleteStore.users" :key="index" class="reel-item flex 
                  flex-col items-center p-2 w-32 text-center my-0.5 rounded-md
                  bg-gray-800
                  border-box
                  m-1
                " :class="{
                  'animate-pulse opacity-100': item.value == this.useRoulleteStore.winner,
                  'opacity-10': this.useRoulleteStore.winner != null && item.value !== this.useRoulleteStore.winner
                }">
            <span v-if="item.value == this.useRoulleteStore.winner" class="relative flex start-8 h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <img :src="item.img" class="w-20 h-20 object-cover rounded-md" />
            <p class="text-center text-red-600">{{ item.from_name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="indicator bg-yellow-500 dark:text-yellow-500" :class="{ 'opacity-5': useRoulleteStore.winner != null }">
    </div>
  </div>
  <button @click="startRoulette()"
    class="m-5 bg-blue-500 hover:-translate-y-1 hover:scale-80 z-20 rounded px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#386bc0] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#386bc0] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#3566b6] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
    {{ useApp.isRunning ? 'Loading...' : ' Run random winner' }}
  </button>
</template>

<script>
import RouletteItem from "./RouletteItem.vue";
import useHttp from '../composables/useHttp';
import { useAppStore, useRouletteStore } from '../store/user';
import { reactive } from 'vue';
import Loading from "./Loading.vue";

const users = [
  {
    value: 0,
    color: "black",
    selected: false,
    currentMiddle: false,
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/4c5fd718-dc01-4ead-9c86-66b81c019886-profile_image-70x70.png",
    title: "teste"
  },
  {
    value: 1,
    color: "black",
    selected: false,
    currentMiddle: false,
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/ecea05dd-ffb8-424b-abd5-a02fca4c47d3-profile_image-70x70.png",
    title: "teste"
  },
  {
    value: 2,
    color: "black",
    selected: false,
    currentMiddle: false,
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/d0bbc724-6aa9-470a-bac3-3194e61ac3f4-profile_image-70x70.png",
    title: "teste"
  },
  {
    value: 3,
    color: "black",
    selected: false,
    currentMiddle: false,
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/568c37b5-ec1a-44b3-ab22-5e4ad1868f4f-profile_image-70x70.png",
    title: "teste"
  },
  {
    value: 4,
    color: "black",
    selected: false,
    currentMiddle: false,
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/a2330079-05bf-48ba-bc3e-009f17285e4d-profile_image-70x70.png",
    title: "teste"
  },
  {
    value: 5,
    color: "black",
    selected: false,
    currentMiddle: false,
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/4c5fd718-dc01-4ead-9c86-66b81c019886-profile_image-70x70.png",
    title: "teste"
  },
  {
    value: 6,
    color: "black",
    selected: false,
    currentMiddle: false,
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/ecea05dd-ffb8-424b-abd5-a02fca4c47d3-profile_image-70x70.png",
    title: "teste"
  },
  {
    value: 7,
    color: "black",
    selected: false,
    currentMiddle: false,
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/d0bbc724-6aa9-470a-bac3-3194e61ac3f4-profile_image-70x70.png",
    title: "teste"
  },
  {
    value: 8,
    color: "black",
    selected: false,
    currentMiddle: false,
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/568c37b5-ec1a-44b3-ab22-5e4ad1868f4f-profile_image-70x70.png",
    title: "teste"
  },
  {
    value: 9,
    color: "black",
    selected: false,
    currentMiddle: false,
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/a2330079-05bf-48ba-bc3e-009f17285e4d-profile_image-70x70.png",
    title: "teste"
  },
  {
    value: 10,
    color: "black",
    selected: false,
    currentMiddle: false,
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/4c5fd718-dc01-4ead-9c86-66b81c019886-profile_image-70x70.png",
    title: "teste"
  },
  {
    value: 11,
    color: "black",
    selected: false,
    currentMiddle: false,
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/ecea05dd-ffb8-424b-abd5-a02fca4c47d3-profile_image-70x70.png",
    title: "teste"
  },
  {
    value: 12,
    color: "black",
    selected: false,
    currentMiddle: false,
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/d0bbc724-6aa9-470a-bac3-3194e61ac3f4-profile_image-70x70.png",
    title: "teste"
  }
];

const numbers = [
  {
    value: 0,
    color: "green",
    selected: false,
    currentMiddle: false
  },
  {
    value: 1,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 2,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 3,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 4,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 5,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 6,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 7,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 8,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 9,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 10,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 11,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 12,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 0,
    color: "green",
    selected: false,
    currentMiddle: false
  },
  {
    value: 1,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 2,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 3,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 4,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 5,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 6,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 7,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 8,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 9,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 10,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 11,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 12,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 0,
    color: "green",
    selected: false,
    currentMiddle: false
  },
  {
    value: 1,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 2,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 3,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 4,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 5,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 6,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 7,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 8,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 9,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 10,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 11,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 12,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 0,
    color: "green",
    selected: false,
    currentMiddle: false
  },
  {
    value: 1,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 2,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 3,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 4,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 5,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 6,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 7,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 8,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 9,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 10,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 11,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 12,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 0,
    color: "green",
    selected: false,
    currentMiddle: false
  },
  {
    value: 1,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 2,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 3,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 4,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 5,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 6,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 7,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 8,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 9,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 10,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 11,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 12,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 0,
    color: "green",
    selected: false,
    currentMiddle: false
  },
  {
    value: 1,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 2,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 3,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 4,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 5,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 6,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 7,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 8,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 9,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 10,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 11,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 12,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 0,
    color: "green",
    selected: false,
    currentMiddle: false
  },
  {
    value: 1,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 2,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 3,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 4,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 5,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 6,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 7,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 8,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 9,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 10,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 11,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 12,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 0,
    color: "green",
    selected: false,
    currentMiddle: false
  },
  {
    value: 1,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 2,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 3,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 4,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 5,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 6,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 7,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 8,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 9,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 10,
    color: "black",
    selected: false,
    currentMiddle: false
  },
  {
    value: 11,
    color: "red",
    selected: false,
    currentMiddle: false
  },
  {
    value: 12,
    color: "black",
    selected: false,
    currentMiddle: false
  }
];
export default {
  props: {
  },
  components: {
    RouletteItem,
    Loading
  },
  setup() {
    const useRoulleteStore = useRouletteStore();
    const useApp = useAppStore();
    return {
      useRoulleteStore,
      useApp
    };
  },
  async mounted() {
    const useRequestHttp = useHttp();
    await useRequestHttp.getTwitchSubs();

  },
  unmounted(){
    this.useApp.CLEAR_DATA();
    this.useRoulleteStore.CLEAR_DATA();
  },
  methods: {
    async startRoulette() {
      const useRequestHttp = useHttp();
      await useRequestHttp.getRouletteWinner(this.useRoulleteStore.users.length);

      const resultWinner = this.useRoulleteStore.GET_WINNER();
      const resultViews = this.useRoulleteStore.GET_USERS();
      console.log(resultWinner);

      this.useRoulleteStore.winner = resultWinner;
      this.useRoulleteStore.users = resultViews;

      const indexGanhador = this.useRoulleteStore.winner;
      const itemGanhador = this.useRoulleteStore.users[indexGanhador];
      const larguraItem = 100 / this.useRoulleteStore.users.length;
      const posicaoFinal = (indexGanhador * larguraItem) + 0.4;

      this.useApp.isRunning = true;
      const updateAnimation = (timestamp) => {
        const delta = timestamp - lastTimestamp;
        lastTimestamp = timestamp;
        this.useApp.posicaoAtual += delta * velocidade;
        if (this.useApp.posicaoAtual >= posicaoFinal) {
          this.useApp.posicaoAtual = posicaoFinal;
          this.useApp.isRunning = false;
          this.useApp.resultado = itemGanhador;
          // this.useRoulleteStore.winner = null;
          this.useRoulleteStore.lastNumber = resultWinner;
          console.log("RESULTADO", this.useApp.resultado);
        } else {
          requestAnimationFrame(updateAnimation);
        }
      }
      let lastTimestamp = performance.now();
      const velocidade = 0.3;
      await new Promise(resolve => setTimeout(resolve, 1000 / 60));
      requestAnimationFrame(updateAnimation);
    },
    async sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  }
};
</script>

<style scoped>
.explosion {
  animation-name: explosion;
  animation-duration: 5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

button[disabled] {
  opacity: 0.5;
  pointer-events: none;
}

.wheel-item {
  position: relative;
  overflow: hidden;
  line-height: 70px;
  height: 70px;
  min-width: 70px;
  margin: 0 0.1rem;
  border-radius: 0.625rem;
  text-shadow: 1px 2px rgb(0 0 0 / 35%);
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  transition: text-shadow 0.5s;
}

.reel-item {
  display: flex;
  height: auto;
  pointer-events: none;
  justify-content: center;
  transition: opacity 0.5s, transform 0.5s;
}

.contain-p {
  contain: layout;
}

.indicator {
  position: absolute;
  left: calc(50% - 0.1875rem);
  top: 0;
  width: 0.1875rem;
  height: 100%;
  z-index: 2;
  transition: opacity 0.5s;
}

@keyframes explosion {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(3);
    opacity: 0;
  }
}

</style>
