import Vue from "vue";
import * as moment from "moment";
import { DateService } from "./date.service";
import { DateFilter } from "./date.filter";

class I18N {

    public date: DateService;
    public moment: moment.Moment;

    constructor(){
        this.date = new DateService();
        this.moment = <any>moment;
    };

};

export const i18n = new I18N();

export class RctI18nPlugin {

    public static install():void {
        Vue.filter("date", DateFilter)
        // Object.keys(Controls).map(key => {
        //     return { component: Controls[key], name: kebabCase(key)}
        // }).forEach(({ component, name }) => {
        //     Vue.component(name, component)
        // });
        // Vue.component("rct-form", RctForm);
    };

};