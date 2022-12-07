import Navbar from '../Constant/Navbar'
import SongDetail from '../Components/SongDetail'
import Footer from '../Constant/Footer'
import { useAppSelector } from '../Redux/hooks'
import Loading from '../Constant/Loading'
import { AiOutlineSearch } from 'react-icons/ai'
import '../App.css'
import { useState } from 'react'
import axios from 'axios'

const url = "http://localhost:3000/song/search"

const Home = () => {
  const { status } = useAppSelector(state => state.song)
  const [search, setSearch] = useState("")
  const [searchData, setSearchData] = useState("")


  const getSearch = (e: any) => {
    setSearch(e.target.value)
  }

  const sendData = async () => {
    const resData = await axios.post(url, {query:search})
    setSearchData(resData.data.data)
  }

  if (status === "loading") {
    return (
      <div className="w-screen">
        <Loading />
      </div>
    )
  }
  else if (status === "idle") {
    return (
      <div className="w-full h-full grid place-content-center">
        <Navbar />
        <h1 className=" text-center text-xl my-6 text-gray-800">Latest Top 10 Songs</h1>
        <div className="mb-4">
          <form className="search-container relative">
            <input onChange={getSearch} value={search} type="text" className='h-10 placeholder:capitalize' id="search-bar" placeholder="fing your song here..." />
            <button onClick={(e) => {
              e.preventDefault()
              sendData()
            }}
              className='search_icons w-10 grid place-items-center h-10 absolute top-0 right-0 bg-slate-200'><AiOutlineSearch className=' text-lg' /></button>
          </form>
        </div>
        <SongDetail Search={searchData}/>
        <div className="">
          <Footer />
        </div>
      </div>
    )
  }
  else if (status === "error") {
    return (
      <div className="w-full h-screen">
        <h1>Some Thing Went Wrong...</h1>
      </div>
    )
  }
}

export default Home