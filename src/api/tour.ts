import api from "./api"
import API_CONSTANTS from "./constants"

export default  {
    getTours: () => {
        return api.get(API_CONSTANTS.TOUR.GET)
    },
    getToursByID: (id: number)=> {
        return api.get(API_CONSTANTS.TOUR.GET_BYID(id))
    }
}