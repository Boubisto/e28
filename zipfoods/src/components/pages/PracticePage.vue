<template>
  <div>
    <!-- In the template, we can access a reactive reference's value directly; no need to use the value property -->
    {{ playerName }}
  </div>
</template>

<script>
// We have to import the composition-api methods we’ll use
import { ref } from "@vue/composition-api";

export default {
  // We may still have options such as `data`, `computed`, `mounted,` etc...
  data() {
    return {};
  },
  // NEW: The setup method is where we write all of our “Composition API” code
  setup() {
    // The _ref_ method is used to define a _reactive reference_ to some value
    const playerName = ref("Bob");

    // In setup, we can access (or update) our reference via its `value` property
    console.log(playerName.value);

    // Any variables or functions we wish to use in the component needs to be explicitly returned via an object
    return { playerName };
  },
};
</script>