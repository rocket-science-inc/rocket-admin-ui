import { Vue, Prop } from "vue-property-decorator";
import * as kebabCase from "lodash/kebabCase";

export abstract class RctFormControl extends Vue {

    @Prop(String) readonly label!: string;
    @Prop(String) readonly description: string;
    @Prop(Boolean) readonly disabled: boolean;

    public abstract type: string;

    public get id():string {
        return `rct-form-${this.type}-${kebabCase(this.label)}`;
    };

};