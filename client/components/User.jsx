import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { setUsers } from '../actions'
import { getUsers } from '../apis'
import UpdateUser from './UpdateUser'

export default function User () {
  const params = useParams()
  const userId = Number(params.id)
  const users = useSelector(state => state.users)

  const [file, setFile] = useState(null)
  const dispatch = useDispatch()
  useEffect(() => {
    getUsers()
      .then(res => dispatch(setUsers(res)))
      .catch(e => console.log(e.message))
  }, [users])

  let user
  if (users[0].id) {
    user = users.find(user => user.id === userId)
  } else {
    user = []
  }

  const onFormSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('profilePic', file)

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    const url = '/profilePic/upload'

    axios.post(url, formData, config)
      .then((response) => {
        alert('Image Uploaded')
        return null
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

  const onInputChange = (e) => {
    setFile(e.target.files[0])
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

    <div className="user__container">
      <div className='user__container-red'>
        <label> <img className='user-image' src={'images/' + user.image}/>
        </label>
      </div>
      <div className='user__profile'>
        <div className='user__profile-info'>
          <div className="socialmedia">
            <label><a href={`${user.facebook}`}><i className="fab fa-facebook"></i></a></label>
            <label><a href={`${user.linkedin}`}><i className="fab fa-linkedin"></i></a></label>
            <label><a href={`${user.twitter}`}><i className="fab fa-twitter-square"></i></a></label>
            <label><a href={`${user.instagram}`}><i className="fab fa-instagram"></i></a></label>
            <label><a href={`${user.githubLink}`}><i className="fab fa-github"></i></a></label>
          </div>
          <label><h3>Name:</h3><h4>{user.name}</h4></label><br/>
          <label><h3>Cohort:</h3><h4>{user.cohort}</h4></label><br/>
          <label><h3>Email:</h3><h4>{user.email}</h4></label><br/>
          <label><h3>Location:</h3><h4>{user.location}</h4></label><br/>
          <label><h3>Quote:</h3><h4>{user.quote}</h4></label><br/>
          <label><h3>Skill Set:</h3><h4>{user.skills}</h4></label><br/>
        </div>
        <div className='use__profile-middle'>
        </div>
        <div className='user__profileImage-form'>
          <form onSubmit={onFormSubmit}>
            <div className='Image-Upload'><h3 style={{ textDecoration: 'underline' }}>Hover For Upload Image Info</h3>
              <span className='Image-Upload-Text'><p>When you upload your image <br/>please make sure the filename is <em>your-name</em>.jpg <br/>starting with a capital letter - eg David.jpg or JV.jpg. <br/>This will ensure the image will update<br/> properly in the database.</p></span><br/>
            </div>
            <input className='file' type='file' name='profilePic' onChange={onInputChange} /><br/><br/>
            <button className='edit' type="submit">Upload</button>
          </form>
          <div className='user__profileUpdate-form'>
            <UpdateUser id={user.id} updateTheUser={updateTheUser} user={user}/>
          </div>
        </div>

      </div>
    </div>
  </>
}
