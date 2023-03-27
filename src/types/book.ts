type BookStatus = 'available' | 'borrowed'

export interface iBook {
  id: number
  isbn: string
  title: string
  picture: string
  description: string
  publisher: number
  authors: number
  categories: number
  status: BookStatus
  publishedDate: string
}

export interface BooksState {
  books: iBook[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}
