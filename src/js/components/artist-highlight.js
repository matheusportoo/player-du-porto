import React from 'react'

const artistHighlight = () => {
  return (
    <section className="c-artist-highlight">
      <div className="t-container">
        <div className="c-artist-highlight__cover">
          <div className="c-artist-highlight__cover-wrap">
            <img className="c-artist-highlight__cover-pic t-hidden-lg" src="https://dummyimage.com/375x190/000/fff" alt="" />
            <img className="c-artist-highlight__cover-pic t-hidden-mb" src="https://dummyimage.com/1920x485/000/fff" alt="" />
          </div>
        </div>
        <div className="c-artist-highlight__about">
          <h1 className="c-artist-highlight__name">Foo Fighters</h1>
          <p className="c-artist-highlight__description">A game-changing artist and celebrity, Lil Wayne began his carrer as a near-novelty -- a pretten delivering hardcore hip-hop -- ...</p>
          <a href="#" className="o-button c-artist-highlight__bt-listen-on-apple-music t-hidden-lg">Listen on Apple music</a>
        </div>
        <dl className="c-artist-highlight__info">
          <dt className="c-artist-highlight__info-key">Origin</dt>
          <dd className="c-artist-highlight__info-value">New Orleans, LA</dd>
          <dt className="c-artist-highlight__info-key">Genre</dt>
          <dd className="c-artist-highlight__info-value">Hip-Hop/Rap</dd>
          <dt className="c-artist-highlight__info-key">Born</dt>
          <dd className="c-artist-highlight__info-value">Sep 27, 1982</dd>
        </dl>
      </div>
    </section>
  )
};

export default artistHighlight;
