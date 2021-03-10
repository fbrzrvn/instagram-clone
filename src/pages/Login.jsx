import React from 'react';
import Footer from '../components/Footer';
import Form from '../components/Form';
import HeroLogin from '../components/HeroLogin';

const Login = ({ setIsLog }) => {
  return (
    <div className="main">
      <div className="login">
        <HeroLogin />
        <Form setIsLog={setIsLog} />
      </div>
      <Footer />
    </div>
  )
}

export default Login;
