import axios from 'axios'

const apiService = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

apiService.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      // Ошибка от сервера (HTTP статус коды вне диапазона 2xx)
      console.error('API Error Response:', error.response.data)
      console.error('Status Code:', error.response.status)

      throw new Error('API Error') // Пробрасываем ошибку выше
    } else {
      // Неожиданная ошибка
      console.error('Error:', error.message)
    }
    return Promise.reject(error)
  }
)

// Выполнение запроса на получение всех постов
const fetchPosts = async () => {
  try {
    return await apiService.get('/posts')
  } catch (error) {
    console.error('Ошибка при получении постов:', error)
    throw error
  }
}

// Выполнение запроса на получение постов по authorId
const fetchPostsByAuthor = async (authorId) => {
  try {
    return await apiService.get(`/posts?userId=${authorId}`)
  } catch (error) {
    console.error('Ошибка при получении поста пользователя:', error)
    throw error
  }
}

export { fetchPosts, fetchPostsByAuthor }
