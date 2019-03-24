import { Vue, Prop, Emit, Model, Component, Watch } from "vue-property-decorator";
import * as kebabCase from "lodash/kebabCase";

@Component
export class RctFormControl extends Vue {

    @Prop(String) readonly label!: string;
    @Prop(String) readonly description: string;
    @Prop(Boolean) readonly disabled: boolean;
    @Model("model") readonly model!: any;

    public value: any = null;
    public type: string = "control";

    public get id():string {
        return `rct-form-${this.type}-${kebabCase(this.label)}`;
    };

    @Emit("model")
    public changed():void {
        return this.value
    };

};