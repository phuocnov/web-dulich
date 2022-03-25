const API_CONSTANTS = {
    USER:{
        AUTH: {
            SIGN_IN: 'auth/signin',
            SIGN_UP: 'auth/signup',
        },
        TOUR: {
            GET: 'tour',
            GET_BYID:(id: number) => `tour/${id}`
        },
        CUSTOMER: {
            INFO: 'customer/user-info'
        },
        BOOKING: 'booking'
    },
    ADMIN: {
        CUSTOMER: {
            GET: 'customer'
        },
        TOUR: {
            CREATE: 'tour',
            ADJUST: 'tour/adjust',
            DELETE: 'tour/delete'
        },
        BOOKING: {
            GET: 'booking'
        }
    }
}

export default API_CONSTANTS