import { IBooking } from './apiInterfaces';
import api from "./api"
import API_CONSTANTS from "./constants"

export default {
    booking: (params: IBooking) => {
        return api.post(API_CONSTANTS.BOOKING.BOOK, params);
    }
}