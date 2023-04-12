import useHttp from "@/composables/useHttp";
import useLocalStorage from "@/composables/useLocalStorage";
import { useUserStore } from "@/store/user";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "~pages";

const router = createRouter({ routes, history: createWebHashHistory() });

router.beforeEach(async (to, from, next) => {
  let nextDate: any = undefined;

  const { getCookieItem } = useLocalStorage();
  const tokenCookie = getCookieItem<any>("stream_raffle_user");

  const hasToken = !!tokenCookie;
  console.log(hasToken);
  
  if (!hasToken && (to.path === "/dashboard" || to.path === "/")) {
    nextDate = "/login";
  }

  if (hasToken) {
    const userStore = useUserStore();

    if (!userStore.user) {
      const { setUserToken } = useHttp();
      setUserToken();
    }
    if (to.path === "/") {
      nextDate = "/dashboard";
    }
  }

  next(nextDate);
});

export default router;
