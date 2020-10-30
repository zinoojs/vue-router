import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import store from "@/store";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    linkExactActiveClass: "zinoo-class",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            const position = {}
            if (to.hash) {
                position.selector = to.hash;
                if (to.hash === '#experience') {
                    position.offset = { y: 150 }
                }
                if (document.querySelector(to.hash)) {
                    return position;
                }
                return false;
            }
        }
    },

    routes: [{
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/destination/:slug",
            name: "DestinationDetails",
            props: true,
            component: () =>
                import ( /* webpackChunkName: "DestinationDetail" */ "./views/DestinationDetails.vue"),
            children: [{
                path: ":experiencesSlug",
                name: "ExperiencesDetails",
                props: true,
                component: () =>
                    import ( /* webpackChunkName: "ExperiencesDetails" */ "./views/ExperiencesDetails.vue"),
            }],
            beforeEnter: (to, from, next) => {
                const exists = store.destinations.find(
                    destination => destination.slug === to.params.slug
                )
                if (exists) {
                    next()
                } else {
                    next({ name: "NotFound" })
                }
            }
        },
        {
            path: "/404",
            alias: "*",
            name: "NotFound",
            component: () =>
                import ( /* webpackChunkName: "NotFound" */ "./views/NotFound")
        }
    ]
});