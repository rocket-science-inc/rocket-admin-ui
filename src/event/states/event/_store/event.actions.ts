import { RctApi } from "@rocket/api";

export const getEvent = ({ commit }, {id, fields}) => {
    Promise.resolve(commit({ type: "loading", payload: true}))
        .then(() => {
            return RctApi.event.get(id, fields)
        }).then(event => {
            commit({ type: "eventLoaded", payload: event})
            commit({ type: "loading", payload: false})
        });
};