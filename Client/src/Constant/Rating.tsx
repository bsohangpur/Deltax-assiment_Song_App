import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { RatingUpdate } from "../Redux/Reducers/ratingSlice";
import './rating.css'


const Rating = ({ Id }: any) => {
    const navigator = useNavigate()
    const [rating, setRating] = useState();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useAppDispatch()
    const { status } = useAppSelector(state => state.rating)

    const getRating = (e: any) => {
        setRating(e.target.value)
    }

    const getName = (e: any) => {
        setName(e.target.value)
    }

    const getEmail = (e: any) => {
        setEmail(e.target.value)
    }

    const sendData = async () => {
        const Data: any = { rating, name, email }
        dispatch(RatingUpdate(Data, Id));

    }
    if (status === 'idle') {
        navigator(0)
    }

    return (
        <div>
            <form className="rating w-full h-screen flex justify-center items-center">
                <div className=" bg-slate-100 p-4 shadow-md rounded-sm">
                    <div className="rate flex flex-row-reverse my-2">
                        <div className="rate">
                            <input type="radio" onChange={getRating} id="star5" name="rate" value="5" checked={Number(rating) === 5 ? true : false} />
                            <label htmlFor="star5" title="text">5 stars</label>
                            <input type="radio" onChange={getRating} id="star4" name="rate" value="4" checked={Number(rating) === 4 ? true : false} />
                            <label htmlFor="star4" title="text">4 stars</label>
                            <input type="radio" onChange={getRating} id="star3" name="rate" value="3" checked={Number(rating) === 3 ? true : false} />
                            <label htmlFor="star3" title="text">3 stars</label>
                            <input type="radio" onChange={getRating} id="star2" name="rate" value="2" checked={Number(rating) === 2 ? true : false} />
                            <label htmlFor="star2" title="text">2 stars</label>
                            <input type="radio" onChange={getRating} id="star1" name="rate" value="1" checked={Number(rating) === 1 ? true : false} />
                            <label htmlFor="star1" title="text">1 star</label>
                        </div>
                    </div>
                    <div className="w-full mt-20 mb-2">
                        <div className="my-2">
                            <label htmlFor="artist_name" className="block uppercase text-gray-600 font-bold text-sm mb-2">Name<span className="ml-1 text-red-500">*</span></label>
                            <input type="text" onChange={getName} value={name} className="w-96 h-10 pl-2 placeholder:capitalize rounded-sm outline-none border-2 border-neutral-400 focus:border-neutral-800" />
                        </div>
                        <div className="my-2">
                            <label htmlFor="artist_name" className="block uppercase text-gray-600 font-bold text-sm mb-2">Email<span className="ml-1 text-red-500">*</span></label>
                            <input type="text" onChange={getEmail} value={email} className="w-96 h-10 pl-2 placeholder:capitalize rounded-sm outline-none border-2 border-neutral-400 focus:border-neutral-800" />
                        </div>
                    </div>
                    <button
                        className='my-2 cursor-pointer hover:bg-transparent capitalize w-48 hover:text-gray-900 hover:border-2 hover:border-neutral-900 h-10 bg-gray-600 text-white active:bg-gray-600 rounded-sm'
                        onClick={(e) => {
                            e.preventDefault()
                            sendData()
                        }}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Rating