export const GetEvent = {
    id: true,
    title: true,
    description: true,
    organizer: true,
    ticketLink: true,
    image: {
        public_id: true
    },
    time: {
        start: true,
        end: true
    },
    location: {
        id: true,
        name: true,
        address: true,
        geometry: {
            latitude: true,
            longitude: true
        }
    }
};

export const SaveEvent = {
    id: true,
    title: true
};

export const QueryEvent = {
    total: true,
    records: {
        id: true,
        title: true
    }
};