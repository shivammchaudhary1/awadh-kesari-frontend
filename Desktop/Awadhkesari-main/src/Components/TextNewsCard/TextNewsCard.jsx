import React from 'react'
import { Link } from 'react-router-dom'

const TextNewsCard = ({children, image, content = '', date = '', heading, author = '', className = '', imageHeight, imageWidth, slug, dateClasses}) => {
  return (
    <div className={`relative ${className}`}>
      <div className={`bg-url(${image})}`} style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center',height:imageHeight, width:imageWidth}}></div>
      {/* <img src={image} alt="NewsImage" height={imageHeight} width={imageWidth} /> */}
      <div>
        <h3 className='font-bold text-base'><Link to={slug}>{heading}</Link></h3>
        <div className='flex gap-3 items-center text-sm'>
          {
            author && <p className='font-semibold'>{author} &nbsp; |</p>
          }
          <p className={`font-thin ${dateClasses}`}>{date}</p>
        </div>
        {
          content && <p>{content}</p>
        }
      </div>
      {children} {/* News Catagory */}
    </div>
  )
}

export default TextNewsCard
