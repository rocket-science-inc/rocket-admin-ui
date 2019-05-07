import { Component, Mixins, Prop } from "vue-property-decorator";
import EventDetailsTabTpl from "./details.component.vue";

@Component
export class EventDetailsTab extends Mixins(EventDetailsTabTpl) {

    @Prop({ default: () => ({}) }) event: any;

}