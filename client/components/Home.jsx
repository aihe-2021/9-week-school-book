import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUsers } from '../actions'
// import User from './User'

export default function Home () {
  const { users } = useSelector(state => state)
  console.log(users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <>
      <h1> Welcome to the Users page</h1>
      <ul>
        {users.map(({ id, image }) => {
          return <li key={id}>
            <Link to={`/home/users/${id}`}> <img className='images' src={`/images/${image}`} /> </Link>
          </li>
        })}
      </ul>

    </>
  )
}
