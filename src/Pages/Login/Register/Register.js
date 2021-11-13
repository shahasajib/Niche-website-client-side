import React, { useEffect, useState } from 'react';
import { Alert, Image, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import register from '../../../Images/Banner/login.jpg'
import Header from '../../Shared/Header/Header';

const Register = () => {
    const [registerData, setRegister] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError, setAuthError } = useAuth();




    // error data clear
    useEffect(() => {
        setAuthError("")
    }, [])



    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newRegisterData = { ...registerData }
        console.log(newRegisterData)
        newRegisterData[field] = value
        setRegister(newRegisterData)
    }


    const handleRegisterSubmit = e => {

        registerUser(registerData.email, registerData.password, registerData.name, history)
        e.preventDefault()
    }

    return (
        <div>
            <Header />
            <div>
                <Image src={register} fluid />
            </div>
            <div className="container">
                <h2 className="headline"> Register</h2>
                {
                    !isLoading && <form onSubmit={handleRegisterSubmit}>
                        <input className="from-control" onBlur={handleOnBlur} type="text" id="" name="name" placeholder="Enter Your Name" />
                        <br />
                        <input className="from-control" onBlur={handleOnBlur} type="email" name="email" placeholder="Enter Your Email" />
                        <br />
                        <input className="from-control" onBlur={handleOnBlur} type="password" name="password" placeholder='Enter Your Password' />
                        <br />

                        <input className="signInbtn" type="submit" value="Register" />
                    </form>
                }
                {isLoading && <Spinner animation="border" variant="secondary" />}
                {user?.email && <Alert variant="success">
                    Register Successfully!!!!
                </Alert>}
                {authError && <Alert variant="danger">{authError}</Alert>}
                <div>--------------------------------------------------</div>
                <NavLink to='/login' className="nav-link">Already Register? Please Login</NavLink>
            </div>

        </div>
    );
};

export default Register;