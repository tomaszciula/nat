import React, { useState, useEffect } from 'react'
import Gallery from 'react-photo-gallery'
import { photos } from './Gallery2photos'

const PhotoGallery2 = () => {
return (
  <Gallery photos={photos} />
)
}
/*
const Fetch = url => new Promise(resolve => {
  setTimeout(() => resolve([
    'https://images92.fotosik.pl/534/7fb943f759703a01med.jpg',
    'https://images92.fotosik.pl/534/a955f49910d096admed.jpg',
    'https://images92.fotosik.pl/534/8ddd9f9eb1fc081e.jpg',
    'https://images91.fotosik.pl/532/f2db0306214748c9.jpg',
    'https://images92.fotosik.pl/534/4fe83ea8e7271cac.jpg',
    'https://images89.fotosik.pl/533/084a969b5adcd2ce.jpg',
    'https://images89.fotosik.pl/533/2f410f68c955e667.jpg',
    'https://images90.fotosik.pl/532/10421dfc31d9542e.jpg',
    'https://images89.fotosik.pl/533/41ccdb15029c9a22.jpg',
    'https://images92.fotosik.pl/534/d8d848738b6f1c09.jpg',
    'https://images89.fotosik.pl/533/ae163cbc06bd4143.jpg',
    'https://images92.fotosik.pl/534/ae97869b65c1058a.jpg',
    'https://images89.fotosik.pl/533/ef25393ad7f7742b.jpg',
    'https://images90.fotosik.pl/532/ac5e4f84df5c4f51.jpg',
    'https://images89.fotosik.pl/533/b6ad848259150e3b.jpg',
    'https://images91.fotosik.pl/532/8e4c707dfb904827.jpg',
    'https://images89.fotosik.pl/533/3991467f0ddd7203.jpg',
    'https://images90.fotosik.pl/532/bfcb3486a84cd3b2.jpg',
    'https://images92.fotosik.pl/534/817dfa6c8e8bafbc.jpg',
    'https://images91.fotosik.pl/532/01532ee450366688.jpg',
    'https://images92.fotosik.pl/534/4e539615877ffb47.jpg',
    'https://images89.fotosik.pl/533/ddf6beddd35104e8.jpg',
    'https://images89.fotosik.pl/533/27b3db2eec725296.jpg',
    'https://images90.fotosik.pl/532/ab9af55d3b119e59.jpg',
    'https://images91.fotosik.pl/532/b8f0e9b6cdf6edf1.jpg',
    'https://images91.fotosik.pl/532/67dcd624e134b7dc.jpg',
    'https://images92.fotosik.pl/534/8ef9ece6dc64561b.jpg',
    'https://images90.fotosik.pl/532/1230a4c32fa2947a.jpg',
    'https://images92.fotosik.pl/534/18bafc9becf67463.jpg',
    'https://images91.fotosik.pl/532/97eb45a2cea3a90a.jpg',
    'https://images89.fotosik.pl/533/b9763c93d8c60d84.jpg',
    'https://images90.fotosik.pl/532/dc8cc38a0ff2d3ef.jpg',
    'https://images90.fotosik.pl/532/f43a2e7a9138464c.jpg',
    'https://images89.fotosik.pl/533/0b34b4e5c6f3e863.jpg'
  ]), 1000)
})

const onClick = event => {
  alert(event.target.src)
}

const PhotoGallery2 = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    Fetch(`/photos`)
      .then(urls => urls.map(url => ({src: url, width: 4, height: 3 })))
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
export default PhotoGallery2