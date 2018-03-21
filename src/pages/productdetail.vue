<template>
  <div>
    {{articleDetail}}
    <div>
      <img v-if="channelthumb" :src="`${URLPREFIX}${channelthumb}`" alt="" class="w3-block">
    </div>
    <div style="max-width:1500px;margin:auto">
      <h3 class="w3-border-bottom w3-padding-16">
        <span class="w3-bottombar w3-border-red" style="padding-bottom:15px">产品中心</span>
        <span class="w3-margin-left w3-medium">/ Product Center</span>
        <button class="w3-right w3-button w3-medium w3-light-gray w3-round wow fadeIn" @click="clickback">返 回</button>
      </h3>
      <yo-loading v-show="isLoading"></yo-loading>
      <div v-show="!isLoading" v-for="(item,key) in articleDetail" :key="key">
        <div class="w3-col w3-padding w3-padding-24" style="width:500px">
          <img :src="`${URLPREFIX}${item.thumb}`" alt="" class="w3-block w3-border">
        </div>
        <div class="w3-rest w3-padding w3-text-gray">
          <h3 class="w3-border-bottom w3-padding-16">{{item.title}} / Shulan Product</h3>
          <div class="w3-border-bottom">
            <h5>产品简介</h5>
            <p class="">{{item.subtitle}}</p>
          </div>
          <div class="w3-border-bottom w3-padding-16">
            <h5>详细参数</h5>
            <p>{{item.params}}</p>

          </div>
        </div>
        <div class="w3-clear"></div>

        <div class="w3-text-gray w3-padding-24" style="padding:0 100px" v-html="item.content" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import yoLoading from "../components/yo-loading";
import { URL_PREFIX } from "../utils/consts";
import { getChannelThumb } from "../utils/fns";
import { unescape } from "querystring";

export default {
  name: "productdetail",
  data() {
    return {
      URLPREFIX: URL_PREFIX,
      channelthumb: "" // 栏目主题图片
    };
  },

  computed: mapState({
    isLoading: ({ article }) => article.isLoading,
    articleDetail: ({ article }) => article.articleDetail
  }),
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
    // 获取product数据
    async getDetailData(id) {
      const { dispatch, commit } = await this.$store;
      let channelist = await JSON.parse(localStorage.getItem("channelist"));
      if (!channelist) {
        await dispatch({
          type: "channel/getChannelList"
        });
        channelist = await JSON.parse(localStorage.getItem("channelist"));
      }

      const articleid = await (id || localStorage.getItem("currentArticleid"));
      await dispatch({
        type: "article/getArticleDetail",
        payload: { id: articleid }
      });

      // await console.log(this.articleDetail[0].channelid, "channelid");
      if (id) {
        await localStorage.setItem("currentArticleid", id);
      }
      this.channelthumb = await getChannelThumb(
        this.articleDetail[0].channelid,
        channelist
      );
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