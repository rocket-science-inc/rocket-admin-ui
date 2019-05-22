export const GetEvent = {
    id: true,
    title: true,
    description: true,
    ticketLink: true,
    organizer: {
        id: true,
        fullName: true
    },
    image: {
        bytes: true,
        created_at: true,
        etag: true,
        format: true,
        height: true,
        original_filename: true,
        placeholder: true,
        public_id: true,
        resource_type: true,
        secure_url: true,
        signature: true,
        tags: true,
        type: true,
        url: true,
        version: true,
        width: true
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
    },
    agenda: {
        username: true,
        company: true,
        description: true,
        position: true,
        title: true
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