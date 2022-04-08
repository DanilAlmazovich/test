import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // auth

  {
    path: "/",
    name: "Index",
    component: () =>
      import(/* webpackChunkName: 'index' */ "../views/Index.vue"),
  },
  {
      path: "/search",
      name: "Search",
      component: () =>
          import(/* webpackChunkName: 'Search' */ "../views/Search.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
