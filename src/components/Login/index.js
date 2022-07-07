import React from 'react';
import * as C from './styles';
import { auth, provider } from '../../services/firebase';

const Login = () => {

  const handleSignin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  
  return (
    <C.Container>
      <C.Button onClick={handleSignin}> Login com Google </C.Button>
    </C.Container>
  )
}


export default Login;


