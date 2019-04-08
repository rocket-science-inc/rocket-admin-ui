import axios from "axios";
import { Transformation, Cloudinary } from "cloudinary-core";

const uploader = axios.create({
    baseURL: process.env.CLOUDINARY_UPLOAD_URL,
    headers: { "Content-Type": "multipart/form-data" }
});

export class ImageService {

    private static tr: any = Transformation.new();

    private static cloudinary: any = Cloudinary.new({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        secure: true
    });

    constructor(){};

    private static data(file):FormData {
        let form = new FormData();
        form.append("file", file);
        form.append("upload_preset", process.env.CLOUDINARY_UPLOAD_PRESET);
        return form;
    };

    public static upload(file:any):Promise<any> {
        return uploader.post("", this.data(file))
            .then(({ data }) => data)
    };

    public static url({public_id, format}, dimension:number):string {
        return this.cloudinary.url(public_id, {
            width: dimension, height: dimension, crop: "fill"
        });
    };

};