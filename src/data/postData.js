import reactImg from '../assets/images/posts/react-logo.png';
import reduxImg from '../assets/images/posts/redux-logo.png';
import nodejsImg from '../assets/images/posts/nodejs-logo.png';
import typescriptImg from '../assets/images/posts/typescript-logo.png';

export const postOne = {
  id: 1,
  image: reactImg,
  postAuthor: 'faber',
  likes: 4,
  caption: 'Check this out! Here my new article about how to buiild awesome project using react',
  comments: [
    {
      username: 'nik',
      caption: 'Really cool! I love that 🔥'
    },
    { username: 'jake', caption: 'Awesome article bro'},
    { username: 'juan', caption: '@nik you shold watch this'},
  ],
  date: 'FEW MOMENT AGO',
}

export const postTwo = {
  id: 2,
  image: reduxImg,
  postAuthor: 'Paolo',
  likes: 0,
  caption: 'Check this out! Here my new article about how to buiild awesome project using redux',
  comments: [
  ],
  date: '2 MIN AGO',
}

export const postThree = {
  id: 3,
  image: nodejsImg,
  postAuthor: 'CodeMaster',
  likes: 64,
  caption: 'Nodejs backend made easy with javascript!',
  comments: [
    { username: 'faber', caption: 'That\'s great!' },
    { username: 'CodeMaster', caption: 'Thanks guys' },
    { username: 'david77', caption: 'I also found really interesint this part...' },
  ],
  date: '5 HOURS AGO',
}

export const postFour = {
  id: 4,
  image: typescriptImg,
  postAuthor: 'CodeMaster',
  likes: 264,
  caption: 'Typescript will be the future 🚀',
  comments: [
    { username: 'faber', caption: 'That\'s great!' },
    { username: 'CodeMaster', caption: 'Thanks guys' },
    { username: 'david77', caption: 'I also found really interesint this part...' },
    { username: 'CodeMaster', caption: 'Thanks guys' },
    { username: 'david77', caption: 'I also found really interesint this part...' },
  ],
  date: '5 HOURS AGO',
}