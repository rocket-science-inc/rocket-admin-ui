import Vue from "vue";
import VueMaterial from "vue-material";

import { RctLoader } from "./loader/loader.component";
import { RctPage } from "./page/page.component";
import { RctImg } from "./img/img.component";
import { RctNoResults } from "./no-results/no.results.component";
import { RctLayoutItem } from "./layout-item/layout.item.drective";

const styles = require("./styles/styles.scss");

Vue.use(VueMaterial)

export class RctUiPlugin {

    public static install():void {
        Vue.component("rct-loader", RctLoader);
        Vue.component("rct-page", RctPage);
        Vue.component("rct-img", RctImg);
        Vue.component("rct-no-results", RctNoResults)
        Vue.directive("rct-layout-item", RctLayoutItem);
    };

};