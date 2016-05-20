import reducer from '../../src/reducers/house_reducer'
import * as actions from '../../src/actions/types'
import { expect } from '../test_helper'

describe('house reducer', () => {

  let INITIAL_STATE = {
    users: [],
    address: '',
    code: '',
    name: '',
    landlordId: 0,
    userImage: '',
  }

  it('handles FETCH_USERS', () => {
    const action = { type: actions.FETCH_USERS, payload: { data: [{ name: 'justin', id: 1, email: '' }, { name: 'joey', id: 2, email: '' }, { name: 'nick', id: 3, email: '' }]}}
    const nextState = reducer(INITIAL_STATE, action)

    expect(nextState).to.deep.equal({
      users: [{ name: 'justin', id: 1, email: '' }, { name: 'joey', id: 2, email: '' }, { name: 'nick', id: 3, email: '' }],
      address: '',
      code: '',
      name: '',
      landlordId: 0,
      userImage: '',
    })
  })

  it('should handle if action.type is unrecognized',() => {
    const action = { type: 'something', payload: {data: []}}
    const nextState = reducer(INITIAL_STATE, action)

    expect(nextState).to.deep.equal(INITIAL_STATE)
  })

})