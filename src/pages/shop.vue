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
      URLPREFIX: URL_PREFIX
    };
  },
  computed: mapState({
    isLoading: ({ shop }) => shop.isLoading,
    shoplist: ({ shop }) => shop.shoplist
  }),
  beforeRouteEnter(to, from, next) {
    // console.log(to, "to");
    // console.log(from, "from");
    next(vm => {
      vm.getChannelData.apply(vm, [to.params.id]);
    });
  },
  mounted() {
    this.$nextTick(() => {
      const { dispatch } = this.$store;
      // 请求api获取数据
      dispatch({
        type: "shop/getShopList"
      });
    });
  },
  components: { yoLoading },
  methods: {
    // 获取channel数据
    getChannelData(id) {
      const channelid = id || localStorage.getItem("currentChannelid");
      if (id) {
        localStorage.setItem("currentChannelid", id);
      }
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