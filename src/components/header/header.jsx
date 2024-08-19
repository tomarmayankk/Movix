import React from "react"
import { Link } from "react-router-dom"
function Header() {
    return (
        <div className="mx-10 my-0 py-2 flex items-center justify-between ">
            <div className="flex items-center">
                <Link to="/">
                    <img className="w-20 cursor-pointer rounded-md" src="./logo.png" alt="" />
                </Link>
                <Link to="/movies/allmovies" className="no-underline mx-8 text-white text-lg hover:text-red-500">
                    <span>All Movies</span>
                </Link>
                <Link to="/movies/about" className="no-underline mx-8 text-white text-lg hover:text-red-500">
                    <span>About</span>
                </Link>
            </div>
        </div>
    )
}

export default Header
