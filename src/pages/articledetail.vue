<template>
    <div>
        <div>
            <img src="/static/sulan1920x360.jpg" alt="" class="w3-block w3-border w3-border-red">
        </div>

        <div style="width:1200px;margin:auto">
            <h3 class="w3-border-bottom w3-padding-16">
                <span class="w3-bottombar w3-border-red" style="padding-bottom:15px">舒览动态</span>
                <span class="w3-margin-left w3-medium">/ Shulan News</span>
                <button class="w3-right w3-button w3-medium w3-light-gray w3-round" @click="clickback">返 回</button>
            </h3>
            <div class="w3-padding-16 w3-border-bottom w3-light-gray" style="padding:0 100px">
                <h2 class="w3-center">标题标题标题标题标题标题</h2>
                <i class="w3-text-gray">
                    <i class="fa fa-quote-left"></i>
                    简介：{{textp}}
                    <i class="fa fa-quote-right"></i>
                </i>
            </div>
            <div class="w3-text-gray" style="padding:0 100px">
                <p class="w3-padding-24">{{textp}}{{textp}}</p>
                <p class="w3-center">
                    <img src="/static/news.jpg" alt="" class="">
                </p>
                <p class="w3-padding-24">{{textp}}{{textp}}</p>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: "articledetail",
  data() {
    return {
      imgsrc: Mock.Random.image("1920x300", "#eeeeee"),
      imgp: Mock.Random.image("800x600", "#eeeeee"),
      textp: Mock.mock("@cparagraph(5, 10)")
    };
  },
  methods: {
    clickback() {
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
i,
p {
  line-height: 30px;
  font-size: 16px;
  text-indent: 32px;
}
</style>