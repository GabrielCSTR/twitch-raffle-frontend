import { defineStore } from "pinia";


export const useUserStore = defineStore("user", {
  state: () => ({ 
    user: null as any
  }),
  actions: {
    GET_USER(user: any) {
      return this.user;
    },
    UPDATE_USER(user: any) {
      this.user = user;
    },
  },
});