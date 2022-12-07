import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Artists from '../Components/Artists';
import Footer from '../Constant/Footer';
import Navbar from '../Constant/Navbar';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { ArtistUpdate } from '../Redux/Reducers/artistSlice';

type FormValues = {
    name: string;
    date_of_birth: any;
    bio: string;
    _id: string
};

const AddArtist = () => {
    const navigator = useNavigate()
    const dispatch = useAppDispatch()
    const [send, setSend] = useState(false)

    const { status } = useAppSelector(state => state.artist)

    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => {
        dispatch(ArtistUpdate(data, "Add", ""));
        setSend(!send)
        if (status === "idle") {
            setTimeout(() => {
                navigator(0)
                setSend(!send)
            }, 1000)
        }
    };

    return (
        <div className="w-full  h-full grid place-content-center">
            <Navbar />
            <h1 className=" text-center text-xl my-6 text-gray-800">Add your song here</h1>


            <div className="w-full mb-8 flex justify-center">
                <form className=" border-2 p-6 shadow-md" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid w-full place-content-center">
                        <div className="w-full">
                            <label htmlFor="artist_name" className="block uppercase text-gray-600 font-bold text-sm mb-2">Artist Name<span className="ml-1 text-red-500">*</span></label>
                            <input type="text" className="w-96 h-10 pl-2 placeholder:capitalize rounded-sm outline-none border-2 border-neutral-400 focus:border-neutral-800" {...register("name")} />
                        </div>
                        <div className="w-ful">
                            <label htmlFor="date_of_birth" className="block uppercase text-gray-600 font-bold text-sm my-2">Date Of Birth<span className="ml-1 text-red-500">*</span></label>
                            <input type="date" className="w-96 text-center h-10 pl-2 placeholder:capitalize rounded-sm outline-none border-2 border-neutral-400 focus:border-neutral-800" {...register("date_of_birth")} />
                        </div>
                        <div className="w-full">
                            <label htmlFor="artist_detail" className="block uppercase text-gray-600 font-bold text-sm my-2">Artist Bio<span className="ml-1 text-red-500">*</span></label>
                            <textarea cols={20} rows={10} className="w-96 resize-none pl-2 placeholder:capitalize rounded-sm outline-none border-2 border-neutral-400 focus:border-neutral-800" {...register("bio")} ></textarea>
                        </div>

                        <div className="w-full flex justify-center">
                            <button className=" cursor-pointer hover:bg-transparent capitalize my-6 w-48 hover:text-gray-900 hover:border-2 hover:border-neutral-900 h-10 bg-gray-600 text-white active:bg-gray-600 rounded-sm" type="submit" disabled={send} >Submit Data</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="grid place-items-center">
                <Artists />
            </div>
            <Footer />
        </div>
    )
}

export default AddArtist