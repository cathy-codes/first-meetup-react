import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import AlbumListing from './components/albumlisting/albumlisting'

function App() {
  const [count, setCount] = useState(0)
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

  return (
    <>
      <Header />
      <AlbumListing heading="Top Albums" listing={topAlbums} />
      <AlbumListing heading="Latest Albums" listing={latestAlbums} />
    </>
  )
}

export default App
