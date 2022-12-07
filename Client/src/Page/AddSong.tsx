import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Songs from "../Components/Songs";
import Footer from "../Constant/Footer";
import Navbar from "../Constant/Navbar";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { SongUpdate } from "../Redux/Reducers/songSlice";

type FormValues = {
    song_title: string;
    artist_name: string;
    date_of_release: string;
    image: any;
};

const AddSong = () => {
    const navigator = useNavigate()
    const dispatch = useAppDispatch()
    const [send, setSend] = useState(false)

    const { status } = useAppSelector(state => state.song)

    //?useForm to handle form data
    const { register, handleSubmit } = useForm<FormValues>();

    //?submit function.
    const onSubmit: SubmitHandler<FormValues> = data => {
        const { song_title, artist_name, date_of_release, image } = data;

        //?store data in formData.
        const formData = new FormData();
        formData.append('title', song_title)
        formData.append('artist', artist_name)
        formData.append('date_of_release', date_of_release)
        formData.append('image', image[0])

        //*send data from form to reducer with help od dispatch method.
        dispatch(SongUpdate(formData, "Add", ""));

        //!disable the send button so no more then one request are send to Api.
        setSend(!send)

        if (status === "idle") {
            setTimeout(() => {
                navigator(0)
                setSend(!send)
            }, 1000)
        }
    };
    const { artistData } = useAppSelector(state => state.artist)

    return (
        <div className="w-full  h-full grid place-content-center">
            <Navbar />
            <h1 className=" text-center text-xl my-6 text-gray-800">Add your song here</h1>


            <div className="w-full mb-8 flex justify-center">
                <form className=" border-2 p-6 shadow-md" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid w-full place-content-center">
                        <div className="w-full">
                            <label htmlFor="song_title" className="block uppercase text-gray-600 font-bold text-sm mb-2">Song Title<span className="ml-1 text-red-500">*</span></label>
                            <input type="text" className="w-96 h-10 pl-2 placeholder:capitalize rounded-sm outline-none border-2 border-neutral-400 focus:border-neutral-800" {...register("song_title")} />
                        </div>
                        <div className="flex w-full items-end gap-6">
                            <div className="w-1/2">
                                <label htmlFor="artist_name" className="block uppercase text-gray-600 font-bold text-sm my-2">Artist<span className="ml-1 text-red-500">*</span></label>
                                <select className="w-full h-10 pl-2 capitalize rounded-sm outline-none border-2 border-neutral-400 focus:border-neutral-800" {...register("artist_name")}>
                                    <option value="">select one option </option>
                                    {
                                        artistData.map((data, index: number) => {
                                            const { name }: any = data;
                                            return (
                                                <option key={index} value={name}>{name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="w-1/2">
                                <div className="grid place-items-center hover:bg-transparent capitalize hover:text-blue-900 hover:border-2 hover:border-neutral-900 w-36 h-10 bg-gray-600 text-white active:bg-gray-600 rounded-sm">
                                    <Link to="/addartist" className="" >
                                        <span className=''>Add Artist</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-ful">
                            <label htmlFor="date_of_release" className="block uppercase text-gray-600 font-bold text-sm my-2">Date Of Release<span className="ml-1 text-red-500">*</span></label>
                            <input type="date" className="w-96 text-center h-10 pl-2 placeholder:capitalize rounded-sm outline-none border-2 border-neutral-400 focus:border-neutral-800" {...register("date_of_release")} />
                        </div>
                        <div className="w-full">
                            <label htmlFor="image" className="block uppercase text-gray-600 font-bold text-sm my-2">Song Image<span className="ml-1 text-red-500">*</span></label>
                            <input type="file" className="w-full h-10 pl-2 placeholder:capitalize rounded-sm outline-none" {...register("image")} />
                        </div>

                        <div className="w-full flex justify-center">
                            <button className=" cursor-pointer hover:bg-transparent capitalize my-6 w-48 hover:text-gray-900 hover:border-2 hover:border-neutral-900 h-10 bg-gray-600 text-white active:bg-gray-600 rounded-sm" type="submit" disabled={send}>Submit Song</button>
                        </div>
                    </div>
                </form>
            </div>
            <Songs />
            <Footer />
        </div>
    );
}

export default AddSong