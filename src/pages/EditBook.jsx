import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import BookForm from '../components/BookForm'
import { getBookById, updateBook } from '../services/bookService'

export default function EditBook() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [book, setBook] = useState(null)

  useEffect(() => {
    async function fetchBook() {
      const data = await getBookById(id)
      setBook(data)
    }
    fetchBook()
  }, [id])

 async function handleSubmit(updatedData) {
  alert('Сохраняем изменения…')
  try {
    await updateBook(id, updatedData)
    navigate('/')
  } catch (err) {
    console.error('Ошибка обновления:', err)
  }
}


  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Редактирование книги</h2>
      {book ? (
        <BookForm defaultValues={book} onSubmit={handleSubmit} />
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  )
}
