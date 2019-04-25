import { Component, Mixins, Prop, Inject } from "vue-property-decorator";
import RctTableColTpl from "./col.component.vue"

@Component
export class RctTableCell extends Mixins(RctTableColTpl) {

    @Prop({ default: "" }) heading: string;
    @Prop({ default: "" }) sort: string;

}