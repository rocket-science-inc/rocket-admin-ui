import { Component, Prop, Emit, Mixins } from "vue-property-decorator";
import { CoolSelect } from 'vue-cool-select';
import { RctFormControl } from "./../base";
import { Autocomplete } from "./../../decorators/autocomplete/autocomplete.component";

@Component({
    components: { autocomplete: Autocomplete },
    template: require("./autocomplete.component.html")
})
export class RctFormAutocomplete extends Mixins(RctFormControl) {

    @Prop() options: (q:string) => Promise<any[]>;
    @Prop(String) noDataMsg: string;

    public type: string = "autocomplete";
    public lookup: any[] = [];
    public value: string = "123";

    public update(e):void {
        this.options(this.value).then(lookup => {
            this.lookup = lookup.map(item => {
                return {...item, toLowerCase: () => item.name.toLowerCase()}
            });
        })
    };

}