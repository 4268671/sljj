<template>
    <div>
        <div class="w3-padding-48" style="width:1200px;margin:auto;">
            <div class="w3-third">
                <img :src="logoimg" alt="" class="w3-padding-24">
                <!-- <span class="w3-text-gray w3-small w3-block">© 2018 舒览家居 版权所有 </span> -->
            </div>
            <div class="w3-rest w3-margin-left">
                <div class="w3-threequarter w3-text-light-gray">
                    <p class="w3-left w3-container">
                        <span>关于我们<br>About Shulan</span>
                    </p>
                    <p class="w3-left w3-container">
                        <span>舒览产品<br>Shulan Product</span>
                    </p>
                    <p class="w3-left w3-container">
                        <span>实体店铺<br>Entity Shop</span>
                    </p>
                    <p class="w3-left w3-container">
                        <span>联系我们<br>Contact Us</span>
                    </p>
                    <div class="w3-clear"></div>
                    <p class="w3-text-gray w3-container">© 2018 舒览家居 版权所有 </p>

                </div>
                <div class="w3-rest w3-center">
                    <img :src="qimg" alt="" class="w3-round-large" style="width:120px">
                    <span class="w3-text-light-gray w3-small w3-block">扫码关注 舒览服务号</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import logoimg from "@/assets/sl-logo.png"; // 默认logo图
import qimg from "@/assets/q2.jpg"; // 默认logo图
export default {
  data() {
    return {
      logoimg,
      qimg
    };
  }
};
</script>

<style scoped>

</style>