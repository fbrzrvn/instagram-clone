import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { GrEmoji  } from "react-icons/gr";
import {
  IoBookmarkOutline,
  IoChatbubbleOutline,
  IoEllipsisHorizontalSharp,
  IoHeartOutline,
  IoPaperPlaneOutline } from "react-icons/io5";
import Comment from './Comment';


const Post = ({ image, postAuthor, likes, caption, comments, date }) => {

  const [showComments, setShowComments] = useState(false);

  const handleClick = () => {
    setShowComments(prevVal => !prevVal);
  }

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__header__user">
          <Avatar className="post__avatar">{postAuthor.charAt(0)}</Avatar>
          <h3>{postAuthor}</h3>
        </div>
        <div className="post__header__options">
          <span><IoEllipsisHorizontalSharp /></span>
        </div>
      </div>
      <img src={image} alt={image} className="post__image"/>
      <div className="post__body">
        <div className="post__body__icons">
          <span><IoHeartOutline /></span>
          <span><IoChatbubbleOutline /></span>
          <span><IoPaperPlaneOutline /></span>
          <span><IoBookmarkOutline /></span>
        </div>
        <h4 className="post__body__likes">
          { likes > 0 ? `${likes} likes` : `${likes} like` }
        </h4>
        <div className="post__body__text">
          <h4><strong>{postAuthor} </strong> {caption}</h4>
        </div>
        { comments.length > 0 ?
          <p
            className="post__body__lightText"
            onClick={handleClick}
          >View all {comments.length} comments</p> :
          null
        }
        { showComments ? <Comment comments={comments} /> : null }
        <small className="post__body__date">{date}</small>
      </div>
      <div className="post__body__comment">
        <span><GrEmoji /></span>
        <form>
          <input type="text" placeholder="Type a comment..."/>
        </form>
        <p className="post__body__button">Public</p>
      </div>
    </div>
  )
}

export default Post;
