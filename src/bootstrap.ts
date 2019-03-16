import Vue from "vue";
import { Shell } from "@/shell/shell.component";

const app = new Vue({
    render: (el) => el(Shell)
    //router
}).$mount('#app')