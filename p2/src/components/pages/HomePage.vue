<template>
  <div>
    <p>
      Marmite Guinneene iss he place to come look at modern and easy to make
      recipes
    </p>

    <show-overview :allergen="'Milk'"></show-overview>
  </div>
</template>

<script>
import ShowOverview from "@/components/ShowOverview.vue";
export default {
  name: "",
  components: {
    "show-overview": ShowOverview,
  },
  data: function () {
    return {};
  },
};
</script>

<style scoped>
</style>