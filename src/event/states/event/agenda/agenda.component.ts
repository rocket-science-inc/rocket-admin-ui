import { Component, Mixins, Prop } from "vue-property-decorator";
import EventAgendaTabTpl from "./agenda.component.vue";

@Component
export class EventAgendaTab extends Mixins(EventAgendaTabTpl) {

    @Prop({ default: () => [] }) agenda: any[]

};