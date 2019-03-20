import { RouteConfig } from "vue-router";

import { OrganizersPage } from "./states/organizers/organizers.component";
import { OrganizerPage } from "./states/organizer/organizer.component";
import { OrganazerManagePage } from "./states/organizer/manage/manage.component";

export const OrganizersRoutes:RouteConfig[] = [{
    path: "/organizers",
    name: "organizers",
    component: OrganizersPage
}, {
    path: "/organizer",
    name: "organizer",
    component: OrganizerPage,
    redirect: "/organizers",
    children: [{
        path: "create",
        name: "organizer.create",
        component: OrganazerManagePage
    }]
}]