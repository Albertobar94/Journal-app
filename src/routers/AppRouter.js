import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from "../components/journal/JournalScreen";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // Observable que se ejecuta preguntando por las credenciales del usuario
    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {
            console.log('user', user?.uid)
            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) )
                setIsLoggedIn( true )
            } else {
                setIsLoggedIn( false )
            }
            setChecking( false )
        });

    }, [dispatch, setChecking, setIsLoggedIn])
    console.log('ckecking', checking)
    if ( checking ) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />
                    <PrivateRoute
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ JournalScreen }
                    />
                    <Redirect
                    exact
                    path="/auth/login"
                />
                </Switch>
            </div>
        </Router>
    )
}
