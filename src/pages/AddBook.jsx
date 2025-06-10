import { useNavigate } from 'react-router-dom'
import BookForm from '../components/BookForm'
import { createBook } from '../services/bookService'

export default function AddBook() {
  const navigate = useNavigate()

  async function handleSubmit(data) {
    await createBook(data)
    navigate('/')
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Добавление новой книги</h2>
      <BookForm
        defaultValues={{
          title: '',
          author: '',
          genre: '',
          rating: '',
          status: '',
          notes: '',
        }}
        onSubmit={handleSubmit}
      />
    </div>
  )
}
