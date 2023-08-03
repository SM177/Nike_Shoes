import React from 'react'

const Navigation = () => {
    return (
        <div>
            <nav className='container'>
                <div className="logo">
                    <img src="https://clipart-library.com/image_gallery2/Nike-Logo-Transparent.png" alt="logo" />
                </div>

                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>

                <button>Login</button>
            </nav>
        </div>
    )
}

export default Navigation