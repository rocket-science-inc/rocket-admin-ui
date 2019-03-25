import { Component, Emit, Watch, Mixins } from "vue-property-decorator";
import { RctFormControl } from "./../base";
import { RctDatetimepickerTemplate } from "./../templates";

@Component({
    template: RctDatetimepickerTemplate()
})
export class RctFormDatetimePicker extends Mixins(RctFormControl) {

    public type: string = "datetimepicker";

    @Watch("value")
    public watch(oldVal, newVal):void {
        if (newVal) this.$emit("model", new Date(this.value).getTime());
    };

    public formatter():any {
        return this.model ? new Date(this.model) : null;
    };

}