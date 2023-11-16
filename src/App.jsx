import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import AlbumListing from './components/albumlisting/albumlisting'
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [albums, setAlbums] = useState(null)
  const topAlbums = [{
      name: "101"
    },
    {
      name: "202",
    },
    {
      name: "303",
    }
  ]
  const latestAlbums = [{
      name: "101a"
    },
    {
      name: "202b",
    },
    {
      name: "303c",
    }
  ]

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums')
      const data = await response.json()
      setAlbums(data);
    }

    getData();
  }, [])

  return (
    <>
      <Header />
      <AlbumListing heading="Top Albums" listing={albums} />
      <AlbumListing heading="Latest Albums" listing={albums} />
    </>
  )
}

export default App
