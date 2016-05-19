import reducer from '../../src/reducers/chores_reducer'
import * as actions from '../../src/actions/types'
import { expect } from '../test_helper'

describe('todos reducer', () => {

  it('handles FETCH_CHORES', () => {
    const action = { type: actions.FETCH_CHORES, payload: { data: [{ chorename: 'wash the dog', details: 'he\'s dirty', due_date: new Date(), name: 'joey' }]}}
    const prevState = []
    const nextState = reducer(prevState, action)

    expect(nextState).to.deep.equal([{ chorename: 'wash the dog', details: 'he\'s dirty', due_date: new Date(), name: 'joey' }])
  })

  it('should handle if action.type is unrecognized',() => {
    const action = { type: 'something', payload: {data: []}}
    const prevState = [{ chorename: 'wash the dog', details: 'he\'s dirty', due_date: new Date(), name: 'joey' }]
    const nextState = reducer(prevState, action)

    expect(nextState).to.deep.equal(prevState)
  })

})