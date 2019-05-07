import { jsonToGraphQLQuery } from "json-to-graphql-query";
import { Graph } from "./../base.resource";
import { SaveEvent, QueryEvent, GetEvent } from "./event.queries";

export interface IEventQueryParams {
    page: number,
    count: number
};

export class EventResource {

    public get(id: string, fields: any = GetEvent):Promise<any> {
        return Graph.post("", {
            query: jsonToGraphQLQuery({
                query: {
                    event: {
                        ...fields,
                        __args: { id }
                    }
                }
            })
        }).then(({data}) => data.data.event || {})
    };

    public save(event:any, fields: any = SaveEvent):Promise<any> {
        return Graph.post("", {
            query: jsonToGraphQLQuery({
                mutation: {
                    createEvent: {
                        ...fields,
                        __args: { event }
                    }
                }
            })
        }).then(({data}) => data.data.createEvent || {})
    };

    public query(params:IEventQueryParams, fields: any = QueryEvent):Promise<any> {
        return Graph.post("", {
            query: jsonToGraphQLQuery({
                query: {
                    events: {
                        ...fields,
                        __args: { ...params }
                    }
                }
            })
        }).then(({data}) => data.data.events || {})
    };

};