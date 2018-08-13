import React from 'react';
import '../stylesheets/LoginPage.css';

const LoginPage = () => {
    return (
        <div id="LoginPageContainer">
            <div id="LoginPageCard">
                <img src="/turnip-logo1.png"/>
                <div>Connect with LinkedIN</div>
                <a className="btn" href="/auth/linkedin">LinkedIn</a>
            </div>
        </div>
    );
};

export default LoginPage;