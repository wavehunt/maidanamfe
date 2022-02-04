import { SIGN_IN,SIGN_OUT,API_ERROR } from "../app/actypes";

const INITIAL_STATE = {
    isSignedIn: null,
    user: null,
    error: null,
    redirectTo: null
}

export default (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case SIGN_IN:
            console.log('signin action: ', action);
            return {...state,
                    isSignedIn: true,
                    user: {
                        email: action.payload.email,
                        },
                    error: null,
                    redirectTo:action.payload.redirectTo
                };
            
        case SIGN_OUT:
            console.log('signout action: ', action)
            return {...state,
                    isSignedIn: false,
                    user: null,
                    error: null,
                    redirectTo:action.payload.redirectTo
                };

        case API_ERROR: 
            console.log('error action: ', action);
            return {...state, 
                    isSignedIn: false, 
                    user: null,
                    error: action.payload.error,
                    redirectTo:action.payload.redirectTo
                }
    
        default:
            return state;
    }
}