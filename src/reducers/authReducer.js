import { SIGN_IN,SIGN_OUT,API_ERROR } from "../app/actypes";

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    redirectTo: null
}

export default (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case SIGN_IN:
            console.log('signin action: ', action);
            return {...state,isSignedIn: true,userId: action.payload.email,redirectTo:action.payload.redirectTo};
            
        case SIGN_OUT:
            console.log('signout action: ', action)
            return {...state,isSignedIn: false,userId: null,redirectTo:action.payload.redirectTo};

        case API_ERROR: 
            console.log('error action: ', action);
            return {...state, isSignedIn: false, userId: null,...action.payload}
    
        default:
            return state;
    }
}