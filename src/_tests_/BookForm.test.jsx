import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import BookForm from '../components/BookForm.jsx'

describe('BookForm', () => {
  it('показывает ошибку, если не введено название книги', async () => {
    const handleSubmit = jest.fn()

    render(<BookForm onSubmit={handleSubmit} />)

    fireEvent.click(screen.getByRole('button', { name: /сохранить/i }))

    expect(await screen.findByText(/название обязательно/i)).toBeInTheDocument()
    expect(handleSubmit).not.toHaveBeenCalled()
  })

  it('вызывает onSubmit с корректными данными', async () => {
    const handleSubmit = jest.fn()

    render(<BookForm onSubmit={handleSubmit} />)

    fireEvent.input(screen.getByLabelText(/название/i), {
      target: { value: 'Тестовая книга' }
    })

    fireEvent.input(screen.getByLabelText(/автор/i), {
      target: { value: 'Автор' }
    })

    fireEvent.input(screen.getByLabelText(/жанр/i), {
      target: { value: 'Фантастика' }
    })

    fireEvent.change(screen.getByLabelText(/статус/i), {
      target: { value: 'прочитано' }
    })

    fireEvent.click(screen.getByRole('button', { name: /сохранить/i }))
  })
})