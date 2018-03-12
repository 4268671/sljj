<template>
    <div>
        <div>
            <img :src="imgsrc" alt="" class="w3-block wow fadeIn w3-card">
        </div>
        <!--  -->
        <div class="w3-padding-24">
            <ul class="w3-ul w3-row">
                <li class="w3-third wow fadeInUp" v-for="item in 10" :key="item.id" data-wow-delay="0.2s">
                    <router-link :to="{name: 'productdetail', params: { id: item }}">
                        <img :src="imgp" alt="" class="w3-block">
                        <p class="w3-center">产品名称</p>
                        <p class="w3-text-gray">产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介</p>
                    </router-link>
                </li>
            </ul>
            <yo-bar :propbars="10"></yo-bar>
        </div>
    </div>
</template>

<script>
import yoBar from "../components/yo-bar.vue";

export default {
  name: "productlist",
  data() {
    return {
      imgsrc: Mock.Random.image("1800x500", "#eeeeee"),
      imgp: Mock.Random.image("400x300", "#eeeeee")
    };
  },
  components: { yoBar }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul li {
  transition: all 0.5s;
}
ul li:hover {
  transition: all 0.5s;
  box-shadow: 0 2px 20px #aaaaaa;
  /* background-color: #eeeeee!important; */
}
</style>