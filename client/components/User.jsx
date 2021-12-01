import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function User () {
  const params = useParams()
  const userId = Number(params.id)
  const users = useSelector(state => state.users)
  const user = users.find(user => user.id === userId)
  console.log(userId)

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
      <label><img className='images' src={`/images/${user.image}`} /></label><br/><br/>
    </div>
  </>
}
