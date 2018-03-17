<template>
    <div style="max-width:1500px;margin:auto">
        <div class="w3-row w3-red wow fadeInUp">
            <div class="w3-threequarter w3-padding w3-margin-bottom w3-margin-top">
                <img :src="`${URLPREFIX}/static/shop01.jpg`" alt="" class="w3-block wow fadeInLeft w3-card" data-wow-delay="0.6s">
            </div>
            <div class="w3-rest w3-padding wow fadeInRight" data-wow-delay="0.6s">
                <h3 class="w3-border-bottom w3-padding-24">红星美凯龙
                    <span class="w3-medium">（成都双楠店）</span>
                </h3>
                <p>
                    <i class="fa fa-address-card-o w3-margin-right"></i>地址：成都市二环路西一段6号红星美凯龙双楠店4楼E8016原创工匠</p>
                <p>
                    <i class="fa fa-fax w3-margin-right"></i>电话：028-6505-2524</p>
                <p>
                    <i class="fa fa-automobile w3-margin-right"></i>交通：111路 100路 306路红牌楼站下 或 地铁3号线 红牌楼站 （B口出） 下车</p>
            </div>
        </div>
        <div class="w3-row w3-red wow fadeInUp">
            <div class="w3-quarter w3-block w3-padding wow fadeInLeft" data-wow-delay="0.6s">
                <h3 class="w3-border-bottom w3-padding-24">蜀都·成都店体验馆</h3>
                <p>
                    <i class="fa fa-address-card-o w3-margin-right"></i>地址：成都市武侯区南沈路南桥村一组395号</p>
                <p>
                    <i class="fa fa-fax w3-margin-right"></i>电话：028-65052524</p>
                <p>
                    <i class="fa fa-automobile w3-margin-right"></i>交通：848路 509路 306路 南桥村站下 或 地铁10号线 簇锦站 （D口出） 下车</p>
            </div>
            <div class="w3-rest w3-padding w3-margin-bottom w3-margin-top">
                <img :src="`${URLPREFIX}/static/shop02.jpg`" alt="" class="w3-block w3-card wow fadeInRight" data-wow-delay="0.5s">
            </div>
            {{ channelist }}
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { URL_PREFIX } from "../utils/consts";
export default {
  name: "brand",
  data() {
    return {
      //   imgsrc: Mock.Random.image("1920x500", "#eeeeee"),
      //   imgp: Mock.Random.image("400x300", "#eeeeee"),
      URLPREFIX: URL_PREFIX
    };
  },
  computed: mapState({
    channelist: ({ channel }) => channel.channelist
  }),
  components: {},
  mounted() {
    this.$nextTick(() => {
      const { dispatch } = this.$store;

      // 请求api获取数据
      dispatch({
        type: "channel/getChannelList"
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  word-wrap: break-word;
  word-break: normal;
  line-height: 30px;
  font-size: 16px;
}
</style>