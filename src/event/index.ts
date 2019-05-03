import Vue from "vue";
import { RctToastPlugin } from "@rocket/toast";
import { RctFormsPlugin } from "@rocket/forms";
import { RctUiPlugin } from "@rocket/ui";
import { RctTablePlugin } from "@rocket/table";
import { RctI18nPlugin } from "@rocket/i18n";

Vue.use(RctToastPlugin);
Vue.use(RctFormsPlugin);
Vue.use(RctUiPlugin);
Vue.use(RctTablePlugin);
Vue.use(RctI18nPlugin);

export class RctEventPlugin {

    public static install():void {};

};

export * from "./event.routes";
export * from "./event.store";