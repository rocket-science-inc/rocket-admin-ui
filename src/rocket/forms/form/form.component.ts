import { Component, Mixins, Prop } from "vue-property-decorator";
import RctFormTpl from "./form.component.vue";

@Component
export class RctForm extends Mixins(RctFormTpl) {

    @Prop({ default: false }) static: boolean;
    @Prop({ default: "" }) title: string;
    @Prop({ default: false }) inprogress: boolean;
    @Prop({ default: () => Promise.resolve({}) }) onSave: () => void;
    @Prop({ default: () => {} }) onSaveSuccess: (model:any) => void;

    public form: any = {};

    public save():void {
        this.onSave();
        // this.inprogress = true;
        // this.onSave(this.form).then((model) => {
        //     return this.onSaveSuccess(model);
        // }).then(this.model.bind(this)).then(model => {
        //     this.form = model;
        //     this.inprogress = false;
        // });
    };

    public mounted():void {
        //this.inprogress = true;
        // this.model().then(model => {
        //     this.form = model;
        //     this.inprogress = false;
        // });
    };

};