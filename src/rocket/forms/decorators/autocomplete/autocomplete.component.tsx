import { Component, Mixins, Vue } from "vue-property-decorator";
import { CoolSelect } from "vue-cool-select";
import Template from "./autocomplete.component.vue";


@Component
export class Autocomplete extends Mixins(CoolSelect, Template) {}