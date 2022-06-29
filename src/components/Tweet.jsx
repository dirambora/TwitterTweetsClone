// Tweet.jsx
import PropTypes from 'prop-types'
import Avatar from './Avatar'
import './Tweet.css'
import { FaHeart } from 'react-icons/fa';
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from 'react-icons/fa';

function Tweet(props) {
  const { username,user, createdOn, children,useractions } = props

  return (
    <div className="tweet">
      <Avatar name={user} />
      <div>
        <div className="tweet-header">
        <span className="tweet-user">{username}</span>
          <span className="tweet-user">@{user}</span>
          <span className="tweet-created-on">{createdOn}</span>
        </div>
        <div className="tweet-content">{children}</div>
        <div className='action-buttons'>
        <FaHeart className="app-logo" size="1.5em" />
        <BiMessageRounded className="app-logo" size="1.5em" />
        <FaRetweet className="app-logo" size="1.5em" />
        </div>
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
