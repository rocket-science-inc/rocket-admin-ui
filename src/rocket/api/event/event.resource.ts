import { jsonToGraphQLQuery } from "json-to-graphql-query";
import { Graph } from "./../base.resource";
import { SaveEvent } from "./event.queries";

export class EventResource {

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

};