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

  function refreshPage () {
    window.location.reload(false)
  }

  return (
    <div>
      <button className='edit' onClick={() => { setShowForm(!showForm) }}>Click to Edit</button>
      {showForm &&
      <form onSubmit={evt => { handleSubmit(evt, id) }}>
        <ul><br/>
          <li>
            <label htmlFor='name'><input placeholder='Name' id='name' onChange={handleChange} value={form.name} name='name'/></label>
          </li>
          <li>
            <label htmlFor='email'><input placeholder='Email' id='email' onChange={handleChange} value={form.email} name='email'/></label>
          </li>
          <li>
            <label htmlFor='location'><input placeholder='Location' id='location' onChange={handleChange} value={form.location} name='location'/></label>
          </li>
          <li>
            <label htmlFor='quote'><input placeholder='Quote' id='quote' onChange={handleChange} value={form.quote} name='quote'/></label>
          </li>
          <li>
            <label htmlFor='skills'><input placeholder='Skills' id='skills' onChange={handleChange} value={form.skills} name='skills'/></label>
          </li>
          <li>
            <label htmlFor='facebook'><input placeholder='Facebook' id='facebook' onChange={handleChange} value={form.facebook} name='facebook'/></label>
          </li>
          <li>
            <label htmlFor='linkedin'><input placeholder='LinkedIn' id='linkedin' onChange={handleChange} value={form.linkedin} name='linkedin'/></label>
          </li>
          <li>
            <label htmlFor='twitter'><input placeholder='Twitter' id='twitter' onChange={handleChange} value={form.twitter} name='twitter'/></label>
          </li>
          <li>
            <label htmlFor='instagram'><input placeholder='Instagram' id='instagram' onChange={handleChange} value={form.instagram} name='instagram'/></label>
          </li>
        </ul>
        <button onClick={() => { refreshPage() }} className='edit'>Click to Submit</button>
      </form>}
    </div>
  )
}

export default EditUser
