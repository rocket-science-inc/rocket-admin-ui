
export const PlacesQuery = {
    id: true,
    address: true,
};

export const PlaceQuery = {
    id: true,
    name: true,
    address: true,
    geometry: {
        latitude: true,
        longitude: true
    }
};

export const FindUserQuery = {
    fullName: true,
    id: true
};

export const GetUserQuery = {
    fullName: true,
    id: true
};