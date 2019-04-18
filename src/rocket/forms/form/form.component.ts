import { Component, Mixins, Prop } from "vue-property-decorator";
import RctFormTpl from "./form.component.vue";

@Component
export class RctForm extends Mixins(RctFormTpl) {

    @Prop({ default: false }) static: boolean;
    @Prop({ default: "" }) title: string;
    @Prop({ default: () => Promise.resolve({}) }) model: () => Promise<any>;
    @Prop({ default: () => Promise.resolve({}) }) save: (model:any) => Promise<any>;

    public inprogress: boolean = false;
    public form: any = {};

    public onSave():void {
        this.save(this.form);
    };

    public mounted():void {
        this.inprogress = true;
        this.model().then(model => {
            this.form = model;
            this.inprogress = true;
        });
    };

};