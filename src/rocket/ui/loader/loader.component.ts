import { Component, Mixins, Prop } from "vue-property-decorator";
import RctLoaderTpl from "./loader.component.vue";

@Component
export class RctLoader extends Mixins(RctLoaderTpl) {

    @Prop({ default: false }) inprogress: boolean;

}