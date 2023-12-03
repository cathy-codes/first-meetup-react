import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import TrackListing from './components/tracklisting/tracklisting'
import { useEffect } from 'react';

function App() {
  const [playedTracks, setPlayedTracks] = useState(null)
  //const [album, setAlbum] = useState(null)

  useEffect(() => {
    async function getPlayedTracksData() {
      const response = await fetch('https://nkd.su/api/week/2023-12-02/')
      const data = await response.json()
      setPlayedTracks(data);
    }

    getPlayedTracksData();
  }, [])

  
  // useEffect(() => {
  //   async function getAlbumData() {
  //     const response = await fetch('https://vgmdb.info/search/vagran')
  //     const data = await response.json()
  //     setAlbum(data);
  //   }

  //   getAlbumData();
  // }, [])

  return (
    <>
      <Header />
      <TrackListing listing={playedTracks} />
    </>
  )
}

export default App
