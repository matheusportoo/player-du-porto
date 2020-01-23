import React from 'react'
import { connect } from 'react-redux'
import { fetchAlbums } from '../store/actions'
import ArtistAlbums from '../components/artist-albums'
import ArtistHighlight from '../components/artist-highlight'
import FeaturedArtists from '../components/featured-artists'

const appContainer = ({ onFetchAlbums }) => {
  onFetchAlbums()

  return (
    <main>
      <ArtistHighlight />
      <ArtistAlbums />
      <FeaturedArtists />
    </main>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchAlbums: () => dispatch(fetchAlbums())
  }
}

export default connect(null, mapDispatchToProps)(appContainer)
