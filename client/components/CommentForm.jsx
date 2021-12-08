import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { addCommentByUserId, getCommentsByUserId } from '../apis'

function CommentForm (props) {
  const { userId, setComments } = props
  const [comment, setComment] = useState('')
  const token = useSelector(state => state.user.token)
  function handleSubmit (event, userId, comment, token) {
    event.preventDefault()
    addCommentByUserId(userId, comment, token)
      .then(() => getCommentsByUserId(userId))
      .then((comments) => setComments(comments))
      .catch(err => console.log(err))
    return setComment('')
  }

  return (
    <form type='submit' className="comment-form pure-form" onSubmit={(e) => handleSubmit(e, userId, comment, token)}>
      <textarea
        rows='5'
        type='text'
        name='comment'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      /><br />
      <button className="commentButton" type='submit'>Post Your Feelings</button>
    </form>
  )
}

export default CommentForm
