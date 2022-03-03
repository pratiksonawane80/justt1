import Vue from 'vue';
import Router from 'vue-router';
import Blog from '../components/JusttBlog.vue';
import Faq from '../components/JusttFaq.vue';
import Offers from '../components/JusttOffers.vue';


Vue.use(Router);



export default new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/blog",
      name: "Blog",
      component: Blog,
      meta: {
        title: "Blog",
      }},
      {
        path: "/faq",
        name: "Faq",
        component: Faq,
        meta: {
          title: "FAQ",
        }},
        { 
          path: "/offers",
          name: "Offers",
          component: Offers,
          meta: {
            title: "offers",
          },
    },
  ],

});
