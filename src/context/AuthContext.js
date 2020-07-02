import createDataContext from './createDataContext';
import trackerApi from '..//api/tracker';


const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const signup = (dispatch) => {
    return ({ email, password }) => {


        // make api request to sign up with that email and password
        // if we sign up, modify the state and say that we are authenticated
        // if sign up fails we need to reflect an error message

    }
}

const signin = (dispatch) => {
    return ({ email, password }) => {
        // try to signin
        // handle success by updateing state
        // handle failure by showing error message
    }
}

const signout = (dispatch) => {
    return () => {
        // somehow sign out
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { isSignedIn: false }
);
