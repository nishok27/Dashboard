import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


const GoogleAuth = () => {
    return (
      <div className='main-container'>

        <GoogleOAuthProvider clientId="1007492160599-j9kslhghs8ho9a77tbg86ar8emcaj7ik.apps.googleusercontent.com">
  
          <GoogleLogin
            onSuccess={credentialResponse => {
              const details = jwtDecode(credentialResponse.credential);
              console.log(details)
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </GoogleOAuthProvider>
        </div>
  )
}

export default GoogleAuth;