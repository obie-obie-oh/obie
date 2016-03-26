import { renderComponent, expect } from '../test_helper'
import Finances from '../../src/containers/finances'

describe('Finances', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Finances)
  })

  it('has the correct class', () => {
    expect(component).to.have.class('finances')
  })
})