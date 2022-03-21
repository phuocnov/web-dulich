const API_CONSTANTS = {
    AUTH: {
        SIGN_IN: 'auth/signin',
        SIGN_UP: 'auth/signup',
    },
    TOUR: {
        GET: 'tour',
        GET_BYID:(id: number) => `tour/${id}` 
    },
    BOOKING: {
        BOOK: 'booking',
        GET_ALL_BOOKING: 'booking'
    }
}

export default API_CONSTANTS