import { Component, Mixins, Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { RctApi } from "@rocket/api";
import EventManagePageTpl from "./manage.component.vue";

const Store = namespace("manageEvent");

@Component
export class EventManagePage extends Mixins(EventManagePageTpl) {

    @Store.Action("getEvent") getEvent: (params:any) => void;
    @Store.Action("saveEvent") saveEvent: (params:any) => Promise<any>;
    @Store.Action("reset") reset: () => void;
    @Store.Action("addReport") addReport: () => void;
    @Store.Action("removeReport") removeReport: (key:string) => void;
    @Store.State("loading") inprogress: boolean;
    @Store.State("model") model: any;
    @Store.State("errors") errors: string[];

    @Watch("errors")
    public errorHandler(value:string[]):void {
        value.forEach(error => {
            this.$toast.error(error)
        });
    };

    public organizers(q:any, init:boolean):Promise<any[]> {
        if (init) return RctApi.user.get({id: q}).then(({ user }) => [user])
        else return RctApi.user.find({ q }).then(({ users }) => users)
    };

    public places(q:string, init:boolean):Promise<any[]> {
        if (init) return RctApi.google.place({ id: q }).then(({ findLocation }) => [findLocation])
        else return RctApi.google.places({ q }).then(({ findLocations }) => findLocations)
    };

    public remove(model: any, item:string):void {
        model.agenda = Object.keys(model.agenda)
            .reduce((res, key) => {
                if (key != item) {
                    return {...res, [key]: model.agenda[key]}
                }; return res;
            }, {});
    };

    public save():void {
        this.saveEvent({
            id: parseInt(this.$route.params.id),
            model: JSON.parse(JSON.stringify(this.model))
        }).then(event => {
            this.$toast.success(`Event "${event.title}" has been saved successfully.`, [{
                text: "View", onClick: () => this.$router.push({name: "event", params: { id: event.id }})
            }])
        })
        // return this.places(model.location, true).then(([location]) => {
        //     return {...model, location}
        // }).then(model => {
        //     return {
        //         ...model,
        //         time: { start: model.timeStart, end: model.timeEnd },
        //         agenda: Object.keys(model.agenda).map(key => {
        //             return model.agenda[key]
        //         })
        //     }
        // }).then(model => {
        //     return Object.keys(model).filter(key => {
        //         return ["timeStart", "timeEnd"].indexOf(key) == -1
        //     }).reduce((res, key) => {
        //         return {...res, [key]: model[key]}
        //     }, {})
        // }).then(model => {
        //     return RctApi.event.save(model)
        // })
    };

    public success({ createEvent }:any):void {
        this.$toast.success(`Event "${createEvent.title}" has been saved successfully.`, [{
            text: "View", onClick: () => this.$router.push({name: "event", params: { id: createEvent.id }})
        }])
    };

    public mounted():void {
        this.getEvent({ id: parseInt(this.$route.params.id) })
    };

    public destroyed():void {
        this.reset();
    };

};