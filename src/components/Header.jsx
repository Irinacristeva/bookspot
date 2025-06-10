import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold text-indigo-600">
          BookSpot
        </h1>
        <nav className="space-x-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Главная
          </Link>
          <Link
            to="/add"
            className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-500 transition-colors"
          >
            Добавить книгу
          </Link>
        </nav>
      </div>
    </header>
  )
}
