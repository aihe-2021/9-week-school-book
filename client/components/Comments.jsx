import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import Comment from './Comment'
import CommentForm from './CommentForm'
function Comments (props) {
  const { userId, comments, fetchComments } = props
  return (
    <div>
      <p>
        <Link
          className='pure-button'
          to={`/users/${userId}/comments/new`}>
            Add A New Comment
        </Link>
      </p>
      <Routes>
        <Route
          path={`/users/${userId}/comments/new`}
          render={props => (
            <CommentForm
              fetchComments={fetchComments}
              {...props}
            />
          )}
        />
      </Routes>
      <div>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            userId={userId}
            comment={comment}
            fetchComments={fetchComments}
          />
        ))}
      </div>
    </div>
  )
}

Comments.defaultProps = {
  comments: []
}

export default Comments
