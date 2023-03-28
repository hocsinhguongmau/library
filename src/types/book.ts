type BookStatus = 'available' | 'borrowed'

export interface iBook {
  id: string
  isbn: string
  title: string
  picture: string
  description: string
  publisher: string
  author: string
  category: string
  status: BookStatus
  publishedDate: string
}

export interface BooksState {
  books: iBook[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}
