import { defineStore } from "pinia";


export const useUserStore = defineStore("user", {
  state: () => ({ 
    user: null as any
  }),
  actions: {
    UPDATE_USER(user: any) {
      this.user = user
    },
  },
});