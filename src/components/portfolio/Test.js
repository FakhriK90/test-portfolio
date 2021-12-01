import React from 'react'
import image1 from './Movie App.jpg'

const Test = () => {
    return (
        <div className="container">
        <div className="card-wrapper">
          <div className="card profile-two">
            <div className="card-image profile-img--two">
              <img src={image1} alt="profile two" />
            </div>
            <ul className="social-icons">
              <li>
                <a href>
                  <i className="fab fa-github" />
                </a>
              </li>
            </ul>
            <div className="details info">
              <h2>Jane Doe
                <br />
                <span className="desc-title">UI Designer</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Test
