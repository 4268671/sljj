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
              <img v-else :src="defaultimg" alt="" class="w3-block w3-border">
              <p class="w3-center">{{item.title}}</p>
              <p class="w3-text-gray" style="">{{item.subtitle | filteredItems}}</p>
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
import defaultimg from "@/assets/images/default.png"; // 默认图
import yoBar from "../components/yo-bar.vue";
import { URL_PREFIX } from "../utils/consts";
import yoLoading from "../components/yo-loading";
import { getChannelThumb } from "../utils/fns";

export default {
  name: "productlist",
  data() {
    return {
      defaultimg,
      URLPREFIX: URL_PREFIX,
      channelthumb: "" // 栏目主题图片
    };
  },
  filters: {
    filteredItems: value =>
      value.length > 66 ? value.slice(0, 66) + "..." : value.slice(0, 66)
  },
  computed: mapState({
    isLoading: ({ product }) => product.isLoading,
    productlist: ({ product }) => product.productlist,
    channelist: ({ channel }) => channel.channelist
  }),
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getProductData.apply(vm, [to.params.id, to.path.substring(1)]);
    });
  },
  components: { yoBar, yoLoading },
  methods: {
    // 获取product数据
    async getProductData(id, path) {
      const { dispatch, commit } = this.$store;
      await dispatch({
        type: "channel/getChannelList"
      });

      const channelid =
        id || this.channelist.filter(item => item.path === path)[0].channelid;
      await dispatch({
        type: "product/getProductListByid",
        payload: { id: channelid }
      });

      this.channelthumb = getChannelThumb(channelid, this.channelist);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul li {
  min-height: 510px;
}
ul li img {
  transition: all 0.5s;
}
ul li:hover img {
  transition: all 0.5s;
  box-shadow: 0 2px 20px #aaaaaa;
  /* background-color: #eeeeee!important; */
}
li p:nth-child(3) {
  line-height: 24px;
  font-size: 16px;
  text-indent: 32px;
  word-break: break-all !important;
}
@media (max-width: 1652px) {
  ul li {
    min-height: 440px !important;
  }
}
</style>