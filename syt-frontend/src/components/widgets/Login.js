import React from 'react';
import { GoogleLogin } from 'react-google-login';

class Login extends React.Component {
    // TODO: Handle error and check if the user is registered. Redirect user based on registration status.
    render() {
        return <GoogleLogin clientId="177668269834-ptodm0689f6qmrpl4skp1mkrsb1mtkog.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.onGoogleSuccess}
            onFailure={this.onGoogleFailure}
            cookiePolicy={'single_host_origin'}
        ></GoogleLogin>;
    }

    onGoogleSuccess(property) {
        console.log(property);
    }

    onGoogleFailure(property) {
        console.log(property);
    }
}

export default Login;