import Vue from "vue";
import { RctToastPlugin } from "@rocket/toast";

import { RctTable } from "./table/table.component";
import { RctTableCell } from "./table/raw/cell/col.component";

Vue.use(RctToastPlugin);

export class RctTablePlugin {

    public static install():void {
        Vue.component("rct-table", RctTable);
        Vue.component("rct-table-cell", RctTableCell);
    };

};