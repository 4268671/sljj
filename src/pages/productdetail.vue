<template>
  <div>
    <div v-if="channelthumb">
      <img :src="`${URLPREFIX}${channelthumb}`" alt="" class="w3-block">
    </div>
    <div style="max-width:1500px;margin:auto">
      <h3 class="w3-border-bottom w3-padding-16">
        <span class="w3-bottombar w3-border-red" style="padding-bottom:15px">产品中心</span>
        <span class="w3-margin-left w3-medium">/ Product Center</span>
        <button class="w3-right w3-button w3-medium w3-light-gray w3-round wow fadeIn" @click="clickback">
          << 返 回</button>
      </h3>
      <yo-loading v-show="isLoading"></yo-loading>
      <div v-show="!isLoading" v-for="(item,key) in productDetail" :key="key">
        <div class="w3-col w3-padding w3-padding-24" style="width:500px">
          <img v-if="item.thumb" :src="`${URLPREFIX}${item.thumb}`" alt="" class="w3-block w3-border">
          <!-- 默认缩略图 -->
          <img v-else :src="defaultimg" alt="" class="w3-block w3-border">
        </div>
        <div class="w3-rest w3-padding w3-text-gray">
          <h3 class="w3-border-bottom w3-padding-16">
            <span class="w3-text-red">{{item.title}}</span> /
            <span class="w3-large">Shulan Product</span>
          </h3>
          <div class="w3-border-bottom">
            <h5>
              <i class="fa fa-file w3-margin-right"></i>产品简介</h5>
            <p class="">{{item.subtitle}}</p>
          </div>
          <div v-if="item.params" class="w3-border-bottom w3-padding-16">
            <h5>
              <i class="fa fa-clipboard w3-margin-right"></i>详细参数</h5>
            <p>{{item.params}}</p>
          </div>
        </div>
        <div class="w3-clear"></div>
        <!--  -->
        <div class="w3-text-gray w3-padding-24" style="padding:0 100px" v-html="item.content" />
        <!--  -->
        <div class="w3-padding">
          <h3 class="w3-border-bottom w3-padding-16 w3-center">更多产品 /
            <span class="w3-large">More Product</span>
          </h3>
          <div v-for="(item,index) in moreProductList.slice(0,5)" :key="index" style="width:20%" class="w3-left w3-padding w3-center">
            <img :src="`${URLPREFIX}${item.thumb}`" alt="" class="w3-block w3-padding">
            <div class="w3-margin-top w3-text-gray">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import defaultimg from "@/assets/images/default.png"; // 默认图

import { mapState } from "vuex";
import yoLoading from "../components/yo-loading";
import { URL_PREFIX } from "../utils/consts";
import { getChannelThumb } from "../utils/fns";
import { unescape } from "querystring";

export default {
  name: "productdetail",
  data() {
    return {
      defaultimg,
      URLPREFIX: URL_PREFIX,
      channelthumb: "" // 栏目主题图片
    };
  },

  computed: {
    moreProductList: function() {
      // console.log(this.productlist, "this.productlist");
      return this.productlist.filter(item => item.thumb);
    },
    ...mapState({
      isLoading: ({ product }) => product.isLoading,
      productlist: ({ product }) => product.productlist,
      productDetail: ({ product }) => product.productDetail
    })
  },
  beforeRouteEnter(to, from, next) {
    // console.log(to, "to");
    // console.log(from, "from");
    next(vm => {
      vm.getDetailData.apply(vm, [to.params.id]);
    });
  },
  updated() {
    // innerHTML
    const qlAlignCenter =
      document.getElementsByClassName("ql-align-center") || [];
    const qlAlignRight =
      document.getElementsByClassName("ql-align-right") || [];

    for (let i = 0; i < qlAlignCenter.length; i += 1) {
      qlAlignCenter[i].style["text-align"] = "center";
    }
    for (let i = 0; i < qlAlignRight.length; i += 1) {
      qlAlignRight[i].style["text-align"] = "right";
    }
  },
  components: { yoLoading },
  methods: {
    clickback() {
      this.$router.go(-1);
    },
    // 获取product详情数据
    async getDetailData(id) {
      const { dispatch, commit } = await this.$store;
      let channelist = await JSON.parse(localStorage.getItem("channelist"));
      if (!channelist) {
        await dispatch({
          type: "channel/getChannelList"
        });
        channelist = await JSON.parse(localStorage.getItem("channelist"));
      }

      const productid = await (id || localStorage.getItem("currentArticleid"));
      await dispatch({
        type: "product/getProductDetail",
        payload: { id: productid }
      });

      // await console.log(this.productDetail[0].channelid, "channelid");
      if (id) {
        await localStorage.setItem("currentArticleid", id);
      }
      this.channelthumb = await getChannelThumb(
        this.productDetail[0].channelid,
        channelist
      );

      if (!this.productlist.length) {
        await this.getMoreProduct(this.productDetail[0].channelid);
      }
    },
    // 获取product更多产品数据
    async getMoreProduct(id) {
      const { dispatch, commit } = this.$store;
      const channelid = await (id || localStorage.getItem("currentChannelid"));
      // console.log(channelid, "channelid");

      await dispatch({
        type: "product/getProductListByid",
        payload: { id: channelid }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  line-height: 30px;
  font-size: 16px;
  text-indent: 32px;
  word-break: break-all !important;
}
</style>