import { roommateMessages, landlordMessages } from '../../src/reducers/messages_reducer'
import * as actions from '../../src/actions/types'
import { expect } from '../test_helper'

describe('messages reducer', () => {

  it('handles FETCH_MESSAGES', () => {
    const action = { type: actions.FETCH_MESSAGES, payload: { data: [{ name: 'justin', text: 'hello' }]}}
    const prevState = []
    const nextState = roommateMessages(prevState, action)

    expect(nextState).to.deep.equal([{ name: 'justin', text: 'hello' }])
  })

  it('should handle if action.type is unrecognized',() => {
    const action = { type: 'something', payload: {data: []}}
    const prevState = [{ name: 'justin', text: 'hello there'}]
    const nextState = roommateMessages(prevState, action)

    expect(nextState).to.deep.equal(prevState)
  })

})

describe('landlord messages reducer', () => {

  it('handles FETCH_LANDLORD_MESSAGES', () => {
    const action = { type: actions.FETCH_LANDLORD_MESSAGES, payload: { data: [{ name: 'justin', text: 'hello' }]}}
    const prevState = []
    const nextState = landlordMessages(prevState, action)

    expect(nextState).to.deep.equal([{ name: 'justin', text: 'hello' }])
  })

  it('should handle if action.type is unrecognized',() => {
    const action = { type: 'something', payload: {data: []}}
    const prevState = [{ name: 'justin', text: 'hello there'}]
    const nextState = landlordMessages(prevState, action)

    expect(nextState).to.deep.equal(prevState)
  })

})