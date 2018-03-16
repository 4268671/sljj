<template>
    <div class="w3-center w3-panel w3-text-gray animated fadeInDown" style="padding:20px 0">
        <ul class="w3-ul w3-show-inline-block">
            <li class="w3-left">
                        <router-link :to="{name: 'slindex'}">
            <span class="w3-large">网站首页</span>
        </router-link>
            </li>
            <li class="w3-left">
                        <router-link :to="{name: 'brand'}">
            <span class="w3-large">舒览品牌</span>
        </router-link>
            </li>
            <li class="w3-left">
                        <router-link :to="{name: 'articlelist'}">
            <span class="w3-large">最新动态</span>
        </router-link>
            </li>
            <li class="w3-left">
                        <router-link :to="{name: 'productlist'}">
            <span class="w3-large">产品中心</span>
        </router-link>
            </li>
            <li class="w3-left">
                        <router-link :to="{name: 'shop'}">
            <span class="w3-large">实体店铺</span>
        </router-link>
            </li>
            <li class="w3-left">
                        <router-link :to="{name: 'joinform'}">
            <span class="w3-large">加盟招商</span>
        </router-link>
            </li>
            <li class="w3-left">
                        <a href="" target="_">
            <span class="w3-large">旗舰店购买
            </span>
                <div class="w3-tag w3-red w3-tiny w3-round-xlarge">hot</div>
        </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
a > span {
  transition: all 0.3s;
  padding: 8px 18px;
}
.router-link-active {
  background-color: #e84441;
  color: white;
  padding: 11px 0 9px 0;
}
a:hover > span {
  background-color: #e84441;
  color: white;
  padding: 8px 18px 9px 18px;
  transition: all 0.5s;
}
.w3-tag {
  position: absolute;
  top:20px;
  margin-left: 45px;
}
</style>