import { renderComponent, expect } from '../test_helper'
import Chores from '../../src/containers/chores'

describe('Chores', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Chores)
  })

  it('has the correct class', () => {
    expect(component).to.have.class('chores')
  })
})