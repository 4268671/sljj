import Vue from "vue";
import Router from "vue-router";

// 按需加载异步(页面)组件
// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
/* eslint-disable  global-require */
const home = resolve => {
  require.ensure(
    [],
    () => {
      resolve(require("@/pages/home"));
    },
    "Group-Index"
  );
};
const product = resolve => {
  require.ensure(
    [],
    () => {
      resolve(require("@/pages/product"));
    },
    "Group-Product"
  );
};
const productdetail = resolve => {
  require.ensure(
    [],
    () => {
      resolve(require("@/pages/productdetail"));
    },
    "Group-Product"
  );
};
const brand = resolve => {
  require.ensure(
    [],
    () => {
      resolve(require("@/pages/brand"));
    },
    "Group-Other"
  );
};
const join = resolve => {
  require.ensure(
    [],
    () => {
      resolve(require("@/pages/join"));
    },
    "Group-Other"
  );
};
const article = resolve => {
  require.ensure(
    [],
    () => {
      resolve(require("@/pages/article"));
    },
    "Group-Article"
  );
};
const shop = resolve => {
  require.ensure(
    [],
    () => {
      resolve(require("@/pages/shop"));
    },
    "Group-Other"
  );
};
const articledetail = resolve => {
  require.ensure(
    [],
    () => {
      resolve(require("@/pages/articledetail"));
    },
    "Group-Article"
  );
};

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      name: "index",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/product",
      name: "product",
      component: product
    },
    {
      path: "/product/detail/:id",
      name: "productdetail",
      component: productdetail
    },
    {
      path: "/brand",
      name: "brand",
      component: brand
    },
    {
      path: "/join",
      name: "join",
      component: join
    },
    {
      path: "/news",
      name: "news",
      component: article
    },
    {
      path: "/shop",
      name: "shop",
      component: shop
    },
    {
      path: "/article/detail/:id",
      name: "articledetail",
      component: articledetail
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
