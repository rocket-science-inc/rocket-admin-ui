import Vue from "vue";
import { RctUiPlugin } from "@rocket/ui";
import { RctFormsPlugin } from "@rocket/forms";
import { RctShellPlugin, Shell } from "@/shell";

import { store } from "./store";
import { router } from "./router";

Vue.use(RctUiPlugin)
Vue.use(RctFormsPlugin);
Vue.use(RctShellPlugin, {
    navigation: [{
        anchor: "Dashboard",
        icon: "dashboard",
        state: { name: "dashboard" }
    }, {
        anchor: "Events",
        icon: "date_range",
        state: { name: "events.all" },
        children: [{
            anchor: "Events",
            state: { name: "events.all" },
        }]
    }, {
        anchor: "Users",
        icon: "person",
        state: { name: "users" }
    }]
});

const app = new Vue({
    render: (el) => el(Shell),
    store, router
}).$mount('#app')