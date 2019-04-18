import { GoogleResource } from "./google.resource";
import { UserResource } from "./user.resource";
import { EventResource } from "./event.resource";


class Api {

    public google: GoogleResource;
    public user: UserResource;
    public event: EventResource;

    constructor(){
        this.google = new GoogleResource();
        this.user = new UserResource();
        this.event = new EventResource();
    };

};

export const RctApi = new Api()