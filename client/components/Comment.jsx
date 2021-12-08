import React from 'react'
// import { Link } from 'react-router-dom'
import { deleteComment } from '../apis'
import { useSelector } from 'react-redux'
import { IfAuthenticated } from './Authenticated'

function Comment (props) {
  const token = useSelector(state => state.user.token)
  function handleDeleteComment (token) {
    return deleteComment(props.comment.id, token)
      .then(() => props.fetchComments(props.userId))
  }

  const { userId, comment } = props
  console.log(comment)
  return (
    <div>
      <div className="comment" key={comment.id}>
        <p>
          <span className="comment-content">{comment.comment}</span>
          <span className="comment-date">Date Posted: {new Date(comment.date).toDateString()}</span>
          <span className="comment-content">Posted By:{comment.name}</span>

          <IfAuthenticated>
            {/* <Link to={`/users/${userId}/comments/${comment.id}`}>
              <button className='pure-button'>Edit</button>
            </Link> */}
            <button
              className='pure-button'
              onClick={() => handleDeleteComment(token)}>
                  Delete
            </button>
          </IfAuthenticated>
        </p>
      </div>
    </div>
  )
}

export default Comment
