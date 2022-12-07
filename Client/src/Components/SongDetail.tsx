import { useState } from 'react';
import Rating from '../Constant/Rating';
import { useAppSelector } from '../Redux/hooks'
import { FaPlus } from 'react-icons/fa'
import AverageRating from '../Constant/AverageRating';

const SongDetail = () => {
    const { songData } = useAppSelector(state => state.song)
    const [button, setButton] = useState(false);
    const [id, setId] = useState();

    const AddRating = (Id: any) => {
        setId(Id);
        setButton(!button)
    }

    return (
        <div className="grid relative mb-12 gap-6 justify-center mx-auto px-12 py-6 bg-slate-100 rounded-md border-2">
            {
                songData.slice(0).reverse().map((data, index: number) => {
                    const { title, date_of_release, artist, image, imageAlt, rating, _id }: any = data;

                    return (
                        <div key={index} className={`${button && ' opacity-20'}`}>
                            <div className="flex items-center gap-6">
                                <div className="w-24">
                                    <img src={`http://localhost:3000/${image[0]}`} alt={imageAlt[0]} />
                                </div>
                                <div className="w-2/3">
                                    <h6 className=' capitalize font-bold'>{title}</h6>
                                    <h6>{date_of_release.slice(0, 10)}</h6>
                                    <p className='text-sm capitalize'>{artist}</p>
                                    <div className="">
                                        <AverageRating Star={rating} />
                                    </div>
                                </div>
                                <div className="flex w-1/3">
                                    <button onClick={() => { AddRating(_id) }} className="grid place-items-center w-60">
                                        <div className="">
                                            <div className="w-8 h-8 bg-slate-300 rounded-full grid place-content-center">
                                                <FaPlus className=' font-light' />
                                            </div>
                                        </div>
                                        <div className="">
                                            <h6>Add your Ratting Here</h6>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )

                })
            }
            {
                button
                &&
                <div className="-top-20 absolute left-1/4">
                    <Rating Id={id} />
                    <button onClick={() => { setButton(!button) }}><div className=" absolute top-1/3 w-6 h-6 shadow-md grid place-items-center cursor-pointer right-5"> X </div>
                    </button>
                </div>
            }

        </div>
    )
}

export default SongDetail
