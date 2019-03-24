import { Component, Prop, Emit } from "vue-property-decorator";
import { RctFormControl } from "./../base";

@Component({
    template: require("./autocomplete.component.html")
})
export class RctFormAutocomplete extends RctFormControl {

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

    @Emit("model")
    public changed() {
        return this.value
    };

}