import React from 'react';
import { useForm } from "../../hooks/useForm";
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {

    const [ formValues, handleInputChange ] = useForm( {
        name: 'Alberto',
        email: 'Alberto@gmail.com',
        password: '123456',
        password2: '123456'
    } );

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(name, email, password, password2)
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={ handleRegister }>
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
