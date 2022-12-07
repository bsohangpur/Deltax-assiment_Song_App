import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className=" relative">
            <footer className="bg-gray-800 text-slate-50 h-36 w-screen">
                <div className="h-full w-full grid place-content-center">
                    <Link to='/'> <h1 className="xl:text-3xl text-gray-300 hover:text-gray-100 hover:underline lg:text-2xl md:text-xl px-4">Burhanuddin<span>.</span></h1></Link>
                </div>
            </footer>
        </div>
    )
}

export default Footer