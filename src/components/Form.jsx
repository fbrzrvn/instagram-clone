import React from 'react';
import logo from '../assets/images/Instagram-Logo.png';
import IOS from '../assets/images/login/ios.png';
import Android from '../assets/images/login/android.png';
import { FaFacebookSquare } from "react-icons/fa";

const Form = ({ setIsLog }) => {

  const handleClick = () => {
    setIsLog(prevVal => !prevVal);
  }

  return (
    <div className="form">
      <div className="form__wrap">
        <img src={logo} alt="logo" className="form__logo" />
        <form className="form__login">
          <input type="text" placeholder="Phone number, username or email" />
          <input type="password" placeholder="Password" />
          <button className="form__login__btn" onClick={handleClick}>Login</button>
          <div className="form__divider">
            <div className="form__divider__line"></div>
            <div className="form__divider__text">or</div>
            <div className="form__divider__line"></div>
          </div>
          <button
            className="facebook__login"
            onClick={handleClick}
          >
            <span><FaFacebookSquare /></span>
            <span> Login with facebook</span>
          </button>
          <a
            href="https://www.instagram.com/accounts/password/reset/?hl=en"
            className="form__login__forgotPass"
          >Forgot password?</a>
        </form>
      </div>
      <div className="form__sign-up">
        <p>Don't have an account?<a href="#0" className="form__login__link"> Sign up</a></p>
      </div>
      <p>Get the app.</p>
      <div className="form__store-btn">
        <a
          href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
          rel="noreferrer"
          target="_blank"
        >
          <img src={IOS} alt="app-store" width="136px" />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DCD9F0EE8-6458-4891-A88D-EF9DB8359FDE%26utm_content%3Dlo%26utm_medium%3Dbadge"
          rel="noreferrer"
          target="_blank"
        >
          <img src={Android} alt="google-play" width="136px" />
        </a>
      </div>
    </div>
  )
}

export default Form;
