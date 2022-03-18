import { authAction, authReducer } from './auth';
import { bookingAction, bookingReducer } from './booking';

const actions = {
    auth: authAction,
    booking: bookingAction
}

const reducers = {
    authReducer,
    bookingReducer
}

export { actions, reducers }