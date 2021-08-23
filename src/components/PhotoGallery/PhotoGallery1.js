import React, { useState,useEffect } from 'react'
import Gallery from 'react-photo-gallery'


const Fetch = url => new Promise(resolve => {
  setTimeout(() => resolve([
    `https://picsum.photos/id/10/400`,
    `https://picsum.photos/id/20/400`,
    `https://picsum.photos/id/30/400`,
    `https://picsum.photos/id/40/400`,
    `https://picsum.photos/id/50/400`,
    `https://picsum.photos/id/60/400`,
    `https://picsum.photos/id/70/400`,
  ]), 2000)
})

const onClick = event => {
  alert(event.target.src)
}

const PhotoGallery1 = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    Fetch(`/photos`)
      .then(urls => urls.map(url => ({src: url, width: 150, height: 150})))
      .then(setPhotos)
  }, [])
  
  return (
    <Gallery
      photos={photos}
      onClick={onClick}
    />
  )
}

export default PhotoGallery1