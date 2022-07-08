// Timeline.jsx
import PropTypes from 'prop-types'
import Tweet from './Tweet.jsx'
import './Timeline.css'
import { FaHeart } from 'react-icons/fa';
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from 'react-icons/fa';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {BiEdit} from 'react-icons/bi';
import React, { useState } from 'react';
import initialTweets from '../tweets.json'





function Timeline({tweets,handleDelete, handleEditClick}) {
  const [currentTweet, setCurrentTweet] = useState(initialTweets)
  const [isEditing, setIsEditing] = useState(false);
 

 
  function handleEditFormSubmit(e) {
    e.preventDefault();

  // call the handleUpdateTodo function - passing the currentTodo.id and the currentTodo object as arguments
  handleUpdateTodo(currentTweet.id, currentTweet);
  }

  function handleEditInputChange(e) {
    // set the new state value to what's currently in the edit input box
    setCurrentTweet({ ...currentTweet, textarea: e.target.value });
    console.log(currentTweet);
  }

 
  function handleEditClick(id) {
    setIsEditing(id);
  }

  function handleUpdateTodo(id, updatedTodo) {
    // here we are mapping over the todos array - the idea is check if the todo.id matches the id we pass into the function
    // if the id's match, use the second parameter to pass in the updaeted todo object
    // otherwise just use old todo
    const updatedItem = tweets.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    // set editing to false because this function will be used inside a onSubmit function - which means the data was submited and we are no longer editing
    setIsEditing(false);
    // update the todos state with the updated todo
    setCurrentTweet(updatedItem);
  }



  return (
    <ul className="timeline">
      {tweets.map(({ id,username, user, created_on, content}) => (
        <li key={id} className="timeline-item">
          <Tweet
           username={username} user={user} createdOn={created_on}>
             {id === isEditing ? (
         <div className='App-ng'>
   
          <textarea
            name="editTodo"
            className="form-textarea"
            value={content.setIsEditing}
            onChange={handleEditInputChange}
          />
         
          <div className='actions'><button type="submit" className='btn-action' onSubmit={handleEditFormSubmit}>Save</button>
          {/* here we added a "Cancel" button to set isEditing state back to false which will cancel editing mode */}
          <button onClick={() => setIsEditing(false)} className='btn-action'>Cancel</button></div>

          </div>

          )
          
          :(
            <div>
              <span>{content}</span><br></br>
              <span><RiDeleteBin6Line onClick={() => handleDelete(id)}  className='delete-icon' size="1.5em"/>
            <BiEdit className='delete-icon'  onClick={() => handleEditClick(id)} size="1.5em"/>
            </span>

          <span className='app-logo-1'>
            <FaHeart className="app-log" size="1.5em" />
            <BiMessageRounded className="app-log" size="1.5em" />
            <FaRetweet className="app-log" size="1.5em" />
          </span>
  
            </div>
        ) }

        

          </Tweet>

        

   
          
        </li>

        

      ))}
    </ul>
    
    
  )
}



Timeline.propTypes = {
  tweets: PropTypes.array,
}

export default Timeline