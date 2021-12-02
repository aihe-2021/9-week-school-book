import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { fetchUsers, setUsers } from '../actions'
import { getUsers } from '../apis'

export default function User () {
  const params = useParams()
  const userId = Number(params.id)
  const [users, setUsers] = useState([{ name: '' }])
  // const users = useSelector(state => state.users)

  const [file, setFile] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const showUsers = getUsers()
    setUsers(showUsers)
    // const user = users.find(user => user.id === userId)
    // dispatch(fetchUsers()
    //   .then(users => setUsers(users)))
  }, [])

  const user = users.find(user => user.id === userId)

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
    <div className="users">
      <label>Name:{user.name}</label><br/>
      <label>Cohort:{user.cohort}</label><br/>
      <label>Email:{user.email}</label><br/>
      <label>Location:{user.location}</label><br/>
      <label>Quote:{user.quote}</label><br/>
      <label>Git Hub:{user.githubLink}</label><br/>
      <label>Skill Set:{user.skills}</label><br/>
      <h4>Socials:</h4>
      <label>{user.facebook}</label><br/>
      <label>{user.linkedin}</label><br/>
      <label>{user.twitter}</label><br/>
      <label>{user.instagram}</label><br/><br/><br/>
      <label> <img className='images' src={`/images/${user.image}`}/>
      </label><br/><br/>
      <form onSubmit={onFormSubmit}>
        <h3>Upload Profile Pic</h3>
        <input type='file' name='profilePic' onChange={onInputChange} /><br></br>
        <button className="uploadbutton" type="submit">Upload</button>
      </form>
    </div>
  </>
}
