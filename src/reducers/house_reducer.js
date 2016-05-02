import { FETCH_HOUSE_DATA, FETCH_USERS, FETCH_USER_IMAGE } from '../actions/types'

const INITIAL_STATE = {
  users: [],
  address: '',
  code: '',
  name: '',
  landlordId: 0,
  userImage: 'http://media2.popsugar-assets.com/files/2013/07/10/010/n/4981324/78a3a96bf028c9fe_thumb_temp309592141373411224.xxxlarge/i/How-Choose-Right-Face-Mask.jpg',
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

    case FETCH_USER_IMAGE:
      return Object.assign({}, state, {
        userImage: action.payload.data[0].user_image_url || 'http://media2.popsugar-assets.com/files/2013/07/10/010/n/4981324/78a3a96bf028c9fe_thumb_temp309592141373411224.xxxlarge/i/How-Choose-Right-Face-Mask.jpg'
      })
      
    default:
      return state
  }
}