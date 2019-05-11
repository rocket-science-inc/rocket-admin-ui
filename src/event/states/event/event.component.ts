import { Component, Mixins, Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";
import EventPageTpl from "./event.component.vue";
import { EventDetailsTab } from "./details/details.component";
import { EventAgendaTab } from "./agenda/agenda.component";

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
    @Namespace.State("errors") errors: string[];

    @Watch("errors")
    public errorHandler(value:string[]):void {
        value.forEach(error => {
            this.$toast.error(error)
        });
    };
    
    public mounted():void {
        this.getEvent({ id: parseInt(this.$route.params.id) });
    };

}