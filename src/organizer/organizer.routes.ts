import { RouteConfig } from "vue-router";

import { OrganizerPage } from "./states/organizer/organizer.component";

export const OrganizerRoutes:RouteConfig[] = [{
    path: "/organizer/:id",
    name: "organizer",
    component: OrganizerPage
}];