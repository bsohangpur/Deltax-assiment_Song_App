import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { ArtistUpdate } from '../Redux/Reducers/artistSlice';

type FormValues = {
    name: string;
    date_of_birth: any;
    bio: string;
    _id: string
};

const EditArtist = () => {
    const navigator = useNavigate()
    const dispatch = useAppDispatch()
    const {editData} = useAppSelector(state=>state.artist)
    const {name, date_of_birth, bio, _id} = editData[0];
    const preloadValue = {name, date_of_birth, bio};
    const { register, handleSubmit } = useForm<FormValues>({ defaultValues: preloadValue});
    const onSubmit: SubmitHandler<FormValues> = data => {
        dispatch(ArtistUpdate(data, "Edit", _id));
        navigator('/addartist')
        navigator(0)
    };

    return (
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
                        <button className=" cursor-pointer hover:bg-transparent capitalize my-6 w-48 hover:text-gray-900 hover:border-2 hover:border-neutral-900 h-10 bg-gray-600 text-white active:bg-gray-600 rounded-sm" type="submit" >Submit Data</button>
                    </div>
                    <div className="w-full flex justify-center">
                        <Link to='/addartist' className="grid place-items-center cursor-pointer hover:bg-transparent capitalize w-48 hover:text-gray-900 hover:border-2 hover:border-neutral-900 h-10 bg-gray-600 text-white active:bg-gray-600 rounded-sm">Go Back</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditArtist
