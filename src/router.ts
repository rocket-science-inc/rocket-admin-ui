import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import { DashboardRoutes } from "./dashboard/dashboard.routes";
import { EventRoutes } from "./event/event.routes";
import { UserRoutes } from "./user/user.routes";
import { OrganizersRoutes } from "./organizer/organizer.routes";

Vue.use(VueRouter);

const GlobalRoutes:RouteConfig[] = [{
    path: "/",
    redirect: "dashboard"
}];

export const router = new VueRouter({
    routes: [
        ...GlobalRoutes,
        ...DashboardRoutes,
        ...EventRoutes,
        ...UserRoutes,
        ...OrganizersRoutes
    ]
})
