import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Home = lazy(() => import('./pages/Home'))
const AddBook = lazy(() => import('./pages/AddBook'))
const EditBook = lazy(() => import('./pages/EditBook'))
const BookDetails = lazy(() => import('./pages/BookDetails'))

export default function App() {
  return (
    <div className="min-h-screen py-6 px-4 md:px-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">📚 BookSpot</h1>
      <Suspense fallback={<p className="text-center">Загрузка...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </Suspense>
      <ToastContainer position="bottom-right" />
    </div>
  )
}

