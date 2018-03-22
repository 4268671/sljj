<template>
  <div style="max-width:1500px;margin:auto">
    <yo-loading v-show="isLoading"></yo-loading>
    <div class="w3-row w3-red wow fadeInUp" v-for="(item,key) in shoplist" :key="key">
      <div :class="[{'w3-left': (key%2 === 0)},{'w3-right': (key%2 === 1)}]" class="w3-threequarter w3-padding w3-margin-bottom w3-margin-top">
        <img :src="`${URLPREFIX}${item.url}`" alt="" class="w3-block wow  w3-card" data-wow-delay="0.6s" :class="[{'fadeInLeft': (key%2 === 0)},{'fadeInRight': (key%2 === 1)}]">
      </div>
      <div class="w3-rest w3-padding wow" data-wow-delay="0.6s" :class="[{'fadeInLeft': (key%2 === 1)},{'fadeInRight': (key%2 === 0)}]">
        <h3 class="w3-border-bottom w3-padding-24">{{item.name}}
        </h3>
        <p>
          <i class="fa fa-address-card-o w3-margin-right"></i>地址：{{item.address}}</p>
        <p>
          <i class="fa fa-fax w3-margin-right"></i>电话：{{item.tel}}</p>
        <p>
          <i class="fa fa-automobile w3-margin-right"></i>交通：{{item.traffic||'...'}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { URL_PREFIX } from "../utils/consts";
import yoLoading from "../components/yo-loading";

export default {
  name: "shop",
  data() {
    return {
      URLPREFIX: URL_PREFIX,
      channelid: "",
      path: ""
    };
  },
  computed: mapState({
    isLoading: ({ shop }) => shop.isLoading,
    shoplist: ({ shop }) => shop.shoplist,
    channelist: ({ channel }) => channel.channelist
  }),
  watch: {
    channelist(channelist) {
      this.channelid = channelist.filter(
        item => item.path === this.path
      )[0].channelid;
      // console.log(this.channelid, "channelid");
      // console.log(channelist, "channelist");
      this.getPageData(this.channelid, channelist);
    }
  },
  beforeRouteEnter(to, from, next) {
    // console.log(to, "to");
    // console.log(from, "from");
    next(vm => {
      vm.init.apply(vm, [to.params.id, to.path.substring(1)]);
    });
  },
  components: { yoLoading },
  methods: {
    // 初始化
    init(id, path) {
      this.channelid = id;
      this.path = path;
      this.getPageData();
    },
    // 获取数据
    getPageData() {
      const { dispatch } = this.$store;
      // 请求api获取数据
      dispatch({
        type: "shop/getShopList"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  word-wrap: break-word;
  word-break: normal;
  line-height: 30px;
  font-size: 16px;
}
</style>