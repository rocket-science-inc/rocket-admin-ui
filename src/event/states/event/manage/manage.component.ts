import { Component, Vue } from "vue-property-decorator";
import { RctApi } from "@rocket/api";

@Component({
    template: require("./manage.component.html")
})
export class EventManagePage extends Vue {

    public model():Promise<any> {
        return Promise.resolve({
            agenda: { [Date.now()]: {} }
        });
    };

    public organizers(q:string):Promise<any[]> {
        return RctApi.user.find({ q })
    };

    public places(q:string):Promise<any[]> {
        return RctApi.google.places({ q })
    };

    public remove(model: any, item:string):void {
        model.agenda = Object.keys(model.agenda)
            .reduce((res, key) => {
                if (key != item) {
                    return {...res, [key]: model.agenda}
                }; return res;
            }, {});
    };

    public add(model:any):void {
        ((key) => {
            model.agenda = {
                ...model.agenda,
                [key]: {}
            };
        })(Date.now())
    };

    public save(model):void {

    };

};