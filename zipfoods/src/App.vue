<template>
  <div id="app">
    <img
      alt="Zipfoods logo"
      id="logo"
      src="@/assets/images/zipfoods-logo.png"
    />

    <!-- Added to the App.vue template -->
    <!-- <nav>
      <ul>
        <li>
          <a href="#" @click="page = 'home'">Home</a>
        </li>
        <li>
          <a href="#" @click="page = 'products'">Products</a>
        </li>
        <li>
          <a href="#" @click="page = 'categories'">Categories</a>
        </li>
      </ul>
    </nav>
    
     <home-page v-if="page == 'home'"></home-page>
    <products-page v-if="page == 'products'"></products-page>
    <categories-page v-else-if="page == 'categories'"></categories-page>
    
    -->

    <!-- <nav>
      <ul>
        <li v-for="link in links" :key="link">
          <a href="#" @click="page = link">{{ link }}</a>
        </li>
      </ul>
    </nav>
    
        <component v-bind:is="linkComponents[page]"></component> -->

    <nav>
      <ul>
        <li>
          <router-link
            v-for="link in links"
            v-bind:key="link"
            v-bind:to="paths[link]"
            exact
            >{{ link }}</router-link
          >
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      /* Store links in an array to maintain order */
      links: ["home", "products", "categories"],

      /* Map links to the appropriate component */
      paths: {
        home: "/",
        products: "/products",
        categories: "/categories",
      },
    };
  },
};
</script>

<style lang='scss'>
@import "@/assets/scss/styles/zipfoods.scss";
</style>
