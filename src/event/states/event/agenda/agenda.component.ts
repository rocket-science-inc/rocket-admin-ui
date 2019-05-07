import { Component, Mixins } from "vue-property-decorator";
import EventAgendaTabTpl from "./agenda.component.vue";

@Component
export class EventAgendaTab extends Mixins(EventAgendaTabTpl) {}