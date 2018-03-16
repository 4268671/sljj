import Vue from "vue";
import Router from "vue-router";
// const slindex = require("@/pages/slindex");
// import productlist from "@/pages/productlist";
// import productdetail from "@/pages/productdetail";
// import brand from "@/pages/brand";
// import joinform from "@/pages/joinform";
// import articledetail from "@/pages/articledetail";
// import articlelist from "@/pages/articlelist";
// import shop from "@/pages/shop";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      name: "index",
      redirect: "/slindex"
    },
    {
      path: "/slindex",
      name: "slindex",
      component: resolve => require(["@/pages/slindex.vue"], resolve)
    },
    {
      path: "/productlist",
      name: "productlist",
      component: resolve => require(["@/pages/productlist.vue"], resolve)
    },
    {
      path: "/productlist/productdetail/:id",
      name: "productdetail",
      component: resolve => require(["@/pages/productdetail.vue"], resolve)
    },
    {
      path: "/brand",
      name: "brand",
      component: resolve => require(["@/pages/brand.vue"], resolve)
    },
    {
      path: "/joinform",
      name: "joinform",
      component: resolve => require(["@/pages/joinform.vue"], resolve)
    },
    {
      path: "/articlelist",
      name: "articlelist",
      component: resolve => require(["@/pages/articlelist.vue"], resolve)
    },
    {
      path: "/shop",
      name: "shop",
      component: resolve => require(["@/pages/shop.vue"], resolve)
    },
    {
      path: "/articlelist/articledetail/:id",
      name: "articledetail",
      component: resolve => require(["@/pages/articledetail.vue"], resolve)
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
