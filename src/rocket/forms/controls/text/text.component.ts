import { Component } from "vue-property-decorator";
import { RctFormControl } from "./../base";
import { RctBaseTemplate, RctInputTemplate } from "./../templates";

@Component({
    template: RctBaseTemplate(
        RctInputTemplate("text")
    )
})
export class RctFormText extends RctFormControl {

    public type: string = "text";

}