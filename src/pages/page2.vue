<template>
  <div>
    <div>
      <img :src="imgsrc" alt="" class="w3-block">
    </div>
    <!--  -->
    <div class="w3-padding-24">
      <ul class="w3-ul w3-row">
        <router-link :to="{name: 'page3'}">
          <li class="w3-third" v-for="item in 12" :key="item">
            <img :src="imgp" alt="" class="w3-block">
            <p class="w3-center">产品名称</p>
            <p class="w3-text-gray">产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介</p>
          </li>
        </router-link>
      </ul>
            <yo-bar :propbars="10"></yo-bar>
      
    </div>
  </div>
</template>

<script>
import yoBar from '../components/yo-bar.vue'

    export default {
        name: "page2",
        data() {
            return {
                imgsrc: Mock.Random.image("1800x500", "#eeeeee"),
                imgp: Mock.Random.image("400x300", "#eeeeee")
            };
        },
        components: {yoBar}
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>