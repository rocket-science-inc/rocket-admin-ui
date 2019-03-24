import { Component, Mixins, Emit } from "vue-property-decorator";
import { RctFormControl } from "./../base"
import { RctBaseTemplate, RctTextareaTemplate } from "./../templates";

@Component({
    template: RctBaseTemplate(RctTextareaTemplate())
})
export class RctFormTextarea extends Mixins(RctFormControl) {

    public type: string = "textarea";

};