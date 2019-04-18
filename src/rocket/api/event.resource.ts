import { jsonToGraphQLQuery } from "json-to-graphql-query";
import { Graph } from "./base.resource";

export class EventResource {

    public save(event:any, fields: any = {id: true}):Promise<any> {
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