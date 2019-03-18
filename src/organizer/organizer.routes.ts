import { RouteConfig } from "vue-router";

import { OrganizersPage } from "./states/organizers/organizers.component";

export const OrganizersRoutes:RouteConfig[] = [{
    path: "/organizers",
    name: "organizers",
    component: OrganizersPage
}]