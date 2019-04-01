import { Component, Mixins } from "vue-property-decorator";
import VueTimepicker from "vue2-timepicker";
import Template from "./timepicker.component.vue";

@Component
export class Timepicket extends Mixins(VueTimepicker, Template) {}
