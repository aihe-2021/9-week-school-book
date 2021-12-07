import React from 'react'
// import { Link } from 'react-router-dom'

import Comment from './Comment'
function Comments (props) {
  const { userId, comments, fetchComments } = props
  console.log(props)
  return (
    <div>
      <div>
        {comments.map((comment) =>
          <Comment
            key={comment.id}
            userId={userId}
            comment={comment}
            fetchComments={fetchComments}
          />
        )}
      </div>
    </div>
  )
}

Comments.defaultProps = {
  comments: []
}

export default Comments
