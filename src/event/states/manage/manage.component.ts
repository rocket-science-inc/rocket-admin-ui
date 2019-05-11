import { Component, Vue, Mixins } from "vue-property-decorator";
import { RctApi } from "@rocket/api";
import EventManagePageTpl from "./manage.component.vue";

@Component
export class EventManagePage extends Mixins(EventManagePageTpl) {

    public model():Promise<any> {
        return Promise.resolve({
            agenda: { [Date.now()]: {} }
        });
        // return Promise.resolve({
        //     image: {
        //         "public_id": "rhev2ns1hxrhnq3riyfq",
        //         "version": 1555527745,
        //         "signature": "3c15b1636fd1a2958ef5723118ddbae3c8922dec",
        //         "width": 672,
        //         "height": 1388,
        //         "format": "png",
        //         "resource_type": "image",
        //         "created_at": "2019-04-17T19:02:25Z",
        //         "tags": [],
        //         "bytes": 727173,
        //         "type": "upload",
        //         "etag": "b06f5870a9e701ec4e2d327a4fd2ffce",
        //         "placeholder": false,
        //         "url": "http://res.cloudinary.com/donumx4p6/image/upload/v1555527745/rhev2ns1hxrhnq3riyfq.png",
        //         "secure_url": "https://res.cloudinary.com/donumx4p6/image/upload/v1555527745/rhev2ns1hxrhnq3riyfq.png",
        //         "original_filename": "Screen Shot 2019-02-13 at 12.15.28 AM"
        //     },
        //     title: "Title",
        //     organizer: 1,
        //     location: "ChIJTff_YDnP1EARKxo_61RYSjI",
        //     timeStart: Date.now(),
        //     timeEnd: Date.now(),
        //     ticketLink: "http://google.com",
        //     description: "Description",
        //     agenda: new Array(3).fill(0).reduce((res, item, index) => {
        //         return {
        //             ...res,
        //             [index]: {
        //                 username: `Speaker ${index + 1}`,
        //                 company: `Speaker Company ${index + 1}`,
        //                 description: `Speach Description ${index + 1}`,
        //                 position: `Speaker Position ${index + 1}`,
        //                 title: `Speach Title ${index + 1}`
        //             }
        //         }
        //     }, {})
        // })
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

    public add(model:any):void {
        model.agenda = {
            ...model.agenda,
            [Date.now()]: {}
        };
    };

    public save(model):Promise<any> {
        return this.places(model.location, true).then(([location]) => {
            return {...model, location}
        }).then(model => {
            return {
                ...model,
                time: { start: model.timeStart, end: model.timeEnd },
                agenda: Object.keys(model.agenda).map(key => {
                    return model.agenda[key]
                })
            }
        }).then(model => {
            return Object.keys(model).filter(key => {
                return ["timeStart", "timeEnd"].indexOf(key) == -1
            }).reduce((res, key) => {
                return {...res, [key]: model[key]}
            }, {})
        }).then(model => {
            return RctApi.event.save(model)
        })
    };

    public success({ createEvent }:any):void {
        this.$toast.success(`Event "${createEvent.title}" has been saved successfully.`, [{
            text: "View", onClick: () => this.$router.push({name: "event", params: { id: createEvent.id }})
        }])
    };

};