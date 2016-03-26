import axios from 'axios'

export const FETCH_MESSAGES = 'FETCH_MESSAGES'
export const FETCH_CHORES = 'FETCH_CHORES'

const ROOT_URL = 'https://obie.herokuapp.com'

export function fetchMessages () {
  const request = axios.get(`${ROOT_URL}/messages`, {
    headers: {
      // token: localStorage.getItem('obie')
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1hbmNoZXJqZS5qdXN0aW5AZ21haWwuY29tIiwiYWNjZXNzX3Rva2VuIjoiZGVlMzI0MWEwNWMzZjk4MzU1NzcyNzM1MzI1MzA5YWNhNDY2NWI0ZjY4YTJhMGJlYmZmMWY3YmUzZTVjNGMzYiIsInVzZXJpZCI6NSwiaG91c2VJZCI6MiwiaXNMYW5kbG9yZCI6bnVsbH0.A9PYrLh1kPRapBbSAeaTZ3cyqrMwqlFP0nfPeD7yX8M'
    }
  })
  return {
    type: FETCH_MESSAGES,
    payload: request
  }
}

export function fetchChores () {
  const request = axios.get(`${ROOT_URL}/chores`, {
    headers: {
      token: localStorage.getItem('obie')
    }
  })
  return {
    type: FETCH_CHORES,
    payload: request
  }
}



