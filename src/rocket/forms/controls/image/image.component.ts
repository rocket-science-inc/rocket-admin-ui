import { Component, Mixins } from "vue-property-decorator";
import { RctFormControl } from "./../base";
import Template from "./image.component.vue"

interface FileChangeEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

@Component
export class RctFormImg extends Mixins(RctFormControl, Template) {

    public type: string = "image";
    public image: File = null;
    
    private reader:FileReader = new FileReader();

    public choose():void {
        this.$el.querySelector("input").click();
    };

    public created():void {
        this.reader.onload = (e:any) => {
            this.image = e.target.result;
        };
    };

    public mounted():void {
        this.$el.querySelector("input")
            .addEventListener("change", (e:FileChangeEvent) => {
                this.reader.readAsDataURL(e.target.files[0]);
                this.$emit("model", e.target.files[0]);
            });
    };

}