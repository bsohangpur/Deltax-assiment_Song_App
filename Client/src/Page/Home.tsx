import Navbar from '../Constant/Navbar'
import SongDetail from '../Components/SongDetail'
import Footer from '../Constant/Footer'
import { useAppSelector } from '../Redux/hooks'
import Loading from '../Constant/Loading'

const Home = () => {
  const {status} = useAppSelector(state=>state.song)
  console.log("🚀 ~ file: Home.tsx:9 ~ Home ~ status", status)

  if(status==="loading"){
    return(
      <div className="w-screen">
        <Loading/>
      </div>
    )
  }
  else if(status==="idle"){
  return (
    <div className="w-full h-full grid place-content-center">
        <Navbar />
        <h1 className=" text-center text-xl my-6 text-gray-800">Top 10 Songs</h1>
        <SongDetail />
        <div className="">
          <Footer />
        </div>
    </div>
  )
}
else if(status==="error"){
  return(
      <div className="w-full h-screen">
        <h1>Some Thing Went Wrong...</h1>
      </div>
    )
}
}

export default Home