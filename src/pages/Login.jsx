import { useRef } from 'react';

import Form from 'react-bootstrap/Form';

import { verifyUser } from '../data/users';

import './Login.css'

const Login = ({ setToken, setRole }) => {
    const userRef = useRef()
    const passRef = useRef()
    return (
        <div className='login-bg'><img src="/images/bg.gif" alt="bg" />
            <div className="Login-container">
                <Form.Label htmlFor="username" className=' text-light'>Username</Form.Label>
                <Form.Control
                    type="text"
                    id="username"
                    placeholder='user'
                    ref={userRef}
                />
                <Form.Label htmlFor="password" className=' text-light'>Password</Form.Label>
                <Form.Control
                    type="text"
                    id="password"
                    placeholder='password'
                    ref={passRef}
                />
                    <button className=' btn btn-success mt-3' onClick={() => {
                        const user = userRef.current.value
                        const pass = passRef.current.value
                        userRef.current.value = ''
                        passRef.current.value = ''
                        const userInfo = verifyUser(user, pass)
                        if (userInfo === null) {
                            alert('Wrong user or password')
                            useRef.current.focus()
                        } else {
                            setToken(userInfo.token)
                            setRole(userInfo.role)
                        }

                    }}>Login</button>
                </div>
            </div>
    );
}

export default Login;