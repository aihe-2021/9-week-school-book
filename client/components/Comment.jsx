import React from 'react'
import { Link } from 'react-router-dom'
// import CommentForm from './CommentForm'
import { deleteComment } from '../apis'

function Comment (props) {
  function handleDeleteComment () {
    return deleteComment(props.comment.id)
      .then(() => props.fetchComments(props.userId))
  }

  const { userId, comment, fetchComments } = props
  return (
    <div>
      {/* <p>Hello World I am the Comment . JSX</p> */}
      {/* <Routes>
        <Route
          path={`/users/${userId}/comments/${comment.id}`}
          render={(props) =>
            <CommentForm
              fetchComments={fetchComments}
              comment={comment}
              userId={userId}
              {...props}
            />
          }
        />
      </Routes> */}
      <div className="comment" key={comment.id}>
        <p>
          <span className="comment-content">{comment.comment}</span>
          <span className="comment-date">Date Posted: {new Date(comment.datePosted).toDateString()}</span>

          <Link to={`/users/${userId}/comments/${comment.id}`}>
            <button className='pure-button'>Edit</button>
          </Link>

          <button
            className='pure-button'
            onClick={handleDeleteComment}>
                  Delete
          </button>
        </p>
      </div>
    </div>
  )
}

export default Comment
