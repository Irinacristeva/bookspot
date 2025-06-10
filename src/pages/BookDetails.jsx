import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getBookById } from '../services/bookService'

export default function BookDetails() {
  const { id } = useParams()
  const [book, setBook] = useState(null)

  useEffect(() => {
    async function fetchBook() {
      const data = await getBookById(id)
      setBook(data)
    }
    fetchBook()
  }, [id])

  if (!book) {
    return <p>Загрузка...</p>
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4">
      <h2 className="text-2xl font-bold">{book.title}</h2>
      <p><span className="font-medium">Автор:</span> {book.author}</p>
      <p><span className="font-medium">Жанр:</span> {book.genre}</p>
      <p><span className="font-medium">Статус:</span> {book.status}</p>
      {book.rating && (
        <p><span className="font-medium">Рейтинг:</span> {book.rating}/10</p>
      )}
      {book.notes && (
        <div>
          <p className="font-medium">Заметки:</p>
          <p className="whitespace-pre-wrap text-gray-700">{book.notes}</p>
        </div>
      )}
      <Link
        to={`/edit/${book.id}`}
        className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
      >
        Редактировать
      </Link>
    </div>
  )
}
