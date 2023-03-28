export interface iAuthor {
  id: string
  picture: string
  name: string
  description: string
}

export interface AuthorsState {
  authors: iAuthor[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}
