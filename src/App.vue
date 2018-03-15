<template>
  <div id="main">
    <yo-sidebar :style="sidebarstyle"></yo-sidebar>
    <yo-top :style="topstyle" class="w3-card"></yo-top>
    <yo-nav :style="navstyle"></yo-nav>
    <!-- props:logo -->
    <router-view :style="routerstyle" id="routerstyle"></router-view>
    <div class="w3-clear"></div>
    <yo-footer :style="footerstyle"></yo-footer>
  </div>
</template>

<script>
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
  components: {
    yoTop,
    yoSidebar,
    yoFooter,
    yoNav
  },
  methods: {}
};
</script>

<style scoped>
@media (max-width: 1652px) {
  #routerstyle {
    width: 1200px !important;
  }
}
</style>