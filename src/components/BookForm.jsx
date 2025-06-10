import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  title: yup.string().required('Название обязательно'),
  author: yup.string().required('Автор обязателен'),
  genre: yup.string().required('Жанр обязателен'),
  rating: yup.number().required().min(0).max(10),
  status: yup.string().required('Выберите статус'),
  notes: yup.string()
})

export default function BookForm({ defaultValues = {}, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema)
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl mx-auto bg-white p-6 rounded shadow">
      <div>
        <label htmlFor="title" className="block mb-1 font-medium">Название</label>
        <input id="title" {...register('title')} className="w-full border px-3 py-2 rounded" />
        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
      </div>
      <div>
        <label htmlFor="author" className="block mb-1 font-medium">Автор</label>
        <input id="author" {...register('author')} className="w-full border px-3 py-2 rounded" />
        {errors.author && <p className="text-red-500 text-sm">{errors.author.message}</p>}
      </div>
      <div>
        <label htmlFor="genre" className="block mb-1 font-medium">Жанр</label>
        <input id="genre" {...register('genre')} className="w-full border px-3 py-2 rounded" />
        {errors.genre && <p className="text-red-500 text-sm">{errors.genre.message}</p>}
      </div>
      <div>
        <label htmlFor="rating" className="block mb-1 font-medium">Рейтинг (0–10)</label>
        <input id="rating" {...register('rating')} type="number" step="0.1" className="w-full border px-3 py-2 rounded" />
        {errors.rating && <p className="text-red-500 text-sm">{errors.rating.message}</p>}
      </div>
      <div>
        <label htmlFor="status" className="block mb-1 font-medium">Статус</label>
        <select id="status" {...register('status')} className="w-full border px-3 py-2 rounded">
          <option value="">Выберите</option>
          <option value="прочитано">Прочитано</option>
          <option value="в процессе">В процессе</option>
          <option value="хочу прочитать">Хочу прочитать</option>
        </select>
        {errors.status && <p className="text-red-500 text-sm">{errors.status.message}</p>}
      </div>
      <div>
        <label htmlFor="notes" className="block mb-1 font-medium">Заметки</label>
        <textarea id="notes" {...register('notes')} rows="3" className="w-full border px-3 py-2 rounded" />
      </div>
      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500">
        Сохранить
      </button>
    </form>
  )
}