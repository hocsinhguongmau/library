import { iAuthor } from '@/types'
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

export interface iBookWithAuthor extends iBook {
  authorName: string | undefined
  authorInfo: iAuthor | undefined
}

export interface BooksState {
  books: iBook[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

export type SortBookOption =
  | 'title_asc'
  | 'title_desc'
  | 'author_asc'
  | 'author_desc'
  | 'date_asc'
  | 'date_desc'

export interface BookSortingOption {
  label: string
  value: string
}
