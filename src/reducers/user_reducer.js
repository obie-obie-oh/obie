import { FETCH_USER_DATA } from '../actions/types'

const INITIAL_STATE = {
  email: '',
  name: '',
  userImageUrl: ''
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USER_DATA:
      const data = action.payload.data[0]
      console.log('data', data)
      return Object.assign({}, state, { 
        email: data.email,
        name: data.name,
        userImageUrl: data.user_image_url
      })
      
    default:
      return state
  }
}