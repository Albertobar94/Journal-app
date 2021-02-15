import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { useDispatch, useSelector } from 'react-redux';

export const LoginScreen = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui )
    const initialForm = {
        email: 'nando@gmail.com',
        password: '123456'
    };
    const [ formValues, handleInputChange ] = useForm( initialForm );

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('fired1')
        dispatch( startLoginEmailPassword( email, password ));
    }
    
    const handleGoogleLogin = () => {
        console.log('fired2')
        dispatch(startGoogleLogin)
    }

    return (
        <>
            {console.log('rendered')}
            <h3 className="auth__title">Login</h3>

            <form onSubmit={ handleLogin }>
                <input type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    value={ email }
                    onChange={ handleInputChange }
                />
                <input type="password"
                    placeholder="password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />
                <div className="g-recaptcha" data-sitekey="localhost"></div>
                <br/>
                <button 
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={ loading }
                >
                    Login
                </button>
                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link
                    to="/auth/register"
                    className="link"
                >
                    Create new account
                </Link>
            </form>
        </>
    )
}
