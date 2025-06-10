#  Структура проекта BookSpot

---

##  src/

- **main.jsx** — точка входа в приложение, подключение React и Router
- **App.jsx** — маршруты, lazy‑загрузка страниц, общий layout

---

###  pages/

- **Home.jsx** — отображение списка книг, поиск, фильтрация, удаление
- **AddBook.jsx** — добавление книги
- **EditBook.jsx** — редактирование книги
- **BookDetails.jsx** — подробный просмотр информации о книге

---

###  components/

- **BookCard.jsx** — карточка книги
- **BookForm.jsx** — форма добавления/редактирования с валидацией (react-hook-form + yup)

---

###  services/

- **bookService.js** — функции для работы с MockAPI (axios: get, post, put, delete)

---

##  Тесты

- **tests/BookForm.test.jsx** — юнит‑тесты формы: валидация, submit

---

##  Используемые библиотеки

- **React** — библиотека для построения интерфейсов
- **react-router-dom** — маршрутизация
- **axios** — HTTP-запросы
- **react-hook-form + yup** — работа с формами и валидацией
- **tailwindcss** — стилизация и адаптивная вёрстка
- **framer-motion** — анимации
- **react-toastify** — уведомления
- **jest + @testing-library/react** — тестирование компонентов

---

##  API

MockAPI — https://68487ec7ec44b9f3494117c1.mockapi.io/api/books  
Конфигурация API хранится в `.env`:

```
VITE_API_URL=https://68487ec7ec44b9f3494117c1.mockapi.io/api/books
```

---

##  Маршруты (Routes)

| Путь           | Компонент       | Назначение                    |
|----------------|------------------|-------------------------------|
| `/`            | `Home`           | Главная страница              |
| `/add`         | `AddBook`        | Добавление книги              |
| `/edit/:id`    | `EditBook`       | Редактирование книги          |
| `/book/:id`    | `BookDetails`    | Просмотр деталей              |

---

Файл создан для сдачи индивидуального проекта по React.