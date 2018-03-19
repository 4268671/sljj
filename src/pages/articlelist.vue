<template>
  <div>
    <div>
      <img :src="`${URLPREFIX}${channelthumb}`" alt="" class="w3-block w3-border w3-border-red animated fadeIn">
    </div>
    <div style="width:1200px;margin:auto">
      <h3 class="w3-border-bottom w3-padding-16">
        <span class="w3-bottombar w3-border-red" style="padding-bottom:15px">舒览最新动态</span>
        <span class="w3-margin-left w3-medium">/ Latest News</span>
      </h3>
      <ul class="w3-ul wow fadeInUp">
        <yo-loading v-show="isLoading"></yo-loading>
        <div v-show="!isLoading">
          <li v-for="(item,key) in articlelist" :key="key" class="w3-light-gray w3-border-bottom" data-wow-delay="0.2s">
            <router-link :to="{name: 'articledetail', params: { id: item.id }}">
              <img :src="`${URLPREFIX}${item.thumb}`" alt="" class="w3-left w3-margin-right w3-padding" style="height:187px">
              <div class="w3-light-gray" style="padding:0 50px;height:196px;overflow: hidden">
                <h2>{{item.title}}</h2>
                <i class="w3-text-gray">
                  <i class="fa fa-quote-left"></i>
                  {{ item.subtitle | filteredItems}}
                  <i class="fa fa-quote-right"></i>
                </i>
              </div>
            </router-link>
          </li>
        </div>
      </ul>
      <yo-bar :propbars="10"></yo-bar>
    </div>
    {{articlelist}}
  </div>
</template>

<script>
import { mapState } from "vuex";
import yoBar from "../components/yo-bar.vue";
import yoLoading from "../components/yo-loading";
import { URL_PREFIX } from "../utils/consts";
import { getChannelThumb } from "../utils/fns";

export default {
  name: "articlelist",
  data() {
    return {
      URLPREFIX: URL_PREFIX,
      channelthumb: "" // 栏目主题图片
    };
  },
  filters: {
    filteredItems: value =>
      value.length > 140 ? value.slice(0, 140) + "..." : value.slice(0, 140)
  },
  computed: mapState({
    isLoading: ({ article }) => article.isLoading,
    articlelist: ({ article }) => article.articlelist
  }),
  beforeRouteEnter(to, from, next) {
    // console.log(to, "to");
    // console.log(from, "from");
    next(vm => {
      vm.getArticleData.apply(vm, [to.params.id]);
    });
  },
  components: { yoBar, yoLoading },
  methods: {
    // 获取article数据
    getArticleData(id) {
      const { dispatch, commit } = this.$store;
      const channelid = id || localStorage.getItem("currentChannelid");
      const channelist = JSON.parse(localStorage.getItem("channelist"));
      dispatch({
        type: "article/getArticleListByid",
        payload: { id: channelid }
      });
      if (id) {
        localStorage.setItem("currentChannelid", id);
      }
      this.channelthumb = getChannelThumb(channelid, channelist);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a div {
  transition: all 0.5s;
}

a:hover div {
  color: #e84441 !important;
  transition: all 0.5s;
  /* box-shadow: 0 2px 10px #cccccc; */
}

i,
p {
  line-height: 30px;
  font-size: 16px;
  text-indent: 32px;
  font-style: normal;
  word-wrap: break-word;
  word-break: normal !important;
}
</style>