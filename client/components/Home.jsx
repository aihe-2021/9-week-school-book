import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Home () {
  const [filter, setFilter] = useState('all')
  const { users } = useSelector(state => state)

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
      <h1 className='home_tittle'>Students and Facilitators</h1>
      <div className='btn-container'>
        <button className='filter-btn' onClick={() => setFilter('all')}>All</button>
        <button className='filter-btn' onClick={() => setFilter('teachers')}>Teachers</button>
        <button className='filter-btn' onClick={() => setFilter('students')}>Students</button>
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
