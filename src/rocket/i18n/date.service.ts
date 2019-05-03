import * as moment from "moment";

export class DateService {

    constructor(){
        moment.locale(this.language());
    };

    private language():string {
        if (window.navigator.languages) {
            return window.navigator.languages[0];
        } else {
            return (<any>window).navigator.userLanguage || window.navigator.language;
        }
    };

    public longDateFormat(format:moment.LongDateFormatKey):any {
        return moment.localeData().longDateFormat(format)
    };

    public firtsDayOfWeek():number {
        return moment.localeData().firstDayOfWeek()
    };

    public hour(date:any):number {
        return moment(date).hour()
    };
    

};