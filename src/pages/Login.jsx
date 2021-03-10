import React from 'react';
import Form from '../components/Form';
import HeroLogin from '../components/HeroLogin';

const Login = ({ setIsLog }) => {
  return (
    <div className="login">
      <HeroLogin />
      <Form setIsLog={setIsLog} />
    </div>
  )
}

export default Login;
