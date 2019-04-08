import { Component, Mixins } from "vue-property-decorator";
import { RctFormControl } from "./../base";
import Template from "./image.component.vue"
import { ImageService } from "./image.service";

interface FileChangeEvent extends Event {
    target: HTMLInputElement & EventTarget;
};

@Component
export class RctFormImg extends Mixins(RctFormControl, Template) {

    public type: string = "image";
    public inprogress: boolean = false;

    public choose():void {
        this.$el.querySelector("input").click();
    };

    public get image():string {
        if(this.value && this.$el) {
            return ImageService.url(this.value, this.$el.querySelector(".img-container")["offsetWidth"])
        };
        return "";
    };

    public mounted():void {
        this.$el.querySelector("input")
            .addEventListener("change", (e:FileChangeEvent) => {
                this.inprogress = true;
                ImageService.upload(e.target.files[0]).then(image => {
                    this.value = image;
                    this.inprogress = false;
                    this.changed()
                });
            });
    };

};