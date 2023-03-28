import { Link } from 'react-router-dom'

import { iBookWithAuthor } from '@/types'

export default function BookListItem({ id, picture, title, authorInfo }: iBookWithAuthor) {
  // const bookChange: Omit<iBook, 'id'> = {
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

  // const handleUpdateBook = (id: string, newData: Omit<iBook, 'id'>) => {
  //   dispatch(updateBook({ id, newData }))
  // }

  return (
    <div key={id}>
      <Link to={`/book/${id}`} className="block px-4">
        <img src={picture} alt={title} width={200} height={300} className="w-full" />
      </Link>
      <h4 className="mt-4 text-xl font-bold text-center capitalize">
        <Link to={`/book/${id}`}>{title}</Link>
      </h4>
      {authorInfo ? (
        <h4 className="italic text-center">
          <Link className="capitalize text-secondary" to={`/author/${authorInfo.id}`}>
            {authorInfo.name}
          </Link>
        </h4>
      ) : null}
    </div>
  )
}
