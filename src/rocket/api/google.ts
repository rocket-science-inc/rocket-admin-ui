import axios from "axios";

interface IPlacesParams {
    q: string
};

const maps = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/place',
    params: {
        key: process.env.GOOGLE_MAPS_API_KEY
    }
});

export class GoogleApi {

    public places({ q }:IPlacesParams):Promise<any> {
        return maps.get("/findplacefromtext/json", {
            params: { input: q }
        })
    };

};