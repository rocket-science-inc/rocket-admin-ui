import { Component, Mixins } from "vue-property-decorator";
import EventsPageTpl from "./events.component.vue";
import { RctApi } from "@rocket/api";

@Component
export class EventsPage extends Mixins(EventsPageTpl) {

    private fields: any = {
        total: true,
        records: {
            id: true,
            title: true,
            organizer: true,
            time: {
                start: true
            }
        }
    };

    public events({page, count}:any):Promise<any> {
        return RctApi.event.query({page, count}, this.fields)
            .then(({ events }) => events)
    };
    
};