import { useState } from 'react'
import { nanoid } from 'nanoid'
import ComposeForm from './ComposeForm'
import Timeline from './Timeline'
import { FaTwitter } from 'react-icons/fa'



import './App.css'



import initialTweets from '../tweets.json'

// this is a way to store the current user name
const CURRENT_USER = 'Diram'
const SOME_USER ='Deee'

function App() {

  

  // We now store the tweets in the state of our component
  const [tweets, setTweets] = useState(initialTweets)
  const [tweetEditing, setTweetEditing] = useState(null);
  const [editingText, setEditingText] = useState("");


  function submitEdits(id) {
    const updatedTodos = [...tweets].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTweets(updatedTodos);
    setTweetEditing(null);
  }

  // This handler will be called when we want to post a new tweet**
  const handlePostTweet = (content) => {
    const newTweet = {
      content,
      id: nanoid(),
      created_on: Date(Date.now()),
      user: CURRENT_USER,
      username:SOME_USER,
      comments_count: 0,
      retweets_count: 0,
      favorites_count: 0,
    }
    // The new tweets array is being created from the values of the
    // existing one + the newly created tweet
    setTweets([...tweets, newTweet])
  }

  // const handleDelete = (id) => {
  //   const delTodo = tweets.filter(id);
  //   setTweets([...delTodo]);
  // };
   const handleDelete = (id) => {
    const delTodo = tweets.filter((to) => to.id !== id);
    setTweets([...delTodo]);
  };

  function handleFormSubmit(e) {
    e.preventDefault();

    if (tweets !== "") {
      setTweets([
        ...tweets,
        {
          id: tweets.length + 1,
          text: tweets.trim()
        }
      ]);
    }

    setTweets("");
  }


  return (
    <div className="app">
      <FaTwitter className="app-logo" size="2em" />
      <ComposeForm onSubmit={handlePostTweet} />
      <div className="separator"></div>
      <Timeline handleDelete={handleDelete} handleFormSubmit={handleFormSubmit} tweets={tweets} 
      />
    </div>
  )
}

export default App