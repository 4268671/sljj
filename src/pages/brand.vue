<template>
    <div>
        <div class="w3-margin-bottom">
            <img src="/static/bigpic02.jpg" alt="" class="w3-block wow fadeInUp w3-card">
        </div>
        <div style="max-width:1500px;margin:auto">
            <div class="w3-padding-24 wow fadeInUp">
                <h2 class="w3-center w3-panel">舒览品牌介绍
                    <p class="w3-medium">—— Shulan Brand ——</p>
                </h2>
            </div>
            <div class="w3-row w3-padding-16">
                <div class="w3-col w3-right w3-padding wow fadeInRight" style="width:560px">
                    <img src="/static/brand01.jpg" alt="" class="w3-block w3-card">
                </div>
                <div class="w3-rest w3-padding wow fadeInUp">
                    <h1>BRAND INTRODUCTION</h1>
                    <h3 class="w3-leftbar w3-padding w3-border-red">来自法国，您与家人的睡眠管理专家 /
                        <span class="w3-text-red w3-medium">品牌介绍</span>
                    </h3>
                    <div class="w3-container w3-text-gray">
                        <p class="w3-border-bottom w3-padding-16 w3-border-red">
                            舒览SHULAN床垫，源自法国；<br>是一家集床垫设计、研发、测试、生产、营销于一体的大型家 居企业。
                        </p>
                        <p class="">
                            创始人Baptiste（巴蒂斯特）先生已投身于家居行业50余年，在法国业内有着不可或缺的重要地位，他对床垫设计与研发有着五十年如一日的热忱，并坚持不断创新；
                        </p>
                        <p>
                            舒览专注研发健康与舒适并存的完美睡眠，坚持选用全球最好的原生材料，更对床垫的品质、手感、设计、包装、服务和用户体验有着近乎疯狂的执着，每一张床垫必须经过三十二道严格质检，因此我们的 规模在法国得以迅速发展。
                        </p>
                        <p>
                            随着品牌发展，已向欧洲、亚洲、美洲等三十多个国家出口床垫，与美国、加拿大、英国、俄罗斯、日本等国家拥有成熟的销售市场和良好的品牌口碑。
                        </p>
                    </div>
                </div>
            </div>
            <div class="w3-clear"></div>
            <div class="w3-padding-32">
                <div class="w3-col w3-right w3-padding wow fadeInRight" style="width:560px">
                    <img src="/static/brand02.jpg" alt="" class="w3-block w3-card">
                </div>
                <div class="w3-rest w3-padding wow fadeInLeft">
                    <h1>PRODUCT ORIENTATION</h1>
                    <h3 class="w3-leftbar w3-padding w3-border-red">为懂而设计 /
                        <span class="w3-text-red w3-medium">产品定位</span>
                    </h3>
                    <div class="w3-container w3-text-gray">
                        <h3 class="w3-border-bottom w3-padding-16 w3-border-red">
                            只有拥有了好的睡眠<br>你才能知道这世界究竟有多美好

                        </h3>
                        <p class="">
                            舒览的产品更注重面向中国家庭，他们热爱生活，勤奋而务实，时刻为家人奔波忙碌，而享受生活的同时，他们更关注的则是健康。
                        </p>
                        <p>
                            和家人享受真正的健康睡眠，尽情、尽力地享受生活中的每一天，让人生更加完美。
                        </p>
                    </div>
                </div>
            </div>
            <div class="w3-clear"></div>
            <div class="w3-padding-32">
                <div class="w3-col w3-right w3-padding wow fadeInRight" style="width:560px">
                    <img src="/static/brand03.jpg" alt="" class="w3-block w3-card">

                </div>
                <div class="w3-rest w3-padding wow fadeInUp">
                    <h1>BRAND ATTITUDE</h1>
                    <h3 class="w3-leftbar w3-padding w3-border-red">有内在而不凡 /
                        <span class="w3-text-red w3-medium">品牌态度</span>
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
                    <img src="/static/brand04.jpg" alt="" class="w3-block w3-card">

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
export default {
  name: "brand",
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

</style>