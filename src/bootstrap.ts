import Vue from "vue";
import { RctFormsPlugin } from "@rocket/forms";
import { RctShellPlugin, Shell } from "@/shell";
import { RctEventPlugin } from "@/event";

import { store } from "./store";
import { router } from "./router";

Vue.use(RctFormsPlugin);
Vue.use(RctEventPlugin);

Vue.use(RctShellPlugin, {
    navigation: [{
        anchor: "Dashboard",
        icon: "dashboard",
        state: { name: "dashboard" }
    }, {
        anchor: "Events",
        icon: "date_range",
        state: { name: "events" },
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