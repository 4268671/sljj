<template>
    <div>
        <div>
            <img :src="`${URLPREFIX}/static/bigpic05.jpg`" alt="" class="w3-block wow fadeIn w3-border w3-border-red">
        </div>
        <!--  -->
        <div class="w3-padding-24" style="max-width:1500px;margin:auto">
            <div class=" wow fadeInUp">
                <h2 class="w3-center w3-panel">舒览产品中心
                    <p class="w3-medium">—— Product Center ——</p>
                </h2>
            </div>
            <ul class="w3-ul w3-row">
                <yo-loading></yo-loading>
                <li class="w3-third wow fadeInUp" v-for="item in 10" :key="item.id" data-wow-delay="0.2s">
                    <router-link :to="{name: 'productdetail', params: { id: item }}">
                        <img :src="`${URLPREFIX}/static/480x360.jpg`" alt="" class="w3-block w3-border">
                        <p class="w3-center">普罗旺斯</p>
                        <p class="w3-text-gray">普罗旺斯普罗旺斯普罗旺斯普罗旺斯普罗旺斯普罗旺斯普罗旺斯普罗旺斯普罗旺斯普罗旺斯普罗旺斯普罗旺斯</p>
                    </router-link>
                </li>
            </ul>
            <yo-bar :propbars="10"></yo-bar>
        </div>
    </div>
</template>

<script>
import yoBar from "../components/yo-bar.vue";
import yoLoading from "../components/yo-loading";
import { URL_PREFIX } from "../utils/consts";

export default {
  name: "productlist",
  data() {
    return {
      imgsrc: Mock.Random.image("1920x500", "#eeeeee"),
      imgp: Mock.Random.image("400x300", "#eeeeee"),
      URLPREFIX: URL_PREFIX
    };
  },
  components: { yoBar, yoLoading }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul li img {
  transition: all 0.5s;
}
ul li:hover img {
  transition: all 0.5s;
  box-shadow: 0 2px 20px #aaaaaa;
  /* background-color: #eeeeee!important; */
}
</style>