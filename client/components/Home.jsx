import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUsers } from '../actions'
// import User from './User'

export default function Home () {
  const { users } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <>
      <h1 className='home_tittle'> Welcome to the Users page</h1>
      <ul className='home__container'>
        {users.map(({ id, image }) => {
          return <li className='home__item-list' key={id}>
            <Link className='home__item-card' to={`/home/users/${id}`}> <img className='card-images' src={`/images/${image}`} /> </Link>
          </li>
        })}
      </ul>

    </>
  )
}
