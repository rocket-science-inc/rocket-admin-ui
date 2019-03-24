import { RouteConfig } from "vue-router";

import { EventsPage } from "./states/events/events.component";
import { EventPage } from "./states/event/event.component";
import { EventManagePage } from "./states/event/manage/manage.component";

export const EventRoutes:RouteConfig[] = [{
    path: "/events",
    name: "events",
    component: EventsPage
}, {
    path: "/event",
    name: "event",
    component: EventPage,
    children: [{
        path: "create",
        name: "event.create",
        component: EventManagePage
    }]
}]