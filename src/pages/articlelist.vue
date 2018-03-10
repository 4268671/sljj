<template>
    <div>
        <img :src="imgsrc" alt="" class="w3-block">
        <div style="width:1200px;margin:auto">
            <h3 class="w3-border-bottom w3-padding-16">
                <span class="w3-bottombar w3-border-red" style="padding-bottom:13px">舒览最新动态</span>
            </h3>
            <ul class="w3-ul">
                
                <li v-for="n in 10" :key="n" class="w3-light-gray w3-border-bottom ">
                        <a href="">
                    
        <img :src="imgp" alt="" class="w3-left w3-margin-right w3-padding" style="height:187px">
                <div class="w3-light-gray" style="padding:0 50px;height:196px;overflow: hidden">
                        <h2>标题标题标题标题标题标题</h2>
                        <i class="w3-text-gray">
                        <i class="fa fa-quote-left"></i>
                        简介：{{textp}}<i class="fa fa-quote-right"></i>                
                        </i>
                    </div>
                </a>
            </li>
            </ul>
            <yo-bar :propbars="10"></yo-bar>
        </div>
    </div>
</template>

<script>
import yoBar from '../components/yo-bar.vue'
export default {
    name: "articlelist",
    data() {
        return {
            imgsrc: Mock.Random.image("1800x300", "#eeeeee"),
            imgp: Mock.Random.image("800x600", "#eeeeee"),
            textp: Mock.mock("@cparagraph(5, 10)")
        };
    },
    components: {yoBar}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    a div {
        transition: all 0.5s;
    }
    
    a:hover div {
        color: #e94441 !important;
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