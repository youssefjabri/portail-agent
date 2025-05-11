import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-blue-700 hover:text-blue-500">
                Portail Agent
            </Link>
            <ul className="flex gap-6">
                <li>
                    <Link to="/tickets" className="text-gray-700 hover:text-blue-600">
                        Tickets
                    </Link>
                </li>
            </ul>
        </nav>)
}

export default Navbar