import "./Login.css";


import React, { useState } from 'react';

const LoginForm = () => {
    const [isLoginFormVisible, setLoginFormVisible] = useState(true);

    const toggleFormVisibility = () => {
        setLoginFormVisible(!isLoginFormVisible);
    };

    return (
        <div className="login-page">
            <div className="form">
                {isLoginFormVisible ? (
                    <form className="login-form">
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button>login</button>
                        <p className="message">
                            Not registered?{' '}
                            <a href="#" onClick={toggleFormVisibility}>
                                Create an account
                            </a>
                        </p>
                    </form>
                ) : (
                    <form className="register-form">
                        <input type="text" placeholder="name" />
                        <input type="password" placeholder="password" />
                        <input type="email" placeholder="email address" />
                        <button>create</button>
                        <p className="message">
                            Already registered?{' '}
                            <a href="#" onClick={toggleFormVisibility}>
                                Sign In
                            </a>
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default LoginForm;

