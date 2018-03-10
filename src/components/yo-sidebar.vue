<template>
    <div class="w3-sidebar animated slideInRight">
        <router-link :to="{name: 'index'}" title="首页">
            <i class="fa fa-2x fa-home w3-red" aria-hidden="true">
            </i>
        </router-link>
        <!-- <router-link :to="{name: 'slindex'}"><i class="fa fa-2x fa-columns w3-text-gray" aria-hidden="true"></i></router-link> -->
        <!-- <router-link :to="{name: 'productlist'}">
            <i class="fa fa-2x fa-navicon w3-green" aria-hidden="true"></i>
        </router-link>
        <router-link :to="{name: 'productdetail'}">
            <i class="fa fa-2x fa-share-alt-square w3-green" aria-hidden="true"></i>
        </router-link> -->
        <a href="javascript:fasle" @click="retop()" title="回到顶部">
            <i class="fa fa-2x fa-arrow-up w3-red" aria-hidden="true"></i>
        </a>
        <!-- 回到顶部 -->
    </div>
</template>

<script>
export default {
  props: {},
  methods: {
    retop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<style scoped>
.w3-sidebar {
  padding-top: 40vh;
  overflow: hidden;
}

i {
  padding: 6px 6px;
}
</style>