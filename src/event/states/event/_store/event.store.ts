import { Module } from "vuex";

import { EventState as state } from "./event.state";
import * as mutations from "./event.mutations";
import * as actions from "./event.actions"

interface IEventStoreState {
    loading: boolean
};

export const EventStore:Module<IEventStoreState, any> = {
    state,
    mutations,
    actions,
    namespaced: true
};