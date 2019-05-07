import * as moment from "moment";

export const DateFilter = (value:any, format:string = "LT") => {
    return moment(value).format(format)
};