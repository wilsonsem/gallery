import React from 'react'
// import logo from '../asset/logo512.png'

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',')

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
    <img src= {image.webformatURL} className="w-full h-80" alt="not loading" />
    <div className="font-bold text-purple-500 text-xl mb-2 px-2">Photo by { image.user}</div>
    <ul className="px-2">
      <li>
        <strong>Views: </strong>
        {image.views}
      </li>
      <li>
        <strong>Likes: </strong>
        {image.downloads}
      </li>
      <li>
        <strong>Downloads: </strong>
        {image.likes}
      </li>
    </ul>
    <div className="px-6 py-4">
     {tags.map((tag, index) => (
       <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag}</span>
     ))
     }
    </div>
  </div>
  )
}

export default ImageCard
