import reducer from '../../src/reducers/finances_reducer'
import * as actions from '../../src/actions/types'
import { expect } from '../test_helper'

describe('finances reducer', () => {

  it('handles FETCH_PAYMENTS', () => {
    const action = { type: actions.FETCH_PAYMENTS, payload: { data: [{ billName: 'electric', ower: 'nick'}]}}
    const prevState = { bills: [], payments: [] }
    const nextState = reducer(prevState, action)

    expect(nextState).to.deep.equal({ bills: [], payments: [{ billName: 'electric', ower: 'nick' }]})
  })

  it('handles FETCH_BILLS', () => {
    const action = { type: actions.FETCH_BILLS, payload: { data: [{ billName: 'water', whoIsOwed: 'joey', amount: 43.24 }]}}
    const prevState = { bills: [], payments: [] }
    const nextState = reducer(prevState, action)

    expect(nextState).to.deep.equal({ bills: [{ billName: 'water', whoIsOwed: 'joey', amount: 43.24 }], payments: [] })
  })

  it('should handle if action.type is unrecognized',() => {
    const action = { type: 'something', payload: {data: []}}
    const prevState = [{ chorename: 'wash the dog', details: 'he\'s dirty', due_date: new Date(), name: 'joey' }]
    const nextState = reducer(prevState, action)

    expect(nextState).to.deep.equal(prevState)
  })

})