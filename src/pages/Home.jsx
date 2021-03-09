import React from 'react';
import Post from '../components/Post';
import { postOne, postTwo, postThree, postFour } from '../data/postData';

const Home = () => {

  return (
    <div className="home">
      <div className="home__wrap">
        <Post {...postOne} />
        <Post {...postTwo} />
        <Post {...postThree} />
        <Post {...postFour} />
      </div>
    </div>
  )
}

export default Home;
