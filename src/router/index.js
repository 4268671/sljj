import Vue from "vue";
import Router from "vue-router";
import slindex from "@/pages/slindex";
import productlist from "@/pages/productlist";
import productdetail from "@/pages/productdetail";
import brand from "@/pages/brand";
import joinform from "@/pages/joinform";
import articledetail from "@/pages/articledetail";
import articlelist from "@/pages/articlelist";
import shop from "@/pages/shop";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
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
            component: productlist,
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
            component: articlelist,
        },
        {
            path: "/shop",
            name: "shop",
            component: shop,
        },
        {
            path: '/articlelist/articledetail/:id',
            name: 'articledetail',
            component: articledetail
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});