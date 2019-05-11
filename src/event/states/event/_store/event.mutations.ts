export const loading = (state, { payload }) => {
    state.loading = payload;
};

export const eventLoaded = (state, { payload }) => {
    state.event = payload;
};

export const error = (state, { payload }) => {
    state.errors = payload;
}; 