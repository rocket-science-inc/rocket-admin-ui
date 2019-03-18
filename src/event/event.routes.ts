import { RouteConfig } from "vue-router";

import { EventsPage } from "./states/events/events.component";

export const EventRoutes:RouteConfig[] = [{
    path: "/events",
    name: "events",
    component: EventsPage
}]