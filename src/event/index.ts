import Vue from "vue";
import { RctToastPlugin } from "@rocket/toast";
import { RctFormsPlugin } from "@rocket/forms";
import { RctUiPlugin } from "@rocket/ui";
import { RctTablePlugin } from "@rocket/table";

Vue.use(RctToastPlugin);
Vue.use(RctFormsPlugin);
Vue.use(RctUiPlugin);
Vue.use(RctTablePlugin);

export class RctEventPlugin {

    public static install():void {};

};

export * from "./event.routes";
export * from "./event.store";