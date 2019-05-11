import axios from "axios";

class Graph {

    constructor(){
        this.request.interceptors.response.use(
            this.responseHandler.bind(this),
            this.errorHandler.bind(this)
        );
    };

    public request = axios.create({
        baseURL: "/graphql",
        withCredentials: true
    });

    private errorHandler(error:string):Promise<any> {
        return Promise.reject({
            errors: [ error ]
        })
    };

    private responseHandler({ data }):Promise<any> {
        if (data.errors) {
            return Promise.reject({
                errors: data.errors.map(({ description }) => {
                    return description
                })
            })
        } else {
            return Promise.resolve(data.data);
        }
    };

}

export const Resource = new Graph();

