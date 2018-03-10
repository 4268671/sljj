<template>
    <div class="w3-center w3-panel w3-text-gray" style="padding:20px 0">
        <router-link :to="{name: 'page1'}">
            <span class="w3-large w3-padding w3-round">网站首页</span>
        </router-link>
        <router-link :to="{name: 'page4'}">
            <span class="w3-large w3-margin-left w3-padding w3-round">舒览品牌</span>
        </router-link>
        <router-link :to="{name: 'page3'}">
            <span class="w3-large w3-margin-left w3-padding w3-round">最新动态</span>
        </router-link>
        <router-link :to="{name: 'page2'}">
            <span class="w3-large w3-margin-left w3-padding w3-round">产品中心</span>
        </router-link>
        <router-link :to="{name: 'page7'}">
            <span class="w3-large w3-margin-left w3-padding w3-round">实体店铺</span>
        </router-link>
        <router-link :to="{name: 'page5'}">
            <span class="w3-large w3-margin-left w3-padding w3-round">加盟招商</span>
        </router-link>
        <router-link :to="{name: 'page6'}">
            <span class="w3-large w3-margin-left w3-padding w3-round">旗舰店购买
                <span class="w3-tag w3-red w3-tiny w3-round-xlarge">hot</span>
            </span>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {}
    };
</script>

<style scoped>
    a {
        text-decoration: none;
    }
    
    a span {
        transition: all 1s;
    }
    
    a:hover>span {
        background-color: #e94441;
        transition: all 0.5s;
        color: white;
        /* box-shadow: 0 2px 8px #cccccc; */
    }
    
    .w3-tag {
        position: absolute;
    }
</style>