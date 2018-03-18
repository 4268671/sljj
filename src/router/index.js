import Vue from "vue";
import Router from "vue-router";

// 按需加载异步(页面)组件
// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
/* eslint-disable  global-require */
const slindex = resolve => {
  require.ensure(
    [],
    () => {
      resolve(require("@/pages/slindex"));
    },
    "Group-Index"
  );
};
const productlist = resolve => {
  require.ensure(
    [],
    () => {
      resolve(require("@/pages/productlist"));
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
const joinform = resolve => {
  require.ensure(
    [],
    () => {
      resolve(require("@/pages/joinform"));
    },
    "Group-Other"
  );
};
const articlelist = resolve => {
  require.ensure(
    [],
    () => {
      resolve(require("@/pages/articlelist"));
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
      redirect: "/slindex"
    },
    {
      path: "/slindex",
      name: "slindex",
      component: slindex
    },
    {
      path: "/productlist",
      name: "productlist",
      component: productlist
    },
    {
      path: "/productlist/productdetail/:id",
      name: "productdetail",
      component: productdetail
    },
    {
      path: "/brand",
      name: "brand",
      component: brand
    },
    {
      path: "/joinform",
      name: "joinform",
      component: joinform
    },
    {
      path: "/articlelist",
      name: "articlelist",
      component: articlelist
    },
    {
      path: "/shop",
      name: "shop",
      component: shop
    },
    {
      path: "/articlelist/articledetail/:id",
      name: "articledetail",
      component: articledetail
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
