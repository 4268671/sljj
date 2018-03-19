<template>
    <div>
        <div>
            <img :src="`${URLPREFIX}/static/bigpic05.jpg`" alt="" class="w3-block">
        </div>
        <!--  -->
        {{articleDetail}}
        <div v-for="(item,key) in articleDetail" :key="key" class="w3-panel" style="max-width:1500px;margin:auto">
            <div class="w3-col w3-padding w3-padding-24" style="width:600px">
                <img :src="`${URLPREFIX}/static/480x360.jpg`" alt="" class="w3-block w3-border"> {{item.content[0].insert.image}}
                <div v-for="(content,key) in item.content" :key="key" class="w3-center" v-if="content.insert.image">
                    <img :src="`${content.insert.image}`" alt="www.shulanjj.com" style="max-width:100%">
                </div>
            </div>
            <div class="w3-rest w3-padding w3-text-gray">
                <h3 class="w3-border-bottom w3-padding-16">{{item.title}} /
                    <span class="w3-text-red w3-large">Shulan Product </span>
                </h3>
                <div class="w3-border-bottom">
                    <p class="">产品简介：产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简简介产品简介</p>
                </div>
                <div class="w3-border-bottom w3-padding-16">
                    <h5>详细参数</h5>
                    <p>产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介</p>

                </div>
            </div>
            <div class="w3-clear"></div>
            <!--  -->
            <div class="w3-padding">
                <p style="padding:0 100px">
                    <img :src="`${URLPREFIX}/static/480x360.jpg`" alt="" class="w3-block">
                </p>
            </div>
            <!--  -->
            <div class="w3-padding">
                <h3 class="w3-border-bottom w3-padding-16 w3-center">更多产品 /
                    <span class="w3-large">More Product</span>
                </h3>
                <div v-for="item in 5" :key="item" style="width:20%" class="w3-left">
                    <img :src="`${URLPREFIX}/static/480x360.jpg`" alt="" class="w3-block w3-padding">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapState } from "vuex";
import yoLoading from "../components/yo-loading";
import { URL_PREFIX } from "../utils/consts";

export default {
  name: "productdetail",
  data() {
    return {
      URLPREFIX: URL_PREFIX
    };
  },

  computed: mapState({
    isLoading: ({ article }) => article.isLoading,
    articleDetail: ({ article }) => article.articleDetail
  }),
  beforeRouteEnter(to, from, next) {
    console.log(to, "to");
    console.log(from, "from");
    next(vm => {
      vm.getDetailData.apply(vm, [to.params.id]);
    });
  },
  components: { yoLoading },
  methods: {
    // 获取article数据
    getDetailData(id) {
      const { dispatch, commit } = this.$store;
      const channelid = id || localStorage.getItem("currentChannelid");
      const channelist = JSON.parse(localStorage.getItem("channelist"));
      dispatch({
        type: "article/getArticleDetail",
        payload: { id: channelid }
      });
      if (id) {
        localStorage.setItem("currentChannelid", id);
      }
      //   this.channelthumb = getChannelThumb(channelid, channelist);
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
}
</style>