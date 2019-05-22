import { RctApi } from "@rocket/api";

export const addReport = ({ commit }) => {
    commit({ type: "reportAdded" })
};

export const removeReport = ({ commit }, key:string) => {
    commit({ type: "reportRemoved", payload: key })
};

export const getEvent = ({ commit }, { id }) => {
    if (id) {
        Promise.resolve(commit({ type: "loading", payload: true }))
            .then(() => RctApi.event.get(id))
            .then(({event}) => commit({ type: "eventLoaded", payload: event }))
            .then(() => commit({ type: "loading", payload: false}))
            .catch(({ errors }) => {
                commit({ type: "error", payload: errors})
            });
    }
};

export const saveEvent = ({ commit }, { id, model }) => {
    return Promise.resolve(commit({ type: "loading", payload: true }))
        .then(() => RctApi.google.place({ id: model.location }))
        .then(({ findLocation }) => {
            return {
                ...model,
                location: findLocation,
                agenda: Object.keys(model.agenda).map(key => {
                    return model.agenda[key]
                })
            }
        })
        .then((model) => {
            if (id) {
                return RctApi.event.update(model).then(({ updateEvent }) => updateEvent)
            } else {
                return RctApi.event.save(model).then(({ createEvent }) => createEvent)
            }
        })
        .then((event) => {
            console.log(id)
            if (!id) commit({ type: "reseted" });
            commit({ type: "loading", payload: false});
            return event
        })
        .catch(({ errors }) => {
            commit({ type: "error", payload: errors})
        });
};

export const reset = ({ commit }) => {
    commit({ type: "reseted" })
};