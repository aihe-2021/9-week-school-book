import React, { useState } from 'react'

import { updateUser } from '../apis'

const EditUser = ({ id, updateTheUser }) => {
  const formInfo = {
    name: '',
    email: '',
    location: '',
    quote: '',
    skills: '',
    facebook: '',
    linkedin: '',
    twitter: '',
    instagram: ''
  }

  const [form, setForm] = useState(formInfo)
  const [showForm, setShowForm] = useState(false)

  function handleSubmit (evt, id) {
    evt.preventDefault()

    updateUser(id, form)
      .then((updatedUser) => {
        updateTheUser(updatedUser)
        return null
      })
      .catch(e => {
        console.error(e.message)
      })
  }

  function handleChange (evt) {
    const { name, value } = evt.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  return (
    <div>
      <button className='edit' onClick={() => { setShowForm(!showForm) }}>Click to Edit</button>
      {showForm &&
      <form onSubmit={evt => { handleSubmit(evt, id) }}>
        <ul><br/>
          <li> <input placeholder='Name' id='name' onChange={handleChange} value={form.name} name='name'/>
          </li>
          <li>
            <input placeholder='Email' id='email' onChange={handleChange} value={form.email} name='email'/>
          </li>
          <li>
            <input placeholder='Location' id='location' onChange={handleChange} value={form.location} name='location'/>
          </li>
          <li>
            <input placeholder='Quote' id='quote' onChange={handleChange} value={form.quote} name='quote'/>
          </li>
          <li>
            <input placeholder='Skills' id='skills' onChange={handleChange} value={form.skills} name='skills'/>
          </li>
          <li>
            <input placeholder='Facebook' id='facebook' onChange={handleChange} value={form.facebook} name='facebook'/>
          </li>
          <li>
            <input placeholder='LinkedIn' id='linkedin' onChange={handleChange} value={form.linkedin} name='linkedin'/>
          </li>
          <li>
            <input placeholder='Twitter' id='twitter' onChange={handleChange} value={form.twitter} name='twitter'/>
          </li>
          <li>
            <input placeholder='Instagram' id='instagram' onChange={handleChange} value={form.instagram} name='instagram'/>
          </li>
        </ul>
        <button className='edit'>Click to Submit</button>
      </form>}
    </div>
  )
}

export default EditUser
