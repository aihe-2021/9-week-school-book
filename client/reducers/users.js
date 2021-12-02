import { SET_USERS } from '../actions'

const initialState = [{
  id: 0,
  authId: '',
  name: '',
  cohort: '',
  email: '',
  location: '',
  quote: '',
  githubLink: '',
  skills: '',
  facebook: '',
  linkedin: '',
  twitter: '',
  instagram: '',
  image: ''
}
]

export default function users (state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return action.users
    default:
      return state
  }
}
