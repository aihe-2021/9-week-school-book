import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { setUsers } from '../actions'
import { getUsers } from '../apis'

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

  return <>

    <div className="user__container">
      <div className='user__container-red'>
        <label> <img className='user-image' src={`/images/${user.image}`}/>
        </label>
      </div>
      <div className='user__profile'>
        <div className='user__profile-info'>
          <div className="socialmedia">
            <label><a href={`${user.facebook}`}><i className="fab fa-facebook"></i></a></label>
            <label><a href={`${user.linkedin}`}><i className="fab fa-linkedin"></i></a></label>
            <label><a href={`${user.twitter}`}><i className="fab fa-twitter-square"></i></a></label>
            <label><a href={`${user.instagram}`}><i className="fab fa-instagram"></i></a></label>
          </div>
          <label><h3>Name:</h3><h4>{user.name}</h4></label><br/>
          <label><h3>Cohort:</h3><h4>{user.cohort}</h4></label><br/>
          <label><h3>Email:</h3><h4>{user.email}</h4></label><br/>
          <label><h3>Location:</h3><h4>{user.location}</h4></label><br/>
          <label><h3>Quote:</h3><h4>{user.quote}</h4></label><br/>
          <label><h3>Git Hub:</h3><h4><a href={`${user.githubLink}`}><i className="fab fa-github"></i></a></h4></label><br/>
          <label><h3>Skill Set:</h3><h4>{user.skills}</h4></label><br/>
          {/* <h3>Socials:</h3> */}
        </div>
        <div className='user__profile-form'>
          <form onSubmit={onFormSubmit}>
            <h3>Upload Profile Pic:</h3><br/>
            <input className='file' type='file' name='profilePic' onChange={onInputChange} /><br/><br/>
            <button className="button" type="submit">Upload</button>
          </form>
        </div>
      </div>
    </div>
  </>
}
