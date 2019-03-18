import Vue from "vue";
import Vuex, { Store } from "vuex";

import { EventStore } from "@/event/event.store";

Vue.use(Vuex);

export const store = new Store({
    modules: {
        event: EventStore
    }
})