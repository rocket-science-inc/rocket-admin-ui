import { Component, Mixins, Prop } from "vue-property-decorator";
import RctPageTpl from "./page.component.vue";

@Component
export class RctPage extends Mixins(RctPageTpl) {

    @Prop({ default: false }) inprogress: boolean;

}