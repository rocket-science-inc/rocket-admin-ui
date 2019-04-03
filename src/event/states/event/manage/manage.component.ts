import { Component, Vue } from "vue-property-decorator";
import * as faker from "faker";
import { RctApi } from "@rocket/api";

@Component({
    template: require("./manage.component.html")
})
export class EventManagePage extends Vue {

    public model: any = {
        agenda: { [Date.now()]: {} }
    };

    public organizers(q:string):Promise<any[]> {
        return Promise.resolve(
            new Array(20).fill(0).map(() => ({
                name: faker.address.streetAddress(),
                id: faker.random.uuid()
            }))
        )
        //return RctApi.google.places({ q })
    };

    public remove(item:string):void {
        this.model.agenda = Object.keys(this.model.agenda)
            .reduce((res, key) => {
                if (key != item) {
                    return {...res, [key]: this.model.agenda}
                }; return res;
            }, {});
    };

    public add():void {
        ((key) => {
            this.model.agenda = {
                ...this.model.agenda,
                [key]: {}
            };
        })(Date.now())
    };

};