import React, { useState, useEffect, useCallback } from 'react';
import loginImg from '../assets/images/login/iphone-mokeup.png';
import img1 from '../assets/images/login/1.jpg';
import img2 from '../assets/images/login/2.jpg';
import img3 from '../assets/images/login/3.jpg';
import img4 from '../assets/images/login/4.jpg';


const HeroLogin = () => {

  const [img, setImg] = useState(img1);

  const setRandomImages = useCallback(() => {
    const images = [img1, img2, img3, img4];
    const randomIndex = Math.floor(Math.random() * 4);
    setImg(images[randomIndex]);
  }, [])

  useEffect(() => {
    setInterval(() => {
      setRandomImages();
    }, 3000)
    return function cleanup() {
      setRandomImages();
    }
  }, [setRandomImages]);

  return (
    <div className="login__img">
      <img src={loginImg} alt="iphone-mokeup" />
      <img src={img} alt="insta" className="login__img__inner" />
    </div>
  )
}

export default HeroLogin;
