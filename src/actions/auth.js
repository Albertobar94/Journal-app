// import { useDispatch } from "react-redux";
import { types } from "../reducerTypes/types";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";

export const startLoginEmailPassword = (email, password) => {
    return ( dispatch ) => {
        dispatch( login(email, password) )
    }
};

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
        .then( ({ user }) => {
            dispatch(
                login( user.uid, user.displayName )
            )
        })
    }
}

export const login = (uid, displayName) => ({
        type: types.login,
        payload: {
            uid,
            displayName
        }
    })