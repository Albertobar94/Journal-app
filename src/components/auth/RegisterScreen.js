import React from 'react';
import { useForm } from "../../hooks/useForm";
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startUserRegistration } from '../../actions/auth';

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui )

    const [ formValues, handleInputChange ] = useForm( {
        name: 'Alberto',
        email: 'Alberto@gmail.com',
        password: '123456',
        password2: '123456'
    } );

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if ( isFormValid() ) {
            dispatch( startUserRegistration( email, password, name ) )
        }
    }

    const isFormValid = () => {
        if ( name.trim().length === 0 ) {
            dispatch( setError( 'Name is Required' ) )
            return false;
        } else if ( !validator.isEmail( email ) ) {
            dispatch( setError( 'Email is Required' ) )
            return false;
        } else if ( password !== password2 || password.length < 5 ) {
            dispatch( setError( 'Passwords must match and be 6 characters long' ) )
            return false;
        }
        dispatch( removeError( ) )
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={ handleRegister }>
                
                {   msgError &&
                    (<div className="auth__alert-error">
                        { msgError }
                    </div>)
                }

                <input type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    value={ name }
                    onChange={ handleInputChange }
                />
                <input type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    value={ email }
                    onChange={ handleInputChange }
                />
                <input type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />
                <input type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    className="auth__input"
                    value={ password2 }
                    onChange={ handleInputChange }
                />
                <div class="g-recaptcha" data-sitekey="your_site_key"></div>
                <br/>
                <button 
                    type="submit"
                    className="btn btn-primary btn-block mb-5"

                >
                    Register
                </button>
                <Link 
                    to="/auth/login"
                    className="link mt-5"
                >
                    Already registered?
                </Link>
            </form>
        </>
    )
}
