import React from 'react';

const Login = ({ isLog, setIsLog }) => {

  const handleClick = () => {
    setIsLog(prevVal => !prevVal);
  }

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login;

