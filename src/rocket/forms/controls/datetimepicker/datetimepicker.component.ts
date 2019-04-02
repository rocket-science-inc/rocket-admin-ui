import { Component, Watch, Mixins } from "vue-property-decorator";
import * as moment from "moment";
import { i18n } from "@rocket/i18n";
import { RctFormControl } from "./../base";
import { Timepicket } from "./../../decorators/timepicker/timepicker.component";
import Template from "./datetimepicker.component.vue"


@Component({
    components: { timepicker: Timepicket }
})
export class RctFormDatetimePicker extends Mixins(Template, RctFormControl) {

    public type: string = "datetimepicker";
    public value: any = { date: null, time: { H: null, mm: null } };

    constructor(){
        super();
        (<any>this).$material.locale.firstDayOfAWeek = i18n.date.firtsDayOfWeek();
    };

    public get timeFormat():string {
        return i18n.date.longDateFormat("LT");
    };

    public get dateFormat():string {
        return i18n.date.longDateFormat("L");
    };

    public formatter():any {
        return {
            date: this.model ? new Date(this.model) : null,
            time: this.timeFormat.split(":").reduce((res, item) => {
                return [...res, ...item.split(" ")]
            }, []).map(str => {
                return str.trim()
            }).reduce((res, key) => {
                return {...res, [key]: this.model ? moment(this.model).format(key) : null}
            }, {})
        }
    };

    public parser(value):number {
        if (value.date) {
            return ((moment, map) => {
                return Object.keys(value.time).reduce((moment, key) => {
                    return moment.set({
                        [map[key.toLowerCase()[0]]]: value.time[key]
                    })
                }, moment)
            })(moment(value.date), { h: "hour", m: "minute", a: "a" }).valueOf()
        };
        return;
    };

    public change():void {
        this.$emit("model", this.parser(this.value));
    };

    @Watch("value.date")
    public watch(oldVal, newVal):void {
        if (newVal) this.$emit("model", this.parser(this.value));
    };

};