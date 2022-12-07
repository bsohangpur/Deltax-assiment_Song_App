import React from 'react';
import RingLoader from "react-spinners/RingLoader";

const Loading = () => {
    return (
        <div className='h-screen grid place-content-center'>
            <RingLoader
                color="#371364"
                loading
                size={105}
                speedMultiplier={1}
            />
        </div>
    )
}

export default Loading