import server from "../apis/server";
import { API_ERROR, SIGN_IN,SIGN_OUT } from "../app/actypes";

export const signIn = idToken => dispatch => {
    server.post('/auth',{
        data: {
            id_token: idToken
        }
    })
    .then((resp)=> {
        console.log(resp);
        dispatch({
            type: SIGN_IN,
            payload: {...resp.data,redirectTo: '/home'}
        })
    })
    .catch((error)=> {
        console.log(error.toJSON());
        dispatch({
            type: API_ERROR,
            payload: {error: {name: error.name,message: error.message},redirectTo: '/error'}
            })
        }
    );   
}

export const signOut = () => {
    return ({
        type: SIGN_OUT,
        payload: {redirectTo:'/'}
    })
}