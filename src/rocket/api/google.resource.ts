import { jsonToGraphQLQuery } from "json-to-graphql-query";
import { Graph } from "./base.resource";
import { PlacesQuery, PlaceQuery } from "./default.queries";

interface IPlacesParams {
    q: string
};

interface IPlaceParams {
    id: string
};

export class GoogleResource {

    public places({ q }:IPlacesParams, fields:any = PlacesQuery):Promise<any[]> {
        return Graph.post("", {
            query: jsonToGraphQLQuery({
                query: {
                    findLocations: {
                        ...fields,
                        __args: { input: q }
                    }
                }
            })
        }).then(({data}) => data.data.findLocations || [])
    };

    public place({ id }:IPlaceParams, fields:any = PlaceQuery):Promise<any> {
        return Graph.post("", {
            query: jsonToGraphQLQuery({
                query: {
                    findLocation: {
                        ...fields,
                        __args: { input: id }
                    }
                }
            })
        }).then(({data}) => data.data.findLocation || [])
    };

};