import { GoogleResource } from "./google.resource";
import { UserResource } from "./user.resource";


class Api {

    public google: GoogleResource;
    public user: UserResource;

    constructor(){
        this.google = new GoogleResource();
        this.user = new UserResource();
    };

};

export const RctApi = new Api()