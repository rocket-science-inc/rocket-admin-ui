import { jsonToGraphQLQuery } from "json-to-graphql-query";
import { Resource } from "../resource";
import { FindUserQuery, GetUserQuery } from "./user.queries";

interface IFindParams {
    q: string
};

interface IGetParams {
    id: number
};

export class UserResource {

    public find({ q }:IFindParams, fields:any = FindUserQuery):Promise<any> {
        return Resource.request.post("", {
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
        })
    };

    public get({ id }:IGetParams, fields: any = GetUserQuery):Promise<any> {
        return Resource.request.post("", {
            query: jsonToGraphQLQuery({
                query: {
                    user: {
                        ...fields,
                        __args: { id }
                    }
                }
            })
        })
    };

};