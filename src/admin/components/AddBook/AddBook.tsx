import { useAppDispatch } from '@/redux/store'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import 'react-calendar/dist/Calendar.css'

interface IFormInput {
  picture: string
  isbn: string
  title: string
  description: string
  author: string
  category: string
  publisher: string
  status: 'borrowed' | 'available'
  publishedDate: string
}

export default function AddBook() {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: any) => {
    const id = uuidv4()
    console.log({ id, ...data })
    // dispatch(addNewBook(data))
  }

  const [open, setOpen] = useState(false)

  const toggleForm = () => {
    setOpen(!open)
  }
  const [showCalendar, setShowCalendar] = useState(false)
  const onCalendarClose = () => {
    setShowCalendar(false)
  }

  // "id": "642324f4a383db6f49d6b82b",
  // "picture": "https://picsum.photos/id/2/200/300.webp",
  // "isbn": "9789-9-0-0",
  // "title": "voluptate cupidatat voluptate",
  // "description": "Esse dolor id deserunt nulla. Dolore reprehenderit veniam esse cupidatat eu eiusmod.",
  // "author": "10",
  // "category": "7",
  // "publisher": "5",
  // "status": "borrowed",
  // "publishedDate": "1982-05-07"

  return (
    <>
      <p>
        <button className="button button-outlined" onClick={toggleForm}>
          Add new book
        </button>
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={`${open ? '' : 'hidden'}`}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" {...register('title', { required: true })} />
          {errors.title && <span>Title is required</span>}
        </div>
        <div>
          <label htmlFor="picture">Picture:</label>
          <input type="text" id="picture" {...register('picture', { required: true })} />
          {errors.picture && <span>Picture is required</span>}
        </div>
        <div>
          <label htmlFor="isbn">ISBN:</label>
          <input type="text" id="isbn" {...register('isbn', { required: true })} />
          {errors.isbn && <span>ISBN is required</span>}
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" {...register('description')} />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select id="status" defaultValue={'available'} {...register('status')}>
            <option value="available">Available</option>
            <option value="borrowed">Borrowed</option>
          </select>
        </div>
        <div>
          <label htmlFor="publishedDate">Published date:</label>
          {/* <Controller
            name="publishedDate"
            control={control}
            render={({ onChange, value }) => (
              <>
                <input
                  type="text"
                  name="year"
                  value={value}
                  onClick={() => setShowCalendar(true)}
                  readOnly
                />
                {showCalendar && (
                  <Calendar
                    value={value ? new Date(value) : new Date()}
                    onChange={(date) => {
                      onChange(date.getFullYear())
                      onCalendarClose()
                    }}
                    maxDate={new Date()}
                    onClose={onCalendarClose}
                  />
                )}
              </>
            )}
          /> */}
        </div>
        <button type="submit">Add Book</button>
      </form>
    </>
  )
}
