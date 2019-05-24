import { Component, Mixins, Prop, Provide } from "vue-property-decorator";
import RctFormTpl from "./form.component.vue";

@Component
export class RctForm extends Mixins(RctFormTpl) {

    @Prop({ default: false }) static: boolean;
    @Prop({ default: "" }) title: string;
    @Prop({ default: false }) inprogress: boolean;
    @Prop({ default: () => Promise.resolve({}) }) onSave: () => void;
    @Prop({ default: () => Promise.resolve({}) }) onCancel: () => void;

    private validities:any = {};

    @Provide("setValidity")
    public setValidity(id:string, validity:boolean):void {
        this.validities = {
            ...this.validities,
            [id]: validity
        };
    };

    @Provide("getValidity")
    public getValidity(id:string):void {
        return this.validities[id];
    };

    public get isValid():boolean {
        return Object.keys(this.validities)
            .every(key => this.validities[key])
    };

    public cancel():void {
        this.onCancel();
    };

    public save():void {
        this.onSave();
    };

};