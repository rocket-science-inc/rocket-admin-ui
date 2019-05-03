import * as moment from "moment";

export const DateFilter = (value:any, format:string) => {
    return moment(value).format(format)
}