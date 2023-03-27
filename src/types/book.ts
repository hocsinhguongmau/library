type BookStatus = 'available' | 'borrowed'

export interface iBook {
  id: string
  isbn: string
  title: string
  picture: string
  description: string
  publisher: number
  author: number
  category: number
  status: BookStatus
  publishedDate: string
}

export interface BooksState {
  books: iBook[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}
