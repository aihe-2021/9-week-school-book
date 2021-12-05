import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Home () {
  const [filter, setFilter] = useState('all')

  // this name is confusing - shouldn't this be title and setTitle?
  // better yet I would remove this from the state as it can be derived from the filter
  const [teachers, setTeachers] = useState('Students and Teachers')
  const { users } = useSelector(state => state)

  const setTitle = (teachers) => {
    setTeachers(teachers)
  }

  // I would extract this to a helper function below where you pass the filter and users and receive filteredUsers
  let filteredUsers = users
  if (filter === 'teachers') {
    filteredUsers = users.filter((user) => {
      return user.teacher === 'true'
    })
  } else if (filter === 'students') {
    filteredUsers = users.filter((user) => {
      return user.teacher === 'false'
    })
  }

  return (
    <>
      <h1 className='home_tittle'>{`${teachers}`}</h1>
      <div className='btn-container'>
        {/*  passing setTitle to the result of setFilter looks strange to me, but it works...
          Iwould refactor this and just have your title dynamically created based off what the filter is and remove the title from your state entirely
        */}
        <button className='filter-btn' onClick={() => setFilter('all')(setTitle('Students and Teachers'))}>All</button>
        <button className='filter-btn' onClick={() => setFilter('teachers')(setTitle('Teachers'))}>Teachers</button>
        <button className='filter-btn' onClick={() => setFilter('students')(setTitle('Students'))}>Students</button>
      </div>
      <ul className='home__container'>
        {filteredUsers.map(({ id, name, image }) => {
          return <li className='home__item-list' key={id}>
            <Link className='home__item-card' to={`/home/users/${id}`}> {image && <img className='card-images' src={'images/' + image} />} </Link>
            <p>{name}</p>
          </li>
        })}
      </ul>
    </>
  )
}
