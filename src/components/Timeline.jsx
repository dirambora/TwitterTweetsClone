// Timeline.jsx
import PropTypes from 'prop-types'
import Tweet from './Tweet.jsx'
import './Timeline.css'
import { FaHeart } from 'react-icons/fa';
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from 'react-icons/fa';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {BiEdit} from 'react-icons/bi';




function Timeline({ tweets,handleDelete,handEdit }) {

  return (
    <ul className="timeline">
      {tweets.map(({ id,username, user, created_on, content}) => (
        <li key={id} className="timeline-item">
          <Tweet
           username={username} user={user} createdOn={created_on}>
            {content}
          </Tweet>

          <span2>   <RiDeleteBin6Line onClick={() => handleDelete(id)}  className='delete-icon' size="1.5em"/>
   
         <BiEdit className='edit-icon'   size="1.5em"/>
         </span2>
     
       
       <span1>
        <FaHeart className="app-logo" size="1.5em" />
          <BiMessageRounded className="app-logo" size="1.5em" />
          <FaRetweet className="app-logo" size="1.5em" />
      </span1>
          
          
        </li>

        

      ))}
    </ul>
    
  )
}



Timeline.propTypes = {
  tweets: PropTypes.array,
}

export default Timeline