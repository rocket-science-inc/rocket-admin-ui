import { Component, Mixins, Prop } from "vue-property-decorator";
import { Cloudinary } from "cloudinary-core";
import RctImgTpl from "./img.component.vue";

const cloudinary: any = Cloudinary.new({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    secure: true
});

@Component
export class RctImg extends Mixins(RctImgTpl) {
    
    @Prop({ default: () => ({}) }) src: any;
    @Prop({ default: 100 }) width: number;
    @Prop({ default: 0 }) height: number;
    @Prop({ default: "thumb" }) crop: string;

    public get source():string {
        return cloudinary.url(this.src.public_id, {
            width: this.width,
            height: this.height || this.width,
            crop: this.crop
        })
    };

};