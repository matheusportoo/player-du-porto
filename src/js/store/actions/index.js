import SearchSongs from '../../api/search-songs'
import { FETCH_ALBUMS_SUCCESS } from '../types'

export const fetchAlbums = () => {
  return dispatch => {
    new SearchSongs()
      .getAlbums()
      .then(albums => {
        dispatch(fetchAlbumsSuccess(albums))
      })
  }
}

const fetchAlbumsSuccess = albums => ({
  type: FETCH_ALBUMS_SUCCESS,
  payload: albums
})
