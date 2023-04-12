import { createRouter, createWebHashHistory } from "vue-router";
import routes from "~pages";

const router = createRouter({ routes, history: createWebHashHistory() });

router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
