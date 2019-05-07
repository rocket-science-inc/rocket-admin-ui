import Vue from "vue";
import Vuex, { Store } from "vuex";

import { RctEventStore } from "@/event";

Vue.use(Vuex);

export const store = new Store({
    modules: {
        ...RctEventStore
    }
});