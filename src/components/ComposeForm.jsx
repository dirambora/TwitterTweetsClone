import PropTypes from 'prop-types'
import { useState } from 'react'
import Avatar from './Avatar'
import './ComposeForm.css'

function ComposeForm({ onSubmit }) {
  const [editorValue, setEditorValue] = useState('')

  const handleEditorValueChange = (e) => {
    setEditorValue(e.target.value)
  }

  const handleSubmit = (e) => {
    // Prevent the default behavior of the form submition
    // which usually triggers a page reload
    e.preventDefault()
    // Call the onSubmit function with the latest textarea value
    onSubmit(editorValue)
    // Reset the textarea content
    // the user may wants to write another tweet
    setEditorValue('')
  }

  return (
    <form className="compose-form" onSubmit={handleSubmit}>
      <div className="compose-form-container">
        <Avatar />
        <textarea
          value={editorValue}
          onChange={handleEditorValueChange}
          className="compose-form-textarea"
          placeholder="What's happening?"
        />
      </div>
      <button className="compose-form-submit">Tweet</button>
    </form>
  )
}

ComposeForm.propTypes = {
  // Mind the isRequired flag,
  // if we don't provide any function it will trhow an error
  onSubmit: PropTypes.func.isRequired,
}

export default ComposeForm