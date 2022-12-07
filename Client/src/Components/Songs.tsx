import { useAppDispatch, useAppSelector } from '../Redux/hooks'
import { MdEdit, MdDeleteOutline } from 'react-icons/md'
import { setEditSongData } from '../Redux/Reducers/songSlice'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { SongUpdate } from '../Redux/Reducers/songSlice'
import { useState } from 'react'



const Songs = () => {
    const navigator = useNavigate()
    const { songData, status } = useAppSelector(state => state.song)
    const dispatch = useAppDispatch();

    const [send, setSend] = useState(false)



    const Delete = (id: string) => {
        let data: any = []
        dispatch(SongUpdate(data, "Delete", id))

         //!disable the delete button so no more then one request are send to Api.
         setSend(!send)

         if (status === "idle") {
             setTimeout(() => {
                 navigator(0)
                 setSend(!send)
             }, 1000)
         }
    }


    return (
        <div className='w-full grid justify-center' >
            <div className="text-xl my-4">
                <h2 className="text-bold text-center">All Songs</h2>
            </div>
            {
                songData.map((value, index: number) => {
                    const { title, date_of_release, artist, image, imageAlt, _id } = value
                    const date = new Date(date_of_release);
                    const editField = [{ title, date_of_release, artist, image, imageAlt, _id }]
                    return (
                        <div key={index} className="flex">
                            <div className="md:flex pl-4 py-2 shadow-md w-fit mb-5 justify-center items-center ">
                                <div className="mr-4">
                                    <img src={`http://localhost:3000/${image[0]}`} alt={imageAlt[0]} className="w-24" />
                                </div>
                                <div className="">
                                    <h6 className="mb-3 text-lg font-semibold capitalize">{title}</h6>
                                    <p className="my-1 float-md-right">{date.toString().slice(0, 24)}</p>
                                    <p className="my-4 w-96">{artist}</p>
                                </div>
                                <div className="flex h-full justify-center items-center mt-2 gap-12 md:gap-2 px-6">
                                    <div className="">
                                        <Link to='/songedit'><MdEdit onClick={() => { dispatch(setEditSongData(editField)) }} className='w-8 h-8 text-gray-600 hover:text-black' /></Link>
                                    </div>
                                    <div className="">
                                        <button disabled={send}><MdDeleteOutline onClick={() => { Delete(_id) }} className='w-8 h-8 text-gray-600 hover:text-black' /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Songs