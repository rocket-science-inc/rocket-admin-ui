import { initialState } from "./manage.state";

export const loading = (state, { payload }) => {
    state.loading = payload;
};

export const eventLoaded = (state, { payload }) => {
    state.model = {
        ...payload,
        location: payload.location.id,
        organizer: payload.organizer.id,
        agenda: payload.agenda.length ? payload.agenda.reduce((res, report, index) => {
            return {...res, [index]: report }
        }, {}) : { [Date.now()]: {} }
    };
};

export const reportAdded = (state) => {
    state.model.agenda = {
        ...state.model.agenda,
        [Date.now()]: {}
    }
};

export const reportRemoved = (state, { payload }) => {
    state.model.agenda = Object.keys(state.model.agenda)
        .reduce((res, key) => {
            if (key != payload ) {
                return {...res, [key]: state.model.agenda[key]}
            }; return res;
        }, {});
};

export const reseted = (state) => {
    state.errors = [...initialState.errors];
    state.model = {...initialState.model};
};

export const error = (state, { payload }) => {
    state.errors = payload;
};