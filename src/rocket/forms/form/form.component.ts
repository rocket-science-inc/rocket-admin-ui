import { Component, Mixins, Prop } from "vue-property-decorator";
import RctFormTpl from "./form.component.vue";

@Component
export class RctForm extends Mixins(RctFormTpl) {

    @Prop({ default: false }) static: boolean;
    @Prop({ default: "" }) title: string;
    @Prop({ default: false }) inprogress: boolean;
    @Prop({ default: () => Promise.resolve({}) }) onSave: () => void;
    @Prop({ default: () => Promise.resolve({}) }) onCancel: () => void;

    public cancel():void {
        this.onCancel();
    };

    public save():void {
        this.onSave();
    };

};