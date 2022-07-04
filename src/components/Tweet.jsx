// Tweet.jsx

import PropTypes from 'prop-types'
import Avatar from './Avatar'
import './Tweet.css'
import initialTweets from '../tweets.json'
import { useState } from 'react'

function Tweet(props) {


  const { username,user, createdOn, children } = props

  return (
    
    <div className="tweet">
      <Avatar name={user} />
      <div>
        <div className="tweet-header">
        <span className="tweet-user">{username}
        <span className="tweet-user">@{user}</span>
        </span>
         
          <span className="tweet-created-on">{createdOn}</span>
        </div>
        <div className="tweet-content">{children}</div>
       
      
       
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
