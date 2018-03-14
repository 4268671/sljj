<template>
    <div>
        <div>
            <img :src="imgsrc" alt="" class="w3-block">
        </div>
        <!--  -->
        <div class="w3-panel" style="max-width:1500px;margin:auto">
            <div class="w3-col w3-padding w3-padding-24" style="width:600px">
                <img src="/static/480x360.jpg" alt="" class="w3-block w3-border">
            </div>
            <div class="w3-rest w3-padding w3-text-gray">
                <h3 class="w3-border-bottom w3-padding-16">产品名称 / Product name</h3>
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
                    <img :src="imgp" alt="" class="w3-block">
                </p>
            </div>
            <!--  -->
            <div class="w3-padding">
                <h3 class="w3-border-bottom w3-padding-16 w3-center">更多产品 /
                    <span class="w3-large">More Product</span>
                </h3>
                <div v-for="item in 5" :key="item" style="width:20%" class="w3-left">
                    <img src="/static/480x360.jpg" alt="" class="w3-block w3-padding">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: "productdetail",
  data() {
    return {
      imgsrc: Mock.Random.image("1920x500", "#eeeeee"),
      imgp: Mock.Random.image("400x300", "#eeeeee")
    };
  },
  components: {}
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