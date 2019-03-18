import Vue from "vue";
import { UiPlugin } from "@plugins/ui";
import { Shell } from "@/shell/shell.component";

import { store } from "./store";
import { router } from "./router";

Vue.use(UiPlugin)

const app = new Vue({
    render: (el) => el(Shell),
    store, router
}).$mount('#app')