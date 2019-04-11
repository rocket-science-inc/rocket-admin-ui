import { jsonToGraphQLQuery } from "json-to-graphql-query";
import { Graph } from "./base.resource";
import { FindUserQuery } from "./default.queries";

interface IPlacesParams {
    q: string
};

export class UserResource {

    public find({ q }:IPlacesParams, fields:any = FindUserQuery):Promise<any[]> {
        return Graph.post("", {
            query: jsonToGraphQLQuery({
                query: {
                    users: {
                        ...fields,
                        __args: {
                            page: 1,
                            count: 5
                        }
                    }
                }
            })
        }).then(({data}) => data.data.users || [])
    };

};