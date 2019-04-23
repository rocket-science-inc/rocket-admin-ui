import Vue from "vue";

import { RctTable } from "./table/table.component";

export class RctTablePlugin {

    public static install():void {
        Vue.component("rct-table", RctTable)
    };

};