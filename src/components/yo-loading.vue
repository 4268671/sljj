<template>
  <div>
    <div class="w3-panel w3-center">
      <pulse-loader :loading="loading" :color="color"></pulse-loader>
      <span> Loading</span>
    </div>

  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
export default {
  props: {},
  data() {
    return {
      loading: true,
      color: "rgb(212, 69, 40)"
    };
  },
  components: {
    PulseLoader
  }
};
</script>

<style scoped>

</style>