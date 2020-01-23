import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import MusicList from './music-list'

const artistAlbums = ({ albums }) => {
  return (
    <Fragment>
      { Object.keys(albums).map((album, index )=> (
        <section className="c-artist-albums" key={`artist-albums-${index}`}>
          <div className="t-container">
            <div className="c-artist-albums__album">
              <div className="c-artist-albums__cover">
                <img className="c-artist-albums__cover-pic" src={albums[album][0].artworkUrl100} alt="" />
                <div className="c-artist-albums__info t-hidden-mb">
                  <p className="c-artist-albums__number-songs">{albums[album].length} songs</p>
                  <p className="c-artist-albums__info-title"><strong>Editors' notes</strong></p>
                  <p className="c-artist-albums__info-desc">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
                  </p>
                </div>
              </div>
              <div className="c-artist-albums__details">
                <h2 className="c-artist-albums__album-name">{albums[album][0].collectionName}</h2>
                <a href={albums[album][0].collectionViewUrl} className="o-button c-artist-albums__bt-listen-on-apple-music">Listen on Apple music</a>
                <div className="c-artist-albums__info t-hidden-lg">
                  <p className="c-artist-albums__info-title"><strong>Editors' notes</strong></p>
                  <p className="c-artist-albums__info-desc">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
                  </p>
                </div>
                <MusicList musics={albums[album]}></MusicList>
              </div>
            </div>
          </div>
        </section>
      )) }
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps)(artistAlbums)
