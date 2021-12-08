import React from 'react'

import Comment from './Comment'
function Comments (props) {
  const { userId, comments, fetchComments, setComments } = props
  return (
    <div>
      <div className='comment-container'>
        {comments.map((comment) =>
          <Comment
            key={comment.id}
            userId={userId}
            comment={comment}
            fetchComments={fetchComments}
            setComments={setComments}
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
