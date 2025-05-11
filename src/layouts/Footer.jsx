import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-600 text-sm py-4 mt-10 border-t">
            <div className="container mx-auto px-4 text-center">
                © {new Date().getFullYear()} - <Link to="/">JiraProxy</Link>
            </div>
        </footer>
    )
}

export default Footer