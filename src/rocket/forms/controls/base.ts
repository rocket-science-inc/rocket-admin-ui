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

    @Emit("model")
    public changed():void {
        return this.value
    };

    @Watch("model")
    public setvalue():void {
        this.value = this.formatter();
    };

    public get id():string {
        return `rct-form-${this.type}-${kebabCase(this.label)}`;
    };

    public formatter():any {
        return this.model
    };

    public mounted():void {
        this.value = this.formatter();
    };

};