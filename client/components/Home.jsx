import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Home () {
  const { users } = useSelector(state => state)
  const [displayGroup, setDisplayGroup] = useState(users)
  const [displayGroupName, setDisplayGroupName] = useState('Students and Teachers')

  useEffect(() => {
    setDisplayGroup(users)
  }, [users])

  function filterDisplayGroup (group, userData = users) {
    if (group === 'All') {
      setDisplayGroup(userData)
      setDisplayGroupName('Students and Teachers')
    } else if (group === 'Teachers') {
      const teachers = userData.filter(user => user.teacher === 'true')
      setDisplayGroup(teachers)
      setDisplayGroupName('Teachers')
    } else if (group === 'Students') {
      const students = userData.filter(user => user.teacher === 'false')
      setDisplayGroup(students)
      setDisplayGroupName('Students')
    }
  }

  return (
    <>
      <h1 className='home_tittle'>{`${displayGroupName}`}</h1>
      <div className='btn-container'>
        <button className='filter-btn' onClick={() => filterDisplayGroup('All')}>All</button>
        <button className='filter-btn' onClick={() => filterDisplayGroup('Teachers')}>Teachers</button>
        <button className='filter-btn' onClick={() => filterDisplayGroup('Students')}>Students</button>
      </div>
      <ul className='home__container'>
        {displayGroup.map(({ id, name, image }) => {
          return <li className='home__item-list' key={id}>
            <Link className='home__item-card' to={`/users/${id}`}> {image && <img className='card-images' src={image} />} </Link>
            <p>{name}</p>
          </li>
        })}
      </ul>
    </>
  )
}
