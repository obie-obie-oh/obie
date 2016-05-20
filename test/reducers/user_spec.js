import reducer from '../../src/reducers/user_reducer'
import * as actions from '../../src/actions/types'
import { expect } from '../test_helper'

describe('user reducer', () => {

  const INITIAL_STATE = {
    email: '',
    name: '',
    userImageUrl: ''
  }

  it('handles FETCH_USER_DATA', () => {
    const action = { type: actions.FETCH_USER_DATA, payload: { data: [{
      email: 'justin@yahoo.com',
      name: 'Justin Mancherje',
      user_image_url: 'google.com/justinsimage'
    }]}}
    const nextState = reducer(INITIAL_STATE, action)

    expect(nextState).to.deep.equal({
      email: 'justin@yahoo.com',
      name: 'Justin Mancherje',
      userImageUrl: 'google.com/justinsimage'
    })
  })

  it('should handle if action.type is unrecognized',() => {
    const action = { type: 'something', payload: {data: []}}
    const nextState = reducer(INITIAL_STATE, action)

    expect(nextState).to.deep.equal(INITIAL_STATE)
  })

})