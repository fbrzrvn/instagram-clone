import React from 'react';
import Avatar from '@material-ui/core/Avatar';


const History = ({username}) => {

  const firstChar = username.charAt(0);
  const formatusername = username.slice(0,6);

  return (
    <div className="history">
      <div className="avatar-border">
        <Avatar>{firstChar}</Avatar>
      </div>
      <p>{username.length > 6 ? `${formatusername}..` : username }</p>
    </div>
  )
}

export default History;
