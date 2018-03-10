import Vue from "vue";
import Router from "vue-router";
import slindex from "@/pages/slindex";
import productlist from "@/pages/productlist";
import productdetail from "@/pages/productdetail";
import page4 from "@/pages/page4";
import joinform from "@/pages/joinform";
import articledetail from "@/pages/articledetail";
import articlelist from "@/pages/articlelist";

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [{
            path: "/",
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
            path: "/productdetail",
            name: "productdetail",
            component: productdetail
        },
        {
            path: "/page4",
            name: "page4",
            component: page4
        },
        {
            path: "/joinform",
            name: "joinform",
            component: joinform
        },
        {
            path: "/articledetail",
            name: "articledetail",
            component: articledetail
        },
        {
            path: "/articlelist",
            name: "articlelist",
            component: articlelist
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});