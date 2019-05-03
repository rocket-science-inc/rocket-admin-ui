import Vue from "vue";
import { RctShellPlugin, Shell } from "@/shell";
import { RctEventPlugin } from "@/event";
import { RctOrganizerPlugin } from "@/organizer";

import { store } from "./store";
import { router } from "./router";

Vue.use(RctEventPlugin);
Vue.use(RctOrganizerPlugin);

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