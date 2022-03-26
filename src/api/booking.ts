import { ICreateTour } from './apiInterfaces';
import api from "./api"
import API_CONSTANTS from "./constants"

export default  {
    getBooking: () => {
        return api.get(API_CONSTANTS.ADMIN.BOOKING.GET)
    },
    getBookingById: (id: number) => {
        return api.get(API_CONSTANTS.ADMIN.BOOKING.GET_BYID(id))
    },
    booking: (params: any)=> {
        return api.post(API_CONSTANTS.USER.BOOKING, params)
    }
}