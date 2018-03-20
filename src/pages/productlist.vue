<template>
  <div>
    <div>
      <img v-if="channelthumb" :src="`${URLPREFIX}${channelthumb}`" alt="" class="w3-block wow fadeIn w3-border w3-border-red">
    </div>
    <!--  -->
    <div class="w3-padding-24" style="max-width:1500px;margin:auto">
      <div class=" wow fadeInUp">
        <h2 class="w3-center w3-panel">舒览产品中心
          <p class="w3-medium">—— Product Center ——</p>
        </h2>
      </div>
      <ul class="w3-ul w3-row">
        <yo-loading v-show="isLoading"></yo-loading>
        <div v-show="!isLoading">
          <li class="w3-third wow fadeInUp" v-for="(item,key) in productlist" :key="key" data-wow-delay="0.2s">
            <router-link :to="{name: 'productdetail', params: { id: item.id }}">
              <img v-if="item.thumb" :src="`${URLPREFIX}${item.thumb}`" alt="" class="w3-block w3-border">
              <!-- 默认缩略图 -->
              <img v-else src="http://39.108.178.198:7003/public/uploads/article/thumb-1521381160959.jpeg" alt="" class="w3-block w3-border">
              <p class="w3-center">{{item.title}}</p>
              <p class="w3-text-gray">{{item.subtitle}}</p>
            </router-link>
          </li>
        </div>
      </ul>
      <yo-bar :propbars="10"></yo-bar>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import yoBar from "../components/yo-bar.vue";
import yoLoading from "../components/yo-loading";
import { URL_PREFIX } from "../utils/consts";
import { getChannelThumb } from "../utils/fns";

export default {
  name: "productlist",
  data() {
    return {
      URLPREFIX: URL_PREFIX,
      channelthumb: "" // 栏目主题图片
    };
  },
  computed: mapState({
    isLoading: ({ product }) => product.isLoading,
    productlist: ({ product }) => product.productlist
  }),
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getProductData.apply(vm, [to.params.id]);
    });
  },
  components: { yoBar, yoLoading },
  methods: {
    // 获取product数据
    getProductData(id) {
      const { dispatch, commit } = this.$store;
      const channelid = id || localStorage.getItem("currentChannelid");
      const channelist = JSON.parse(localStorage.getItem("channelist"));
      dispatch({
        type: "product/getProductListByid",
        payload: { id: channelid }
      });
      if (id) {
        localStorage.setItem("currentChannelid", id);
      }
      this.channelthumb = getChannelThumb(channelid, channelist);
    }
  }
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