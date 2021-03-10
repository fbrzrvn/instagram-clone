import React from 'react';
import Form from '../components/Form';

const Login = ({ setIsLog }) => {
  return (
    <div className="login">
      <Form setIsLog={setIsLog} />
    </div>
  )
}

export default Login;
