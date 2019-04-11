import { jsonToGraphQLQuery } from "json-to-graphql-query";
import { Graph } from "./base.resource";
import { FindPlaceQuery } from "./default.queries";

interface IPlacesParams {
    q: string
};

export class GoogleResource {

    public places({ q }:IPlacesParams, fields:any = FindPlaceQuery):Promise<any[]> {
        return Graph.post("", {
            query: jsonToGraphQLQuery({
                query: {
                    findPlace: {
                        ...fields,
                        __args: { input: q }
                    }
                }
            })
        }).then(({data}) => data.data.findPlace || [])
    };

};