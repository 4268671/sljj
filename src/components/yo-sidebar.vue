<template>
    <div class="w3-sidebar animated slideInRight">
        <div class="w3-red w3-round">
            <router-link :to="{name: 'slindex'}" title="首页">
                <i class="fa fa-2x fa-home " aria-hidden="true">
                </i>
            </router-link>
            <!-- <router-link :to="{name: 'slindex'}"><i class="fa fa-2x fa-columns w3-text-gray" aria-hidden="true"></i></router-link> -->
            <!-- <router-link :to="{name: 'productlist'}">
            <i class="fa fa-2x fa-navicon w3-green" aria-hidden="true"></i>
        </router-link>
        <router-link :to="{name: 'productdetail'}">
            <i class="fa fa-2x fa-share-alt-square w3-green" aria-hidden="true"></i>
        </router-link> -->
            <a href="javascript:false" @click="retop()" title="回到顶部">
                <i class="fa fa-2x fa-arrow-up" aria-hidden="true"></i>
            </a>
            <!-- 回到顶部 -->
        </div>
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
  padding-top: 50vh;
  overflow: hidden;
}

i {
  padding: 8px 6px;
}
</style>