import { FETCH_HOUSE_DATA, FETCH_USERS } from '../actions/types'

const INITIAL_STATE = {
  users: [],
  address: '',
  code: '',
  name: '',
  landlordId: 0
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_HOUSE_DATA:
      const data = action.payload.data[0]
      return Object.assign({}, state, { 
        address: data.address,
        code: data.code,
        name: data.name,
        landlordId: data.landlord_id
      })

    case FETCH_USERS:
      return Object.assign({}, state, {
        users: action.payload.data
      })
      
    default:
      return state
  }
}