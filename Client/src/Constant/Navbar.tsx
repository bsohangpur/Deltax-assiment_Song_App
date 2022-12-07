import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav className="bg-gray-800 text-slate-50 w-screen">
                <div className="relative md:static py-6 md:py-8 md:mx-16 flex flex-wrap justify-between items-center">
                <a href='/'> <h1 className="xl:text-3xl text-gray-300 hover:text-gray-100 hover:underline lg:text-2xl md:text-xl px-4">Burhanuddin<span>.</span></h1></a>
                    <div className="menu-active bg-gray-800 menu-inactive flex gap-6 items-center">
                        <ul className="navbar-nav flex md:flex-row flex-col gap-4 mb-2 items-center md:mb-0">
                            <li className="grid place-items-center hover:bg-transparent capitalize hover:text-blue-200 hover:border-2 hover:border-neutral-100 w-36 h-10 bg-gray-600 text-white active:bg-gray-600 rounded-sm">
                                <Link to='/addsong' className="" >
                                    <span className=''>Add Song</span>
                                </Link>
                            </li>
                            <li className="grid place-items-center hover:bg-transparent capitalize hover:text-blue-200 hover:border-2 hover:border-neutral-100 w-36 h-10 bg-gray-600 text-white active:bg-gray-600 rounded-sm">
                                <Link to="/addartist" className="" >
                                    <span className=''>Add Artist</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
