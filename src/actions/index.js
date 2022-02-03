import server from "../apis/server";
import { API_ERROR, SIGN_IN,SIGN_OUT } from "../app/actypes";

//import { useNavigate } from "react-router-dom";

export const signIn = idToken => dispatch => {

    //const navigate = useNavigate();

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
        
        //navigate('/home',{state: {email: resp.data.email}})
    })
    .catch((error)=> {
        console.log(error.toJSON());
        dispatch({
            type: API_ERROR,
            payload: {error: {name: error.name,message: error.message},redirectTo: '/error'}
        })
        //setError(error);
        //navigate('/error',{state: {e:error.message}})
        }
    );   
}

export const signOut = () => {
    return ({
        type: SIGN_OUT,
        payload: {redirectTo:'/'}
    })
}