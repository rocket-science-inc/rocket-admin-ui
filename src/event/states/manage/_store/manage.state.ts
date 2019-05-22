export interface IManageEventStoreState {
    loading: boolean
    model: any,
    errors: string[]
};

export const initialState:IManageEventStoreState = {
    loading: false,
    errors: [],
    model: {
        time: {},
        agenda: { [Date.now()]: {} },
    }
};

export const EventState = ():IManageEventStoreState  => ({...initialState});