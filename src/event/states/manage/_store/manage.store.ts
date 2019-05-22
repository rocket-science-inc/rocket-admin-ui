import { Module } from "vuex";

import { EventState as state, IManageEventStoreState } from "./manage.state";
import * as mutations from "./manage.mutations";
import * as actions from "./manage.actions"

export const ManageEventStore:Module<IManageEventStoreState, any> = {
    state,
    mutations,
    actions,
    namespaced: true
};