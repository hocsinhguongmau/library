type BookStatus = 'available' | 'borrowed'

export interface iBook {
  id: number
  isbn: string
  title: string
  picture: string
  description: string
  publisher: string
  authors: string[]
  categories: string[]
  status: BookStatus
  borrowerId?: number
  publishedDate: string
  borrowDate: string | null
  returnDate: string | null
}

export interface BooksState {
  books: iBook[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

export interface SortOption {
  field: keyof iBook
  order: 'asc' | 'desc'
}
export interface SearchOption {
  searchTerm: string
  keysToSearch: (keyof iBook)[]
}
