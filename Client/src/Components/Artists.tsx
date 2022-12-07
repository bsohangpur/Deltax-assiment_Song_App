import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../Redux/hooks'
import { MdEdit, MdDeleteOutline } from 'react-icons/md'
import { ArtistUpdate, setEditArtistData } from '../Redux/Reducers/artistSlice'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'



const Artists = () => {
    const navigator = useNavigate()
    const { artistData, status } = useAppSelector(state => state.artist)
    const dispatch = useAppDispatch();

    const [send, setSend] = useState(false)

    const Delete = (id: string) => {
        let data: any
        dispatch(ArtistUpdate(data, "Delete", id))

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
        <div className='opacity-100' >
            <div className="text-xl my-4">
                <h2 className="text-bold text-center">All Artist</h2>
            </div>
            {
                artistData.map((value, index: number) => {
                    const { name, date_of_birth, bio, _id } = value
                    const date = new Date(date_of_birth);
                    const editField = [{ name, date_of_birth, bio, _id, type: true }]
                    return (
                        <div key={index} className="flex">
                            <div className="md:flex pl-4 py-2 shadow-md w-fit mb-5 justify-center items-center ">
                                <div className="">
                                    <h6 className="mb-3 text-lg font-semibold capitalize">{name}</h6>
                                    <p className="my-1 float-md-right">{date.toString().slice(0, 24)}</p>
                                    <p className="my-4 w-96">
                                        {bio}
                                    </p>
                                </div>
                                <div className="flex h-full justify-center items-center mt-2 gap-12 md:gap-2 px-6">
                                    <div className="">
                                        <Link to='/artistedit'><MdEdit onClick={() => { dispatch(setEditArtistData(editField)) }} className='w-8 h-8 text-gray-600 hover:text-black' /></Link>
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

export default Artists