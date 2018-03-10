<template>
    <div>
        <div>
            <img :src="imgsrc" alt="" class="w3-block">
        </div>
        <!--  -->
        <div class="w3-panel">
            <div class="w3-half w3-padding">
                <img :src="imgp" alt="" class="w3-block w3-border">
            </div>
            <div class="w3-half w3-padding">
                <h3 class="w3-border-bottom w3-padding-16">产品名称</h3>
                <div class="w3-border-bottom w3-padding-16">
                    <h5>产品简介：</h5>
                    <p>产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介</p>
                </div>
                <div class="w3-border-bottom w3-padding-16">
                    <h5>详细参数</h5>
                    <p>产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介</p>
                    <p>产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介</p>
                    <p>产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介</p>
                    <p>产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介</p>
                    <p>产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介</p>
                </div>
            </div>
            <div class="w3-clear"></div>
            <!--  -->
            <div class="w3-padding">
                <h3 class="w3-border-bottom w3-padding-16 w3-center">更多产品</h3>
                <div v-for="item in 5" :key="item" style="width:20%" class="w3-left">
                    <img :src="imgp" alt="" class="w3-block w3-padding">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "page3",
        data() {
            return {
                imgsrc: Mock.Random.image("1800x500", "#eeeeee"),
                imgp: Mock.Random.image("400x300", "#eeeeee")
            };
        },
        components: {}
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>