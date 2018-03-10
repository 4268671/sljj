import Vue from "vue";
import Router from "vue-router";
import page1 from "@/pages/page1";
import page2 from "@/pages/page2";
import page3 from "@/pages/page3";
import page4 from "@/pages/page4";
import page5 from "@/pages/page5";
import page6 from "@/pages/page6";
import page7 from "@/pages/page7";

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [{
            path: "/",
            name: "index",
            redirect: "/page1"
        },
        {
            path: "/page1",
            name: "page1",
            component: page1
        },
        {
            path: "/page2",
            name: "page2",
            component: page2
        },
        {
            path: "/page3",
            name: "page3",
            component: page3
        },
        {
            path: "/page4",
            name: "page4",
            component: page4
        },
        {
            path: "/page5",
            name: "page5",
            component: page5
        },
        {
            path: "/page6",
            name: "page6",
            component: page6
        },
        {
            path: "/page7",
            name: "page7",
            component: page7
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});