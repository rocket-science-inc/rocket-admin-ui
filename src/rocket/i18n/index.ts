import * as moment from "moment";
import { DateService } from "./date";

class I18N {

    public date: DateService;
    public moment: moment.Moment;

    constructor(){
        this.date = new DateService();
        this.moment = <any>moment;
    }

}

export const i18n = new I18N();