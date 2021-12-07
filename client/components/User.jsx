import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { setUsers } from '../actions'
import UpdateUser from './UpdateUser'
// import Comments from './Comments'
import { getCommentsByUserId } from '../apis'
import CommentForm from './CommentForm'

export default function User (props) {
  const params = useParams()
  const userId = Number(params.id)
  const users = useSelector(state => state.users)
  // const [errorMessage, setErrorMessage] = useState('')
  const [comments, setComments] = useState([])

  useEffect(() => {
    if (userId) {
      fetchComments(userId)
    }
  }, [])

  function fetchComments (userId) {
    getCommentsByUserId(userId)
      .then(comments => {
        setComments(comments)
        return null
      })
      .catch(err => console.log(err))
  }

  let user
  if (users[0].id) {
    user = users.find(user => user.id === userId)
  } else {
    user = {}
  }

  function updateTheUser (updatedUser) {
    const userIndex = users.findIndex((user) => user.id === updatedUser.id)
    if (userIndex !== -1) {
      const allUsers = [...users]
      allUsers[userIndex] = { ...updatedUser }
      setUsers(allUsers)
    }
  }

  return <>

    {/* INTRO CONTAINER  */}
    <div className='user__container-red'>
      <h1 className="nameHeading" >&#x0007B; {user.name} &#x0007D;</h1>
    </div>
    <div className='user__container-image'>
      <div className="container-image">
        {user.image && <img className='user-image' src={user.image} />}
        <div className='overlay-text content'>To change your profile picture <br/> update it on <a className="githubProfile" href="https://github.com/settings/profile">Github.</a></div>
      </div>
      <div className="socialmedia">
        <label><a href={`${user.facebook}`}><i className="fab fa-facebook"></i></a></label>
        <label><a href={`${user.linkedin}`}><i className="fab fa-linkedin"></i></a></label>
        <label><a href={`${user.twitter}`}><i className="fab fa-twitter-square"></i></a></label>
        <label><a href={`${user.instagram}`}><i className="fab fa-instagram"></i></a></label>
        <label><a href={`${user.githubLink}`}><i className="fab fa-github"></i></a></label>
      </div>
    </div>

    {/* SECOND CONTAINER  */}
    <div className="user__container">

      {/* USER PROFILE  */}

      <div className='user__profile-info'>
        <h2>Profile</h2>
        {/* <label><h3>Cohort:</h3><h4>{user.cohort}</h4></label><br /> */}
        {/* <label><h3 className ="updateInstructions" >Scroll Down to Update Profile Info</h3></label><br /> */}
        <label><h3>Email:</h3><h4>{user.email}</h4></label><br />
        <label><h3>Location:</h3><h4>{user.location}</h4></label><br />
        <label><h3>Quote:</h3><h4>{user.quote}</h4></label><br />
        <label><h3>Skill Set:</h3><h4>{user.skills}</h4></label><br />

        {/* USER UPDATE  */}
        <div className='user__profileImage-form'>
          <div className='user__profileUpdate-form'>
            <UpdateUser id={user.id} updateTheUser={updateTheUser} user={user} />
          </div>
        </div>
      </div>

      {/* USER COMMENT  */}
      <div className='use__profile-comment'>
        <h2>Give Me Some Feedback</h2>
        <CommentForm userId={userId}/>
        <Link to={`/users/${userId}/comments`}>
          <div className='comment-count'>
            <p>
              {comments.length} comments
            </p>
          </div>
        </Link>
      </div>
    </div>

    
  </>
}
