import { jsonToGraphQLQuery } from "json-to-graphql-query";
import { Graph } from "./base.resource";
import { FindUserQuery, GetUserQuery } from "./default.queries";

interface IFindParams {
    q: string
};

interface IGetParams {
    id: number
};

export class UserResource {

    public find({ q }:IFindParams, fields:any = FindUserQuery):Promise<any[]> {
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

    public get({ id }:IGetParams, fields: any = GetUserQuery):Promise<any> {
        return Graph.post("", {
            query: jsonToGraphQLQuery({
                query: {
                    user: {
                        ...fields,
                        __args: { id }
                    }
                }
            })
        }).then(({data}) => data.data.user || [])
    };

};