import React from 'react'

const HeroSection = () => {
    return (
        <main className='hero container'>
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST!</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum reiciendis temporibus vitae laborum! Labore laudantium illo nesciunt amet, fuga qui voluptate, impedit quam obcaecati adipisci soluta nostrum! Eaque, omnis iste.
                </p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className='secondary-btn'>Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>

                    <div className="icons">
                        <img src="data:image/png;base64,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" alt="" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/MasterCard_early_1990s_logo.svg/200px-MasterCard_early_1990s_logo.svg.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="https://github.com/anshuopinion/React-10-Projects/blob/project-1/project-1/public/images/hero-image.png?raw=true" alt="" />
            </div>

        </main>
    )
}

export default HeroSection