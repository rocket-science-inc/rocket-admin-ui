import Vue from "vue";
import { RctToastPlugin } from "@rocket/toast";
import { RctFormsPlugin } from "@rocket/forms";
import { RctUiPlugin } from "@rocket/ui";
import { RctTablePlugin } from "@rocket/table";
import { RctI18nPlugin } from "@rocket/i18n";

import { EventStore } from "./states/event/_store/event.store";
import { ManageEventStore } from "./states/manage/_store/manage.store";

Vue.use(RctToastPlugin);
Vue.use(RctFormsPlugin);
Vue.use(RctUiPlugin);
Vue.use(RctTablePlugin);
Vue.use(RctI18nPlugin);

export class RctEventPlugin {

    public static install():void {};

};

export const RctEventStore = {
    event: EventStore,
    manageEvent: ManageEventStore
};

export * from "./event.routes";
// export * from "./event.store";