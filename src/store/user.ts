import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
  state: () => ({ 
    loading: false,
    isRunning: false,
    posicaoAtual: 0,
    resultado: null
  }),
  actions: {
    SET_LOADING(active: boolean) {
      this.loading = active;
    },
    GET_LOADING() {
      return this.loading;
    },
    CLEAR_DATA(){
      this.isRunning = false;
      this.posicaoAtual= 0;
      this.resultado= null;
    }
  },
});

export const useUserStore = defineStore("user", {
  state: () => ({ 
    user: null as any,
  }),
  actions: {
    GET_USER(user: any) {
      return this.user;
    },
    UPDATE_USER(user: any) {
      this.user = user;
    }
  },
});

export const useRouletteStore = defineStore("roulette", {
  state: () => ({ 
    users: null as any,
    winner: null,
    lastNumber: 0
  }),
  actions: {
    SET_USERS(data: any){
      this.users = data;
    },
    GET_USERS(){
      return this.users;
    },
    SET_WINNER(winner: any){
      this.winner = winner
    },
    GET_WINNER(){
      return this.winner
    },
    CLEAR_DATA(){
      this.users = null;
      this.winner = null;
      this.lastNumber = 0;
    }
  },
});