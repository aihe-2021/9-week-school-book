import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { addCommentByUserId } from '../apis'

function CommentForm ({ userId }) {
  const [comment, setComment] = useState('')
  const token = useSelector(state => state.user.token)

  function handleSubmit (event, userId, comment, token) {
    event.preventDefault()
    addCommentByUserId(userId, comment, token)
    return setComment('')
  }

  return (
    <form type='submit' className="comment-form pure-form" onSubmit={(e) => handleSubmit(e, userId, comment, token)}>
      <input
        type='text'
        name='comment'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button type='submit'>Submit</button>
    </form>
  )
}

export default CommentForm
