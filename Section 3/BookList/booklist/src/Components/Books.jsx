import React from 'react'
import Image from './Image'
import Title from './Title'
import Author from './Author'

const Books = () => {
  return (
    <article className='book'>
        <Image/>
        <Title />
        <Author />
    </article>
  )
}

export default Books