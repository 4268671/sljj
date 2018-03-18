<template>
    <div>
        <div class="w3-margin-bottom">
            <img :src="`${URLPREFIX}${channelthumb}`" alt="" class="w3-block wow fadeInUp w3-card">
        </div>
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
                <div class="w3-rest w3-padding wow fadeInUp">
                    <h1>{{item.entitle}}</h1>
                    <h3 class="w3-leftbar w3-padding w3-border-red">{{item.title}} /
                        <span class="w3-text-red w3-medium">{{item.tag}}</span>
                    </h3>
                    <div class="w3-container w3-text-gray">
                        <div class="w3-border-bottom w3-padding-16 w3-border-red">
                            <p v-for="(item,key) in item.subtitle.split('\n')" :key="key">
                                {{item}}
                            </p>
                        </div>
                        <div>
                            <p v-for="(item,key) in item.description.split('\n')" :key="key">
                                {{item}}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="w3-clear"></div>
            </div>
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
      channelthumb: "" // 栏目主题图片
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