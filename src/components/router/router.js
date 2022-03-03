import Vue from 'vue';
import Router from 'vue-router';
import Blog from '../components/blog.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "blog",
      name: "Blog",
      component: Blog,
      meta: {
        title: "Blog",
      },
    },
  ],
});
