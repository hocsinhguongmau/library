import { useAppDispatch } from '@/redux/store'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import { addNewBook } from '@/redux/features/book/booksSlice'

export default function AddBook() {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit: SubmitHandler<any> = (data) => {
    const id = uuidv4()
    dispatch(addNewBook({ id, ...data }))
    reset()
  }
  const [open, setOpen] = useState(false)

  const toggleForm = () => {
    setOpen(!open)
  }

  return (
    <>
      <p>
        <button className="button button-outlined" onClick={toggleForm}>
          Add new book
        </button>
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`max-w-xl mx-auto ${open ? '' : 'hidden'}`}>
        <div className="form-row">
          <label htmlFor="isbn">ISBN:</label>
          <div>
            <input type="text" id="isbn" {...register('isbn', { required: true })} />
            <p className="mt-2 text-red-500">{errors.isbn && <span>ISBN is required</span>}</p>
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="title">Title:</label>
          <div>
            <input type="text" id="title" {...register('title', { required: true })} />
            <p className="mt-2 text-red-500">{errors.title && <span>Title is required</span>}</p>
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="picture">Picture:</label>
          <div>
            <input type="text" id="picture" {...register('picture', { required: true })} />
            <p className="mt-2 text-red-500">
              {errors.picture && <span>Picture is required</span>}
            </p>
          </div>
        </div>

        <div className="form-row">
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" {...register('description')} />
        </div>
        <div className="form-row">
          <label htmlFor="publisher">Publisher:</label>
          <div>
            <input type="text" id="publisher" {...register('publisher', { required: true })} />
            <p className="mt-2 text-red-500">
              {errors.publisher && <span>Publisher is required</span>}
            </p>
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="author">Author:</label>
          <div>
            <input type="text" id="author" {...register('author', { required: true })} />
            <p className="mt-2 text-red-500">{errors.author && <span>Author is required</span>}</p>
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="category">Category:</label>
          <div>
            <input type="text" id="category" {...register('category', { required: true })} />
            <p className="mt-2 text-red-500">
              {errors.category && <span>Category is required</span>}
            </p>
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="status">Status:</label>
          <select id="status" defaultValue={'available'} {...register('status')}>
            <option value="available">Available</option>
            <option value="borrowed">Borrowed</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="publishedDate">Published date:</label>
          <div>
            <input
              type="text"
              id="publishedDate"
              {...register('publishedDate', { required: true })}
            />
            <p className="mt-2 text-red-500">
              {errors.publishedDate && <span>Date is required</span>}
            </p>
          </div>
        </div>
        <button className="mt-4 button button-outlined" type="submit">
          Add Book
        </button>
      </form>
    </>
  )
}
