import { Component, Prop, Watch, Mixins, Emit } from "vue-property-decorator";
// import Debounce from "debounce-decorator"
import * as debounce from "lodash/debounce";
import { RctFormControl } from "./../base";
import { Autocomplete } from "./../../decorators/autocomplete/autocomplete.component";

@Component({
    components: { autocomplete: Autocomplete },
    template: require("./autocomplete.component.html")
})
export class RctFormAutocomplete extends Mixins(RctFormControl) {

    @Prop() options: (q:string, init?: boolean) => Promise<any[]>;
    @Prop({default: "id"}) optValue: string;
    @Prop({default: "title"}) optLabel: string;
    @Prop({default: "string"}) format: any;

    public type: string = "autocomplete";
    public loading: boolean = false;
    public lookup: any[] = [];

    // @Emit("model")
    // public changed():any {
    //     if (this.format == "object") {
    //         return this.lookup.find(option => {
    //             return option[this.optValue] == this.value
    //         })
    //     } else {
    //         return this.value;
    //     }
    // };

    @Watch("model")
    public setvalue():void {
        if (!this.value) {
            this.loading = true;
            this.defopts().then(lookup => {
                this.lookup = lookup;
                this.loading = false;
            });
        };
        this.value = this.formatter();
    };

    public search():void {};

    public created():void {
        this.search = debounce((query) => {
            this.loading = true;
            this.options(query).then(lookup => {
                this.lookup = lookup;
                this.loading = false;
            });
        }, 300);
    };

    public mounted():void {
        this.value = this.formatter();
        this.loading = true;
        this.defopts().then(lookup => {
            this.lookup = lookup;
            this.loading = false;
        });
    };

    private defopts():Promise<any[]> {
        if (this.model) {
            return this.options(this.model, true);
        } else {
            return Promise.resolve([]);
        }
    };

};