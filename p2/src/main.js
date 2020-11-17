import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import RecipesPage from '@/components/pages/RecipesPage.vue';
import RecipePage from '@/components/pages/RecipePage.vue';
import AllergensPage from '@/components/pages/AllergensPage.vue';
import RecipeCreatePage from '@/components/pages/RecipeCreatePage';


Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
      { path: '/', component: RecipesPage },
      { path: '/recipes', component: RecipesPage },
      { path: '/allergens', component: AllergensPage },
      { path: '/recipes/new', component: RecipeCreatePage},
      { path: '/recipes/:id', component: RecipePage, props: true },
  ],
  mode: 'history',
})

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')