import React from 'react'
import { AiFillCamera } from 'react-icons/ai'
import { IoReorderThreeSharp } from 'react-icons/io5'

const App = () => {
  return (
    <div className="main-container">
      {/* top-section */}
      <div className="top-section">
        <div className="icon-album">
          <AiFillCamera /> <p>Album</p>
        </div>
        <div className="humber">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Hero section */}
      <div className="hero-section">
        <div className="hero-container">
          <div className="">
            <h5>Album example</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, fuga
            vel nemo rem deleniti qui atque a fugit odio mollitia natus
            inventore recusandae aliquid tempore ab earum ullam at voluptas?
          </p>
          <div className="main-secondary-button">
            <button>Main call to action</button>
            <button>Secondary action</button>
          </div>
        </div>
      </div>
      {/* multi columns section */}
      <div className="columns-container">
        <div className="columns-section">
          <div>
            <div className="Thumbnail">
              <h5>Thumbnail</h5>
            </div>
            <div className="Thumbnail-bottom">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                veniam perferendis voluptates tempora ad sint dolore, laboriosam
              </p>
              <div className="view-edit-section">
                <div className="view-edit-buttons">
                  <button>View</button>
                  <button>Edit</button>
                </div>
                <div>9 mins</div>
              </div>
            </div>
          </div>
          <div>
            <div className="Thumbnail">
              <h5>Thumbnail</h5>
            </div>
            <div className="Thumbnail-bottom">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                veniam perferendis voluptates tempora ad sint dolore, laboriosam
              </p>
              <div className="view-edit-section">
                <div className="view-edit-buttons">
                  <button>View</button>
                  <button>Edit</button>
                </div>
                <div>9 mins</div>
              </div>
            </div>
          </div>
          <div>
            <div className="Thumbnail">
              <h5>Thumbnail</h5>
            </div>
            <div className="Thumbnail-bottom">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                veniam perferendis voluptates tempora ad sint dolore, laboriosam
              </p>
              <div className="view-edit-section">
                <div className="view-edit-buttons">
                  <button>View</button>
                  <button>Edit</button>
                </div>
                <div>9 mins</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
