import { Vue, Prop, Emit, Model, Component, Watch, Inject } from "vue-property-decorator";
import * as kebabCase from "lodash/kebabCase";
import * as uniqueId from "lodash/uniqueId";
import { ValidationService } from "./../validation/validation.service";
import { RctValidation } from "./../validation/validation.directive";

@Component({
    directives: {
        validation: RctValidation
    }
})
export class RctFormControl extends Vue {

    @Prop(String) readonly label!: string;
    @Prop(String) readonly description: string;
    @Prop(Boolean) readonly disabled: boolean;
    @Prop({ default: () => ({}) }) readonly validation: any;
    @Model("model") readonly model!: any;
    @Inject("setValidity") readonly setValidity: (id:string, validity:boolean) => void;
    @Inject("getValidity") readonly getValidity: (id:string) => boolean;

    public value: any = null;
    public type: string = "control";
    public errors: string[] = [];
    
    private pristine: boolean = true;

    @Emit("model")
    public changed():void {
        return this.value
    };

    @Watch("model")
    public setvalue():void {
        this.value = this.formatter();
    };

    public get id():string {
        return uniqueId(`rct-form-${this.type}-${kebabCase(this.label)}-`);
    };

    public get isRequired():boolean {
        return this.validation.required
    };

    public get isInvalid():boolean {
        return !this.pristine && !this.getValidity(this.id);
    };

    public formatter():any {
        return this.model
    };

    public mounted():void {
        this.value = this.formatter();
        ValidationService.validate(this.value, this.validation)
            .then(() => this.setValidity(this.id, true))
            .catch(() => this.setValidity(this.id, false))
    };

    public destroyed():void {
        this.setValidity(this.id, true)
    };

    public setPristine(value:boolean):void {
        this.pristine = value;
    };

    public validationError(error:any):void {
        this.errors = Object.keys(error).map((key) => {
            return error[key]
        });
        this.setValidity(this.id, false);
    };

    public validationSuccess():void {
        this.errors = [];
        this.setValidity(this.id, true);
    };

};