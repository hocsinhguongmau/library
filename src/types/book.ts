export interface iBook {
  ISBN: string
  title: string
  description: string
  publisher: string
  authors: string
  status: 'available' | 'borrowed'
  borrowerId: string
  publishedDate: string
  borrowDate: string
  returnDate: string
}
