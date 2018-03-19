<template>
    <div>
        <div class="w3-margin-bottom">
            <img :src="`${URLPREFIX}${channelthumb}`" alt="" class="w3-block wow fadeInUp w3-card">
        </div>
        {{brandlist}}
        <div style="max-width:1500px;margin:auto">
            <div class="w3-padding-24 wow fadeInUp">
                <h2 class="w3-center w3-panel">舒览品牌介绍
                    <p class="w3-medium">—— Shulan Brand ——</p>
                </h2>
            </div>
            <div class="w3-row w3-padding-16" v-for="(item,key) in brandlist" :key="key">
                <div class="w3-col w3-right w3-padding wow fadeInRight" style="width:560px">
                    <img :src="`${URLPREFIX}${item.url}`" alt="" class="w3-block w3-card">
                </div>
                <div class="w3-rest w3-padding wow" :class="classArr[key%3]">
                    <h1>{{item.entitle}}</h1>
                    <h3 class="w3-leftbar w3-padding w3-border-red">{{item.title}} /
                        <span class="w3-text-red w3-medium">{{item.tag}}</span>
                    </h3>
                    <div class="w3-container w3-text-gray">
                        <div class="w3-border-bottom w3-padding-16 w3-border-red">
                            <p>我们做的不只是床垫，更是一流的设计与内在。 </p>
                            <p>我们带来的不仅是好眠，更是您和家人幸福的源泉。 </p>
                            <p>您并不仅仅是购买了一张床垫，而是把生活态度带回了家。</p>
                        </div>
                        <p>
                            我们不仅是舒览，<br>更是将伴您一生的美好回忆。
                        </p>
                    </div>
                </div>
            </div>
            <div class="w3-clear"></div>
            <div class="w3-padding-32">
                <div class="w3-half w3-right w3-padding wow fadeInRight">
                    <img :src="`${URLPREFIX}/static/brand04.jpg`" alt="" class="w3-block w3-card">

                </div>
                <div class="w3-rest w3-padding wow fadeInRight">
                    <h1>INSPECTION REPORT</h1>
                    <h3 class="w3-leftbar w3-padding w3-border-red">舒览对您无所保留 /
                        <span class="w3-text-red w3-medium">质检报告</span>
                    </h3>
                </div>
            </div>
            <div class="w3-clear"></div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { URL_PREFIX } from "../utils/consts";
import yoLoading from "../components/yo-loading";
import { getChannelThumb } from "../utils/fns";

export default {
  name: "brand",
  data() {
    return {
      URLPREFIX: URL_PREFIX,
      channelthumb: "", // 栏目主题图片
      classArr: ["fadeInUp", "fadeInLeft", "fadeInRight"]
    };
  },
  computed: mapState({
    isLoading: ({ brand }) => brand.isLoading,
    brandlist: ({ brand }) => brand.brandlist
  }),
  beforeRouteEnter(to, from, next) {
    // console.log(to, "to");
    // console.log(from, "from");
    next(vm => {
      vm.getChannelData.apply(vm, [to.params.id]);
    });
  },
  mounted() {
    this.$nextTick(() => {
      const { dispatch } = this.$store;

      // 请求api获取数据
      dispatch({
        type: "brand/getBrandList"
      });
    });
  },
  components: { yoLoading },
  methods: {
    // 获取channel数据
    getChannelData(id) {
      const channelid = id || localStorage.getItem("currentChannelid");
      const channelist = JSON.parse(localStorage.getItem("channelist"));
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

</style>