<template>
    <div>
        <yo-slideshow style="height:500px" class="wow flipInX"></yo-slideshow>
        <!--  -->
        <div class="w3-padding-32 w3-row">
            <div class="w3-third w3-center w3-tag w3-white wow bounceInUp">
                    <h1><i class="fa fa-align-center"></i></h1>
                <h2>来自法国
                </h2>
                <p>Brand Introduction</p>
            </div>
            <div class="w3-third w3-center w3-tag w3-white wow bounceInUp" data-wow-delay="0.3s">
                    <h1><i class="fa fa-th-large"></i></h1>
                <h2>产品中心</h2>
                <p>Product Center</p>
            </div>
            <div class="w3-third w3-center w3-tag w3-white wow bounceInUp" data-wow-delay="0.6s">
                <h1><i class="fa fa-sitemap"></i></h1>
                <h2>
                    招商加盟
                </h2>
                <p>Merchants Joined</p>
            </div>
        </div>
        <!--  -->
        <div class="w3-padding-32">
            <img :src="imgsrc" alt="" class="w3-block wow bounceIn">
        </div>
        <!--  -->
        <div class="w3-row w3-margin-top wow flipInY">
            <h2 class="w3-center w3-panel">最新动态
                <p class="w3-medium">Latest News</p>
            </h2>
            <div class="w3-quarter w3-padding">
                <img :src="imgp" alt="" class="w3-block wow fadeInLeft">
            </div>
            <div class="w3-half">
                <ul class="w3-ul w3-padding wow fadeInUp">
                    <a href="">
                        <li id="newslist" class="w3-margin-bottom" v-for="n in 4" :key="n">
                            <h2 class="w3-col" style="width:100px;margin-top:24px">03/07</h2>
                            <div class="w3-rest w3-border-left w3-padding">
                                <h4>文章标题文章标题文章标题文章标题文章标题</h4>
                                <div>
                                    简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介
                                </div>
                            </div>
                        </li>
                    </a>
                </ul>
            </div>
            <div class="w3-quarter w3-padding">
                <img :src="imgp" alt="" class="w3-block wow fadeInRight">
            </div>
        </div>
    </div>
</template>

<script>
    new WOW().init();
    import yoSlideshow from "../components/yo-slideshow.vue";
    export default {
        name: "page1",
        data() {
            return {
                imgsrc: Mock.Random.image("1800x500", "#eeeeee"),
                imgp: Mock.Random.image("400x530", "#eeeeee")
            };
        },
        components: {
            yoSlideshow
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
        background-color: #e94441;
        transition: all 0.5s;
        /* box-shadow: 2px 2px 10px #aaaaaa; */
    }
    .w3-tag{
        transition: all 0.5s;        
    }
    .w3-tag:hover{
        background-color: #eeeeee!important;
        color: #e94441!important;
        transition: all 0.5s;        
    }
</style>