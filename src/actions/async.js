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