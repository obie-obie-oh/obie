import { renderComponent, expect } from '../test_helper'
import Messages from '../../src/containers/messages'


describe('Messages', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Messages)
  })

  it('has the correct class', () => {
    expect(component).to.have.class('messages')
  })
})

