<template>
  <div id="main">
    <yo-sidebar :style="sidebarstyle"></yo-sidebar>
    <yo-top :style="topstyle" class="w3-card"></yo-top>
    <yo-nav :style="navstyle" :channelist='channelist'></yo-nav>
    <!-- props:logo -->
    <router-view :style="routerstyle" id="routerstyle"></router-view>
    <div class="w3-clear"></div>
    <yo-footer :style="footerstyle"></yo-footer>
  </div>
</template>

<script>
new WOW().init();
import { mapState } from "vuex";

import yoTop from "./components/yo-top.vue";
import yoSidebar from "./components/yo-sidebar.vue";
import yoFooter from "./components/yo-footer.vue";
import yoNav from "./components/yo-nav.vue";
export default {
  name: "mainpage",
  data() {
    return {
      topstyle: {
        // 顶部样式
        height: "88px",
        margin: "auto",
        "z-index": "3",
        "min-width": "1200px"
      },
      navstyle: {
        "min-width": "1200px"
      },
      sidebarstyle: {
        // 侧边样式
        width: "40px",
        top: 0,
        right: 0,
        "z-index": "2",
        "background-color": "transparent"
      },
      routerstyle: {
        margin: "auto",
        width: "1920px",
        "min-width": "1200px"
        // "padding-top": "30px"
      },
      footerstyle: {
        // height: '200px',
        "margin-top": "40px",
        "background-color": "#000000",
        "min-width": "1200px"
      }
    };
  },
  computed: mapState({
    channelist: ({ channel }) => channel.channelist
  }),
  components: {
    yoTop,
    yoSidebar,
    yoFooter,
    yoNav
  },
  mounted() {
    this.$nextTick(() => {
      const { dispatch } = this.$store;
      // 请求api获取数据
      dispatch({
        type: "channel/getChannelList"
      });
      console.log(this.getBashRedirect(), "1111");
    });
  },
  methods: {
    getBashRedirect() {
      // According to the url parameter to redirect
      // 这里是重定向的,重定向到 url 的 redirect 参数所示地址
      const urlParams = new URL(window.location.href);
      console.log(urlParams, "urlParams");

      this.$router.push("/home");
    }
  }
};
</script>

<style scoped>
@media (max-width: 1652px) {
  #routerstyle {
    width: 1200px !important;
  }
}
</style>