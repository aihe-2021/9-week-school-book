import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Home () {
  const { users } = useSelector(state => state)

  const [displayGroup, setDisplayGroup] = useState(users)
  console.log(displayGroup)
  useEffect(() => {
    filterDisplayGroup('All')
  }, [])

  function filterDisplayGroup (group, userData = users) {
    if (group === 'All') {
      setDisplayGroup(userData)
    } else if (group === 'Teachers') {
      const teachers = userData.filter(user => user.teacher === 'true')
      setDisplayGroup(teachers)
    } else if (group === 'Students') {
      const students = userData.filter(user => user.teacher === 'false')
      setDisplayGroup(students)
    }
  }
  return (
    <>
      <div className='btn-container'>
        <button className='filter-btn' onClick={() => filterDisplayGroup('All')}>All</button>
        <button className='filter-btn' onClick={() => filterDisplayGroup('Teachers')}>Teachers</button>
        <button className='filter-btn' onClick={() => filterDisplayGroup('Students')}>Students</button>
      </div>
      <ul className='home__container'>
        {displayGroup.map(({ id, name, image }) => {
          return <li className='home__item-list' key={id}>
            <Link className='home__item-card' to={`/home/users/${id}`}> {image && <img className='card-images' src={image} />} </Link>
            <p>{name}</p>
          </li>
        })}
      </ul>
    </>
  )
}
