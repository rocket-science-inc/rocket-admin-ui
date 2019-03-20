import Vue from "vue";
import { RctUiPlugin } from "@rocket/ui";
import { RctFormsPlugin } from "@rocket/forms";
import { Shell } from "@/shell/shell.component";

import { store } from "./store";
import { router } from "./router";

Vue.use(RctUiPlugin)
Vue.use(RctFormsPlugin);

const app = new Vue({
    render: (el) => el(Shell),
    store, router
}).$mount('#app')