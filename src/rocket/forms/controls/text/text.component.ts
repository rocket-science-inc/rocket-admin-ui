import { Component, Mixins } from "vue-property-decorator";
import { RctFormControl } from "./../base";
import { RctBaseTemplate, RctInputTemplate } from "./../templates";

@Component({
    template: RctBaseTemplate(
        RctInputTemplate("text")
    )
})
export class RctFormText extends Mixins(RctFormControl) {

    public type: string = "text";

}