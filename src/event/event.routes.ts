import { RouteConfig } from "vue-router";

import { EventsPage } from "./states/events/events.component";

import { EventPage } from "./states/event/event.component";
import { EventManagePage } from "./states/manage/manage.component";

export const EventRoutes:RouteConfig[] = [{
    path: "/events",
    name: "events",
    component: EventsPage,
    meta: { root: "events.all" }
}, {
    path: "/event/:id",
    name: "event",
    component: EventPage,
    meta: { root: "events.all" }
}, {
    path: "/create-event",
    name: "createEvent",
    component: EventManagePage,
    meta: { root: "events.all" },
}, {
    path: "/edit-event/:id",
    name: "editEvent",
    component: EventManagePage,
    meta: { root: "events.all" },
}]