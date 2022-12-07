import { useEffect } from 'react';
import AddSong from './Page/AddSong';
import { useAppDispatch } from './Redux/hooks';
import { FetchApi } from './Redux/Reducers/songSlice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import AddArtist from './Page/AddArtist';
import { FetchArtistApi } from './Redux/Reducers/artistSlice';
import Rating from './Constant/Rating';
import EditArtist from './Components/EditArtist';
import EditSong from './Components/EditSong';

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(FetchApi())
    dispatch(FetchArtistApi())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addsong' element={<AddSong />} />
        <Route path='/addartist' element={<AddArtist />} />
        <Route path='/rating' element={<Rating />} />
        <Route path='/artistedit' element={<EditArtist />} />
        <Route path='/songedit' element={<EditSong />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
