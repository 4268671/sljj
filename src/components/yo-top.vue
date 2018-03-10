<template>
  <div class="w3-white w3-row">
    <div class="w3-center w3-margin-top">
      <img :src="logo" class="animated flipInX" :style="logostyle">
    </div>
    <!-- <div class="w3-bar">
        <button v-for="(nav,key) in navs" class="w3-margin-right w3-bar-item w3-button w3-hover-green animated fadeIn" @click="selected(nav)" :key="key">{{nav.name}}</button>
      </div> -->
    <div class="w3-clear"></div>
  </div>
</template>

<script>
    import logoimg from "@/assets/sl-logo.png"; // 默认logo图
    import yoSlideshow from "../components/yo-slideshow.vue";
    export default {
        props: {
            logo: {
                // 传logo地址
                type: String,
                default: logoimg
            }
        },
        data() {
            return {
                logostyle: {
                    // logo图片样式
                    width: "240px"
                },
                navs: [{
                    name: "首 页",
                    path: "/"
                }, {
                    name: "link 2",
                    path: "/page2"
                }, {
                    name: "link 3",
                    path: "/page3"
                }],
                activeName: ""
            };
        },
        methods: {
            selected: function(prop) {
                this.activeName = prop;
                this.$router.push(prop.path);
                // console.info(prop.path)
            }
        },
        components: {
            yoSlideshow
        }
    };
</script>

<style scoped>
    .w3-bar {
        padding: 10px 0 0 150px;
    }
    
    .w3-dropdown-content {
        margin: -8px 0 0 -43px;
        padding: 6px;
    }
</style>