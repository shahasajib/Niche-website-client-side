import React, { useEffect, useState } from 'react';
import { Alert, Image, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';
import login from '../../../Images/Banner/login.jpg'
import './LogIn.css'

const LogIn = () => {
    const [logIn, setLogin] = useState({})
    const { user, logInUser, isLoading, signInGoogleMethod, authError, setAuthError } = useAuth();

    const location = useLocation();
    const history = useHistory()


    // error data clear
    useEffect(() => {
        setAuthError("")
    }, [])


    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLogInData = { ...logIn }
        newLogInData[field] = value
        setLogin(newLogInData)
    }

    const handleLogInSubmit = e => {
        logInUser(logIn.email, logIn.password, location, history)
        e.preventDefault()
    }

    const handleWithGoogleSignin = () => {
        signInGoogleMethod(location, history)
    }

    return (
        <div>
            <Header />
            <div>
                <Image src={login} fluid />
            </div>
            <div className="mt-3 text-center">
                <h1 className="headline">Log In </h1>
                {
                    !isLoading && <form className="from" onSubmit={handleLogInSubmit}>

                        <input className="from-control" onBlur={handleOnChange} type="email" name="email" placeholder="Enter Your Email" />
                        <br />
                        <input className="from-control" onBlur={handleOnChange} type="password" name="password" placeholder='Enter Your Password' />
                        <br />
                        <input className="signInbtn" type="submit" value="Sign In" />

                    </form>
                }
                {isLoading && <Spinner animation="border" variant="secondary" />}
                {user?.email && <Alert variant="success">
                    Log In Successfully!!!!
                </Alert>}
                {authError && <Alert variant="danger">{authError}</Alert>}
                <div>--------------------------------------------------</div>
                <NavLink to='/register' className="nav-link">Create Account</NavLink>
                <br />

                <div className="rounded-circle text-info" >
                    <i onClick={handleWithGoogleSignin} className="fab fa-google "></i>
                </div>
                <br />
            </div>
        </div>
    );
};

export default LogIn;