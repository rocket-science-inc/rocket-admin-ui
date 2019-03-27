import { GoogleApi } from "./google";

class Api {

    public google: GoogleApi;

    constructor(){
        this.google = new GoogleApi()
    };

}

export const RctApi = new Api()