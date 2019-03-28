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
    @Prop() optLabel: string;
    @Prop() optValue: string;

    public type: string = "autocomplete";
    public loading: boolean = false;
    public lookup: any[] = [];

    public search(query):void {
        this.loading = true;
        this.options(query).then(lookup => {
            this.lookup = lookup;
            this.loading = false;
        });
    };

}