import React from 'react';
import Navbar from '../components/Navbar';
import Post from '../components/Post';
import History from '../components/History';
import { postOne, postTwo, postThree, postFour } from '../data/postData';

const Home = ({ isLog, setIsLog }) => {

  return (
    <div className="home">
      <Navbar isLog={isLog} setIsLog={setIsLog} />
      <div className="home__histories">
        <History username="faber" />
        <History username="codeMaster" />
        <History username="maria" />
        <History username="reactjs" />
        <History username="iquinix" />
        <History username="freecodecamp" />
        <History username="keychron" />
        <History username="nik_jones" />
        <History username="juan" />
        <History username="koda_natural" />
      </div>
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
