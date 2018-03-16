<template>
  <div>
    <div>
      <!-- <img :src="imgsrc" alt="" class="w3-block"> -->
      <img :src="`${URLPREFIX}/static/sulan1920x360.jpg`" alt="" class="w3-block w3-border w3-border-red">

    </div>

    <div style="width:1200px;margin:auto">
      <h3 class="w3-border-bottom w3-padding-16">
        <span class="w3-bottombar w3-border-red" style="padding-bottom:15px">舒览最新动态</span>
        <span class="w3-margin-left w3-medium">/ Latest News</span>
      </h3>
      <ul class="w3-ul wow fadeInUp">
        <yo-loading></yo-loading>
        <li v-for="item in 6" :key="item.id" class="w3-light-gray w3-border-bottom" data-wow-delay="0.2s">
          <router-link :to="{name: 'articledetail', params: { id: item }}">

            <img :src="`${URLPREFIX}/static/news.jpg`" alt="" class="w3-left w3-margin-right w3-padding" style="height:187px">
            <div class="w3-light-gray" style="padding:0 50px;height:196px;overflow: hidden">
              <h2>标题标题标题标题标题标题标题标题</h2>
              <i class="w3-text-gray">
                <i class="fa fa-quote-left"></i>
                简介：新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介
                <i class="fa fa-quote-right"></i>
              </i>
            </div>
          </router-link>
        </li>
      </ul>
      <yo-bar :propbars="10"></yo-bar>
    </div>
  </div>
</template>

<script>
import { getCurArr } from "../utils/fns";
import { mapState } from "vuex";
import yoBar from "../components/yo-bar.vue";
import yoLoading from "../components/yo-loading";
import { URL_PREFIX } from "../utils/consts";

export default {
  name: "articlelist",
  data() {
    return {
      imgsrc: Mock.Random.image("1920x300", "#eeeeee"),
      imgp: Mock.Random.image("800x600", "#eeeeee"),
      textp: Mock.mock("@cparagraph(5, 10)"),
      URLPREFIX: URL_PREFIX
    };
  },
  computed: mapState({
    // articlelistArr:({article})=>getCurArr(article.articlelist,2,1),
    articlelistArr: ({ article }) => article.articlelist
  }),
  mounted() {
    const { dispatch } = this.$store;
    dispatch({
      type: "article/getArticleList"
    });
    console.log(1);
  },
  components: { yoBar, yoLoading }
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
}
</style>