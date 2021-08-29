import React, { useState, useEffect } from 'react'
import Gallery from 'react-photo-gallery'
import { photos } from './Gallery3photos'

const PhotoGallery3 = () => {
return (
  <Gallery photos={photos} />
)
}
/*
const Fetch = url => new Promise(resolve => {
  setTimeout(() => resolve([
    'https://images89.fotosik.pl/533/ed155c39b0d7dd7e.jpg',
    'https://images89.fotosik.pl/533/15269ae1cd758c4c.jpg',
    'https://images91.fotosik.pl/532/5c59ee360e5a42c5.jpg',
    'https://images91.fotosik.pl/532/d131fd2463217d88.jpg',
    'https://images92.fotosik.pl/534/b2e93f0d8d49bd77.jpg',
    'https://images92.fotosik.pl/534/9e9eec5cdf42fca7.jpg',
    'https://images89.fotosik.pl/533/38808d5a68929661.jpg',
    'https://images92.fotosik.pl/534/6566110eb5ecc0c7.jpg',
    'https://images89.fotosik.pl/533/82b34a5fa63071ef.jpg',
    'https://images89.fotosik.pl/533/0c7b034f0756a157.jpg',
    'https://images91.fotosik.pl/532/5b44c9c61a46c735.jpg'
  ]), 1000)
})

const onClick = event => {
  alert(event.target.src)
}

const PhotoGallery3 = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    Fetch(`/photos`)
      .then(urls => urls.map(url => ({src: url, width: 100, height: 100})))
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
export default PhotoGallery3