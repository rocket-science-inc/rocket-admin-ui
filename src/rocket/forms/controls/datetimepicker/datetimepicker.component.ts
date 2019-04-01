import { Component, Watch, Mixins } from "vue-property-decorator";
import { RctFormControl } from "./../base";
import { Timepicket } from "./../../decorators/timepicker/timepicker.component";
import Template from "./datetimepicker.component.vue"


@Component({
    components: { timepicker: Timepicket }
})
export class RctFormDatetimePicker extends Mixins(Template, RctFormControl) {

    public type: string = "datetimepicker";
    public value: any = { date: null, time: { HH: null, mm: null } };

    @Watch("value.date")
    public watch(oldVal, newVal):void {
        if (newVal) this.$emit("model", this.parser(this.value));
    };

    public formatter():any {
        if (this.model) {
            return {

            }
        } else {
            return { date: null, time: { HH: null, mm: null } }
        };
    };

    public parser(value):number {
        return
    };

    public change():void {
        this.$emit("model", this.parser(this.value));
    };

};