import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import { DashboardRoutes } from "./dashboard/dashboard.routes";
import { EventRoutes } from "@/event";
import { OrganizerRoutes } from "@/organizer";
import { UserRoutes } from "./user/user.routes";

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
        ...OrganizerRoutes
    ]
})
