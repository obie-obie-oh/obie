import axios from 'axios'

export const FETCH_MESSAGES = 'FETCH_MESSAGES'
const ROOT_URL = 'https://obie.herokuapp.com'

export function fetchMessages () {
  const request = axios.get(`${ROOT_URL}/messages`, {
    headers: {
      token: localStorage.getItem('obie')
    }
  })

  return {
    type: FETCH_MESSAGES,
    payload: request
  }
}