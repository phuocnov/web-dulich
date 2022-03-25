import { ICreateTour } from './apiInterfaces';
import api from "./api"
import API_CONSTANTS from "./constants"

export default  {
    getTours: () => {
        return api.get(API_CONSTANTS.USER.TOUR.GET)
    },
    getToursByID: (id: number)=> {
        return api.get(API_CONSTANTS.USER.TOUR.GET_BYID(id))
    },

    // Admin-site only
    createTour: (params: ICreateTour) => {
        return api.post(API_CONSTANTS.ADMIN.TOUR.CREATE, params)
    }
}