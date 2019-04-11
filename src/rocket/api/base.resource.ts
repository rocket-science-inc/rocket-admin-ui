import axios from "axios";

export const Graph = axios.create({
    baseURL: "/graphql",
    withCredentials: true
});

