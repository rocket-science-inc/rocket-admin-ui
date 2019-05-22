import { jsonToGraphQLQuery } from "json-to-graphql-query";
import { Resource } from "../resource";
import { SaveEvent, QueryEvent, GetEvent } from "./event.queries";

export interface IEventQueryParams {
    page: number,
    count: number
};

export class EventResource {

    public get(id: string, fields: any = GetEvent):Promise<any> {
        return Resource.request.post("", {
            query: jsonToGraphQLQuery({
                query: {
                    event: {
                        ...fields,
                        __args: { id }
                    }
                }
            })
        })
    };

    public save(event:any, fields: any = SaveEvent):Promise<any> {
        return Resource.request.post("", {
            query: jsonToGraphQLQuery({
                mutation: {
                    createEvent: {
                        ...fields,
                        __args: { event }
                    }
                }
            })
        })
    };

    public update(event:any, fields: any = SaveEvent):Promise<any> {
        return Resource.request.post("", {
            query: jsonToGraphQLQuery({
                mutation: {
                    updateEvent: {
                        ...fields,
                        __args: { event }
                    }
                }
            })
        })
    };


    public query(params:IEventQueryParams, fields: any = QueryEvent):Promise<any> {
        return Resource.request.post("", {
            query: jsonToGraphQLQuery({
                query: {
                    events: {
                        ...fields,
                        __args: { ...params }
                    }
                }
            })
        })
    };

};