import { RouteConfig } from "vue-router";

import { DashboardPage } from "./states/dashboard/dashboard.component";

export const DashboardRoutes:RouteConfig[] = [{
    path: "/dashboard",
    name: "dashboard",
    component: DashboardPage
}]