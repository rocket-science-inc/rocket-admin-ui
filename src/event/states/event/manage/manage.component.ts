import { Component, Vue } from "vue-property-decorator";
import * as faker from "faker";
import { RctApi } from "@rocket/api";

@Component({
    template: require("./manage.component.html")
})
export class EventManagePage extends Vue {

    public model: any = {};

    public organizers(q:string):Promise<any[]> {
        return RctApi.google.places({ q })
    };

};