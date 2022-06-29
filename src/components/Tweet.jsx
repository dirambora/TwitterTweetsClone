// Tweet.jsx
import PropTypes from 'prop-types'
import Avatar from './Avatar'
import './Tweet.css'
import { FaHeart } from 'react-icons/fa';
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from "react-icons/ri";
function Tweet(props) {
  const { username,user, createdOn, children,onDelete,tweets } = props

  return (
    <div className="tweet">
      <Avatar name={user} />
      <div>
        <div className="tweet-header">
        <span className="tweet-user">
          
        <span className="tweet-username">{username}</span>
          @{user}
          </span>

        </div>
        <div className="tweet-content">{children}</div>
        <span className='actions'>
        <FaRegEdit className="icons-actions" size="1.4em" />
        <RiDeleteBin6Line className="icons-actions"  onClick={() => onDelete(tweets.id)} size="1.5em" />
        </span>
        <span className='action-buttons'>
        <FaHeart className="icons" size="1.4em" />
        <BiMessageRounded className="icons" size="1.5em" />
        <FaRetweet className="icons" size="1.5em" />
        <span className="created-on">
          {createdOn}
        </span>
        </span>
        

       
      </div>
    </div>
  )
}






Tweet.propTypes = {
  user: PropTypes.string,
  username:PropTypes.string,
  createdOn: PropTypes.string,
}

export default Tweet
