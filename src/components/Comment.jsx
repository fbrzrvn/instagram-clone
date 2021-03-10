import React from 'react';
import { GrFavorite } from "react-icons/gr";

const Comment = ({ comments }) => {
  return comments.map((c, index) =>
    <div className="post__body__text" key={index}>
      <h4><strong>{c.username} </strong> {c.caption}</h4>
      <span><GrFavorite /></span>
    </div>
  )
}

export default Comment;
