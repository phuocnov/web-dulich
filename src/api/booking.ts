import { ICreateTour } from './apiInterfaces';
import api from "./api"
import API_CONSTANTS from "./constants"

export default  {
    getBooking: () => {
        return api.get(API_CONSTANTS.ADMIN.BOOKING.GET)
    },
    booking: (params: any)=> {
        return api.post(API_CONSTANTS.USER.BOOKING, params)
    }
}