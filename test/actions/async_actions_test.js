// import { renderComponent, expect } from '../test_helper'
// import Messages from '../../src/containers/messages'
// import thunk from 'redux-thunk'
// import configureMockStore from 'redux-mock-store'
// import nock from 'nock'
// import fetchMessages from '../../src/actions'
// // data
// import messageData from './testing_data'

// import Pretender from 'pretender'


// //// maybe need to uninstall
// import promise from 'redux-promise'
// const middlewares = [ thunk, promise ]
// const mockStore = configureMockStore(middlewares)
// ////

// const server = new Pretender(() => {
//   this.get('/messages', () => {
//     const allMessages = JSON.stringify(messageData)
//     return [200, {"Content-type": "application/json"}, allMessages]
//   })

//   // this.get('/chores', () => {
//   //   const allChores = JSON.stringify(choreData)
//   //   return [200, {"Content-type": "application/json"}, allChores]
//   // })
// })

// describe('async actions', () => {
//   let component

//   afterEach(() => {
//     nock.cleanAll()
//   })

//   beforeEach(() => {
//     component = renderComponent(Messages)
//   })

//   describe('messages', () => {
//     // axios.get('/messages').then(messages => console.log('messages'))

//   })  
// })
