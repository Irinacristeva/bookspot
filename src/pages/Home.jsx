import { useEffect, useState } from 'react'
import { getBooks, deleteBook } from '../services/bookService'
import BookCard from '../components/BookCard'
import { toast } from 'react-toastify'

export default function Home() {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState('')
  const [filterGenre, setFilterGenre] = useState('')

  useEffect(() => {
    fetchAll()
  }, [])

  async function fetchAll() {
    const data = await getBooks()
    setBooks(data)
  }

  async function handleDelete(id) {
    if (confirm('Точно удалить книгу?')) {
      try {
        await deleteBook(id)
        toast.success('Книга удалена')
        await fetchAll()
      } catch (err) {
        console.error('Ошибка удаления:', err)
      }
    }
  }

  const visible = books.filter((b) => {
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase())
    const matchGenre = filterGenre ? b.genre === filterGenre : true
    return matchSearch && matchGenre
  })

  const genres = Array.from(new Set(books.map((b) => b.genre)))

  return (
    <div className="container mx-auto space-y-6 px-4 md:px-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <input
          type="text"
          placeholder="Поиск по названию…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 border border-gray-300 rounded px-3 py-2"
        />
        <select
          value={filterGenre}
          onChange={(e) => setFilterGenre(e.target.value)}
          className="w-full md:w-1/4 border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Все жанры</option>
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      {visible.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {visible.map((book) => (
            <BookCard key={book.id || book._id} book={book} onDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Нет книг для отображения</p>
      )}
    </div>
  )
}
