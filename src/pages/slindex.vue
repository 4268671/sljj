<template>
    <div>
        <yo-slideshow :slideData="homeData.slide" class="wow flipInX"></yo-slideshow>
        <!--  -->
        <div class="w3-padding-32 w3-row" style="max-width:1500px;margin:auto">
            <router-link :to="{name: 'brand'}">
                <div class="w3-third w3-center w3-tag w3-white wow bounceInUp w3-border-right">
                    <!-- <h1><img :src="`${URLPREFIX}/static/tubiao-01.png`" alt=""></h1> -->
                    <h2>来自法国</h2>
                    <p>—— Brand Introduction ——</p>
                </div>
            </router-link>
            <router-link :to="{name: 'productlist'}">
                <div class="w3-third w3-center w3-tag w3-white wow bounceInUp w3-border-right" data-wow-delay="0.3s">
                    <!-- <h1><img :src="`${URLPREFIX}/static/tubiao-02.png`" alt=""></h1> -->
                    <h2>产品中心</h2>
                    <p>—— Product Center ——</p>
                </div>
            </router-link>
            <router-link :to="{name: 'joinform'}">
                <div class="w3-third w3-center w3-tag w3-white wow bounceInUp" data-wow-delay="0.6s">
                    <!-- <h1><img :src="`${URLPREFIX}/static/tubiao-03.png`" alt=""></h1> -->
                    <h2>招商加盟</h2>
                    <p>—— Merchants Joined ——</p>
                </div>
            </router-link>

        </div>
        <!--  -->
        <div class="w3-padding-32 w3-row" style="max-width:1500px;margin:auto">
            <img :src="`${URLPREFIX}${homeData.adv && homeData.adv[0].url}`" alt="" class="w3-block wow bounceIn" data-wow-delay="0.6s">
        </div>
        <!--  -->
        <div class="w3-row w3-margin-top" style="max-width:1500px;margin:auto">
            <div class=" wow flipInY">
                <h2 class="w3-center w3-panel">最新动态
                    <p class="w3-medium">—— Latest News ——</p>
                </h2>
            </div>
            <div class="w3-quarter w3-padding">
                <img :src="`${URLPREFIX}${homeData.adv && homeData.adv[1].url}`" alt="" class="w3-block wow fadeInLeft">
            </div>
            <div class="w3-half">
                <ul class="w3-ul w3-padding wow fadeInUp">
                    <a href="">
                        <li id="newslist" class="w3-margin-bottom w3-text-gray" v-for="(item, key) in homeData.article" :key="key">
                            <h2 class="w3-col" style="width:100px;margin-top:24px">{{item.updateDate | dateFormat}}</h2>
                            <div class="w3-rest w3-border-left w3-padding">
                                <h4>{{item.title}}</h4>
                                <div>{{item.subtitle}}</div>
                            </div>
                        </li>
                    </a>
                </ul>
            </div>
            <div class="w3-quarter w3-padding">
                <img :src="`${URLPREFIX}${homeData.adv && homeData.adv[2].url}`" alt="" class="w3-block wow fadeInRight">
            </div>
        </div>
    </div>
</template>

<script>
new WOW().init();
import { mapState } from "vuex";
// 方法
import { getDateFormat } from "../utils/fns";
// 常量
import { URL_PREFIX } from "../utils/consts";
import yoSlideshow from "../components/yo-slideshow.vue";
export default {
  name: "slindex",
  data() {
    return {
      //   imgsrc: Mock.Random.image("1920x500", "#cccccc"),
      //   imgp: Mock.Random.image("400x580", "#cccccc"),
      URLPREFIX: URL_PREFIX
    };
  },
  computed: mapState({
    isLoading: ({ home }) => home.isLoading,
    homeData: ({ home }) => home.homeData
  }),
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getHomeData.apply(vm);
    });
  },
  components: {
    yoSlideshow
  },
  filters: {
    dateFormat: value => getDateFormat(value)
  },
  methods: {
    // 获取home数据
    getHomeData() {
      const { dispatch } = this.$store;
      dispatch({
        type: "home/getHomeData"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  margin-top: 0;
}

a {
  text-decoration: none;
}

#newslist {
  transition: all 0.5s;
}

#newslist:hover {
  color: white !important;
  background-color: #e84441;
  transition: all 0.5s;
  /* box-shadow: 2px 2px 10px #aaaaaa; */
}
.w3-tag {
  transition: all 0.5s;
}
.w3-tag:hover {
  background-color: #eeeeee !important;
  color: #e84441 !important;
  transition: all 0.5s;
}
</style>