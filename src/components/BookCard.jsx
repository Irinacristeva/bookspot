import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import React from 'react'

export default React.memo(function BookCard({ book, onDelete }) {
  const bookId = book.id || book._id

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow p-4 flex flex-col"
    >
      <h2 className="text-xl font-semibold mb-1">{book.title}</h2>
      <p className="text-sm text-gray-600">Автор: {book.author}</p>
      <p className="text-sm text-gray-600">Жанр: {book.genre}</p>
      <p className="text-sm text-gray-600">
        Статус: <span className="font-medium">{book.status}</span>
      </p>
      <div className="mt-3 flex items-center justify-between">
        <Link
          to={`/edit/${bookId}`}
          className="text-indigo-600 hover:underline text-sm transition-colors hover:text-indigo-800"
        >
          Редактировать
        </Link>
        <button
          onClick={() => onDelete(bookId)}
          className="text-red-500 hover:underline text-sm"
        >
          Удалить
        </button>
      </div>
    </motion.div>
  )
})
