import {signInAction} from "./actions";
import { push } from 'connected-react-router';

export const signIn = () => {
    return async (dispatch, getState) => {
        const state = getState()
        const isSignedIn = state.users.isSignedIn

        if(!isSignedIn) {
            const url = 'https://api.github.com/users/wd30gsrc'

            const response = await fetch(url)
                                .then(res => res.json())
                                .catch(()=> null)

            const username = response.login

            dispatch(signInAction({
                isSignedIn: true,
                uid: "00001",
                username: username
            }))
            dispatch(push('/'))
        }
    }
}
