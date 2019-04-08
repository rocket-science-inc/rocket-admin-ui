import Vue from "vue";
import VueMaterial from "vue-material";

import { RctLoader } from "./loader/loader.directive";

const styles = require("./styles/styles.scss");

Vue.use(VueMaterial)

export class RctUiPlugin {

    public static install():void {
        Vue.directive("rct-loader", RctLoader)
    };

};