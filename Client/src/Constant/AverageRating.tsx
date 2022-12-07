import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'

const AvrageRating = ({ Star }: any) => {
    const array = [0, 1, 2, 3, 4];
    let Number = 0;
    let i = 0;
    Star.forEach((ele: any) => {
        Number = ele.rating + Number
        i++
    })

    const rating = Number !== undefined ? Number/Star.length : 0

    return (
        <div className='flex'>
            {
                array.map((value) => {
                    const half = value + 0.5;

                    return (
                        <span key={value} className=" text-amber-500">
                            {
                                rating >= value + 1
                                    ?
                                    <FaStar />
                                    :
                                    rating >= half
                                        ?
                                        <FaStarHalfAlt />
                                        :
                                        <AiOutlineStar />
                            }
                        </span>
                    )


                })
            }
        </div>
    )
}

export default AvrageRating
