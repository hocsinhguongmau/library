type BookStatus = 'available' | 'borrowed'

export interface iBook {
  id: number
  isbn: string
  title: string
  picture: string
  description: string
  publisherId: number
  authorsId: number
  categoriesId: number
  status: BookStatus
  borrowerId?: number
  publishedDate: string
  borrowDate: string | null
  returnDate: string | null
}
