import * as Actions from './actions'
import initialState from '../store/initialState'

export const UsersReducer = (state = initialState.users, actions) => {
    switch(actions.type) {
        case Actions.SIGN_IN:
            return {
                ...state,
                ...actions.payload
            }
        default:
            return state
    }
}
