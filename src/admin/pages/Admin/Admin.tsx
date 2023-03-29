export default function Admin() {
  // const bookChange: Omit<IBook, 'id'> = {
  //   picture: 'https://picsum.photos/id/3/200/300.webp',
  //   isbn: '9789-0-6-0',
  //   title: 'nulla fugiat sint',
  //   description:
  //     'Irure excepteur aliqua minim et minim. Anim deserunt nisi eu sunt commodo aliquip ut velit.',
  //   author: '2',
  //   category: '1',
  //   publisher: '10',
  //   status: 'borrowed',
  //   publishedDate: '1971-02-08'
  // }

  // const handleRemoveBook = (id: string) => {
  //   dispatch(removeBook(id))
  // }

  // const handleUpdateBook = (id: string, newData: Omit<IBook, 'id'>) => {
  //   dispatch(updateBook({ id, newData }))
  // }

  // const newBook: IBook = {
  //   id: uuidv4(),
  //   picture: 'https://picsum.photos/id/19/200/300.webp',
  //   isbn: '9780-9-0-9',
  //   title: 'exercitation incididunt commodo',
  //   description:
  //     'In esse adipisicing ad voluptate magna. Non mollit ut exercitation tempor ea irure dolore duis mollit.',
  //   publisher: '6',
  //   author: '12',
  //   category: '4',
  //   status: 'available',
  //   publishedDate: '1980-10-25'
  // }

  // const handleSearch = useCallback(
  //   (searchTerm: string) => {
  //     dispatch(
  //       searchBooks({
  //         searchTerm: searchTerm,
  //         keysToSearch: ['title']
  //       })
  //     )
  //   },
  //   [dispatch]
  // )
  // const handleAddBook = (book: IBook) => {
  //   dispatch(addNewBook(book))
  // }
  // const handleSort = useCallback(
  //   (field: keyof IBook, order: 'asc' | 'desc') => {
  //     dispatch(sortBooks({ field, order }))
  //   },
  //   [dispatch]
  // )

  return <div>Admin</div>
}
