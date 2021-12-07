import React, { useState } from 'react'
import { useParams } from 'react-router'
import { addCommentByUserId, updateComment } from '../apis'

function CommentForm (props) {
  // const [errorMessage, setErrorMessage] = useState('')
  const [comment, setComment] = useState(props.comment || { comment: '' })
  const params = useParams()
  console.log(params)

  function handleSubmit (e) {
    e.preventDefault()
  //   const { match, fetchComments, history } = props
  //   console.log(match)
  //   if (props.comment) {
  //     updateComment(comment)
  //       .then(() => fetchComments(comment.userId))
  //       .then(() => history.push(`/users/${comment.userId}`))
  //       .catch(err => setErrorMessage(err.message))
  //   } else {
  //     addCommentByUserId(match.params.userId, comment)
  //       .then(() => fetchComments(match.params.userId))
  //       .then(() => history.push(`/users/${match.params.userId}`))
  //       .catch(err => setErrorMessage(err.message))
  //   }
  }

  return (
    <form className="comment-form pure-form" onSubmit={handleSubmit}>
      <input
        type='text'
        name='comment'
        value={comment.comment}
        onChange={(e) => {
          setComment({ ...comment, [e.target.name]: e.target.value })
        }}
      />
      <input className='pure-button' type='submit' />
    </form>
  )
}

export default CommentForm
