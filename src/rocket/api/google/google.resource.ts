import { jsonToGraphQLQuery } from "json-to-graphql-query";
import { Resource } from "../resource";
import { PlacesQuery, PlaceQuery } from "./google.queries";

interface IPlacesParams {
    q: string
};

interface IPlaceParams {
    id: string
};

export class GoogleResource {

    public places({ q }:IPlacesParams, fields:any = PlacesQuery):Promise<any> {
        return Resource.request.post("", {
            query: jsonToGraphQLQuery({
                query: {
                    findLocations: {
                        ...fields,
                        __args: { input: q }
                    }
                }
            })
        })
    };

    public place({ id }:IPlaceParams, fields:any = PlaceQuery):Promise<any> {
        return Resource.request.post("", {
            query: jsonToGraphQLQuery({
                query: {
                    findLocation: {
                        ...fields,
                        __args: { input: id }
                    }
                }
            })
        })
    };

};