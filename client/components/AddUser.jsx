import React, { useState, useEffect } from 'react'
import { createUser, getUsers } from '../apis/index'

const initialFormData = {
  authId: '',
  name: '',
  cohort: '',
  email: '',
  location: '',
  Quote: '',
  githubLink: '',
  skills: '',
  facebook: '',
  linkedin: '',
  twitter: '',
  instagram: ''
}

const style = { display: 'block' }

const AddUser = () => {
  const [users, setUsers] = useState([])
  const [form, setForm] = useState(initialFormData)
  useEffect(() => {
    getUsers()
      .then(result => setUsers(result))
      .catch(err => console.log(err.message))
  }, [])

  // THEN ADD UPLOAD IMAGE COMPONENT

  function handleChange (event) {
    const { name, value } = event.target
    // depends on what field user input
    // if the field is authId, then name="authId" & value = "manamana"
    // if the filed is name, then name="name" & value ="what ever user input in the name field"
    // if the field is cohort, then name="cohort" & value = "whatever user input in the cohort field"
    const newFormData = {
      ...form,
      [name]: value
    }
    setForm(newFormData)
  }

  function handleSubmit (event) { // POST newFormData to database to create a new User and add it to the database on server side
    event.preventDefault() // hijack the freshing page the event so that we don't loose the state

    createUser(form) // send down the the whole form data to API to create a new User and add it to the data on server side. This createUser function also return the whole new User (see line 13 on apiClient)
      .then((newUser) => {
        setUsers([...users, newUser]) // i want to display initial Users and new User via use effect
        setForm(initialFormData) // after finish with creating a new User book and add it to the data, then it's nice to reset the state of the form to its initial state (i.e empty)
        return null
      })
      .catch(() => {})
  }

  return (
    <div className="add-User">
      <h2>Create a new user</h2>

      <form onSubmit={handleSubmit} >
            AuthId
        <label htmlFor="authId" style={style}>
          <input
            id = 'authId'
            onChange={handleChange}
            value = {form.authId} // this "form" here refers to the form data on line 15 which is an object made up by 4 properties id, authId, name, cohort: each property has key and value. For example, property authId has a key of "authId" and its value is to be input by the user via the form on the browser. the initial state of the form data is blank and the state is updated once user input data in the form field via browser.
            name='authId'
          />
        </label>

            name
        <label htmlFor="name" style={style}>
          <input
            id = 'name'
            onChange={handleChange}
            value = {form.name}
            name='name'
          />
        </label>

             cohort
        <label htmlFor="cohort" style={style}>
          <input
            id = 'cohort'
            onChange={handleChange}
            value = {form.cohort}
            name='cohort'
          />
        </label>

        <button style={style} >create new User</button >
      </form>

    </div>
  )
}

export default AddUser
