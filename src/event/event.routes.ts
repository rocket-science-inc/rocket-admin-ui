import { RouteConfig } from "vue-router";

import { EventsPage } from "./states/events/events.component";
import { EventsAllPage } from "./states/events/all/all.component";

import { EventPage } from "./states/event/event.component";
import { EventManagePage } from "./states/event/manage/manage.component";

export const EventRoutes:RouteConfig[] = [{
    path: "/events",
    name: "events",
    component: EventsPage,
    meta: { root: "events.all" },
    children: [{
        path: "all",
        name: "events.all",
        component: EventsAllPage
    }]
}, {
    path: "/event",
    name: "event",
    component: EventPage,
    meta: { root: "events.all" },
    children: [{
        path: "create",
        name: "event.create",
        component: EventManagePage
    }]
}]