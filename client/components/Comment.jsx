import React from 'react'
import { deleteComment } from '../apis'
import { useSelector } from 'react-redux'
import { IfAuthenticated } from './Authenticated'

function Comment (props) {
  const token = useSelector(state => state.user.token)

  function handleDeleteComment (token) {
    deleteComment(props.comment.id, token)
    return props.fetchComments(props.userId)
  }

  const { comment } = props
  return (
    <div>
      <div className="comment" key={comment.id}>
        <p>
          <span className="comment-content-by"><b>By:</b> {comment.name}</span>
          <span className="comment-date">{new Date(comment.date).toDateString()}</span>
          <span className="comment-content">{comment.comment}</span>

          <IfAuthenticated>
            {/* <Link to={`/users/${userId}/comments/${comment.id}`}>
              <button className='pure-button'>Edit</button>
            </Link> commented out - editing comments is stretch. */}
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
