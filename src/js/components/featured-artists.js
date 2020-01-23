import React from 'react'

const featuredArtists = () => {
  return (
    <section className="c-featured-artists">
      <div className="t-container">
        <div className="c-featured-artists__wrap">
          <h1 className="c-featured-artists__title">Featured Artists</h1>
          <ul className="c-featured-artists__list">
            <li className="c-featured-artists__list-item">
              <img className="c-featured-artists__list-item-pic" src="https://dummyimage.com/190x190/000/fff" alt="" />
              <p className="c-featured-artists__name">Lil Wayne</p>
              <p className="c-featured-artists__category">Hip-Hop/Rap</p>
            </li>
            <li className="c-featured-artists__list-item">
              <img className="c-featured-artists__list-item-pic" src="https://dummyimage.com/190x190/000/fff" alt="" />
              <p className="c-featured-artists__name">Lil Wayne</p>
              <p className="c-featured-artists__category">Hip-Hop/Rap</p>
            </li>
            <li className="c-featured-artists__list-item">
              <img className="c-featured-artists__list-item-pic" src="https://dummyimage.com/190x190/000/fff" alt="" />
              <p className="c-featured-artists__name">Lil Wayne</p>
              <p className="c-featured-artists__category">Hip-Hop/Rap</p>
            </li>
            <li className="c-featured-artists__list-item">
              <img className="c-featured-artists__list-item-pic" src="https://dummyimage.com/190x190/000/fff" alt="" />
              <p className="c-featured-artists__name">Lil Wayne</p>
              <p className="c-featured-artists__category">Hip-Hop/Rap</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default featuredArtists
