import { types } from "../reducerTypes/types";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { finishLoading, startLoading } from "./ui";
import Swal from 'sweetalert2';

export const startLoginEmailPassword = (email, password) => {
    return ( dispatch ) => {
        dispatch( startLoading() )
        
        firebase.auth().signInWithEmailAndPassword( email, password)
        .then( ({user}) => {
            dispatch( login( user.uid, user.displayName ))
            dispatch( finishLoading() )
        })
        .catch( err => {
            dispatch( finishLoading() )
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${ err.message }`,
                footer: '<a href>Why do I have this issue?</a>'
            })
        })
    }
};

export const startUserRegistration = ( email, password, name ) => {
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async ({ user }) => {
                await user.updateProfile({ displayName: name })
                dispatch(
                    login( user.uid, user.displayName )
                )
            })
            .catch( e => {
                console.log( e )
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${ e.message }`,
                    footer: '<a href>Why do I have this issue?</a>'
                })
            })
    }
}

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
});

export const startLogout = () => {
    return async( dispatch ) => {
        await firebase.auth().signOut()

        dispatch( logout() )
    };
};

export const logout = () => ({
    type: types.logout
})