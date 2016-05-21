import axios from 'axios'

const API_ROOT_URL = 'http://localhost:8787'

export function completeTodo(todoId) {
  console.log('complete todo #', todoId)
  return axios.put(`${API_ROOT_URL}/api/chores`, {
    headers: {
      token: localStorage.getItem('obie')
    },
    id: todoId
  })
}

export function signUp(name, email, password) {
  return axios.post(`${API_ROOT_URL}/api/users`, {
    name: name,
    email: email,
    password: password
  })
}

export function login(email, password) {
  return axios.post(`${API_ROOT_URL}/api/users/signin`, {
    email: email,
    password: password
  })
}