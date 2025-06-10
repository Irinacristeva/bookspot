import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'https://68487ec7ec44b9f3494117c0.mockapi.io/books'

export async function getBooks() {
  const { data } = await axios.get(API_URL)
  return data
}

export async function getBookById(id) {
  const { data } = await axios.get(`${API_URL}/${id}`)
  return data
}

export async function createBook(book) {
  const { data } = await axios.post(API_URL, book)
  return data
}

export async function updateBook(id, updated) {
  console.log('→ PUT', `${API_URL}/${id}`, updated)
  return axios.patch(`${API_URL}/${id}`, updated)

}

export async function deleteBook(id) {
  console.log('→ DELETE', `${API_URL}/${id}`)
  return axios.delete(`${API_URL}/${id}`)
}
