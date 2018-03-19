<template>
  <div>
    <div>
      <img :src="`${URLPREFIX}${channelthumb}`" alt="" class="w3-block w3-border w3-border-red">
    </div>
    <div style="width:1200px;margin:auto">
      <h3 class="w3-border-bottom w3-padding-16">
        <span class="w3-bottombar w3-border-red" style="padding-bottom:15px">舒览动态</span>
        <span class="w3-margin-left w3-medium">/ Shulan News</span>
        <button class="w3-right w3-button w3-medium w3-light-gray w3-round animated fadeIn" @click="clickback">返 回</button>
      </h3>
      <yo-loading v-show="isLoading"></yo-loading>
      <div v-show="!isLoading" v-for="(item,key) in articleDetail" :key="key">
        <div class="w3-padding-16 w3-border-bottom w3-light-gray" style="padding:0 100px">
          <h2 class="w3-center">{{item.title}}</h2>
          <i class="w3-text-gray">
            <i class="fa fa-quote-left"></i>
            {{item.subtitle}}
            <i class="fa fa-quote-right"></i>
          </i>
        </div>
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
  name: "articledetail",
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
  methods: {
    clickback() {
      this.$router.go(-1);
    },
    // 获取article数据
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
  },
  components: { yoLoading }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
i,
p {
  line-height: 30px;
  font-size: 16px;
  text-indent: 32px;
  font-style: normal;
  word-break: break-all !important;
}
</style>