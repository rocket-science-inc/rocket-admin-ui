import { Component, Mixins } from "vue-property-decorator";
import { State, Action, namespace } from "vuex-class";
import EventPageTpl from "./event.component.vue";
import { EventDetailsTab } from "./details/details.component";
import { EventAgendaTab } from "./agenda/agenda.component";
import { EventStore } from "./_store/event.store";

const Namespace = namespace("event");

@Component({
    components: {
        "event-details-tab": EventDetailsTab,
        "event-agenda-tab": EventAgendaTab
    }
})
export class EventPage extends Mixins(EventPageTpl) {

    @Namespace.Action("getEvent") getEvent: (params:any) => void;
    @Namespace.State("loading") inprogress: boolean;
    @Namespace.State("event") event: any;
    
    public mounted():void {
        this.getEvent({ id: parseInt(this.$route.params.id) });
    };

}