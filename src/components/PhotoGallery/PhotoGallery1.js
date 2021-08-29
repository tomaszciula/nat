import React, { useState, useEffect } from 'react'
import Gallery from 'react-photo-gallery'
import { photos } from './Gallery1photos'

const PhotoGallery1 = () => {
return (
  <Gallery photos={photos} />
)
}


/*
const Fetch = url => new Promise(resolve => {
  setTimeout(() => resolve([
    'https://images89.fotosik.pl/533/84e713a2c5ea7589.jpg',
    'https://images92.fotosik.pl/534/2330bbb7ae3fc6a0.jpg',
    'https://images89.fotosik.pl/533/7a299dde7a1ebdc7.jpg',
    'https://images90.fotosik.pl/532/50b2126e7e0d4344.jpg'
  ]), 1000)
})

const onClick = event => {
  alert(event.target.src)
}

const PhotoGallery1 = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    Fetch(`/photos`)
      .then(urls => urls.map(url => ({src: url, width: 1, height: 1})))
      .then(setPhotos)
  }, [])
  
  return (
    <Gallery
      photos={photos}
      onClick={onClick}
    />
  )
}
*/

export default PhotoGallery1