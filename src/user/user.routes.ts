import { RouteConfig } from "vue-router";

import { UsersPage } from "./states/users/users.component";

export const UserRoutes:RouteConfig[] = [{
    path: "/users",
    name: "users",
    component: UsersPage
}]