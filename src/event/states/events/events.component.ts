import { Component, Mixins } from "vue-property-decorator";
import EventsPageTpl from "./events.component.vue";

@Component
export class EventsPage extends Mixins(EventsPageTpl) {

    public events():Promise<any> {
        return Promise.resolve(new Array(200).fill(0).map((r, i) => {
            return {
                title: `Event ${i + 1}`
            }
        })).then(records => {
            return { records, total: records.length }
        })
    };
    
}