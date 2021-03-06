import React from 'react'
import Book from './Book'

export default function BookResults(props) {
  const bookList = props.results.map((book, i) => {
    const title = book.title
    const description = book.description
    const author = book.author === undefined ? '' : `Author: ${book.author.join(', ')}`
    const price = book.price === '' ? 'FREE' : `$${book.price}`
    const image = book.image

    return <Book key={i} title={title} description={description} author={author} price={price} image={image} />
  })

  return (
    <div>
      {bookList}
    </div>
  )
}