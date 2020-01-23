import axios from 'axios'

const searchEndpoit = 'https://itunes.apple.com/search'
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
}
const params = {
  term: 'foo fighters',
  media: 'music',
  limit: 30
}

export default class SearchSongs {
  constructor() {
    this.musics = []
    this.albums = {}
  }

  getAlbums() {
    return new Promise((resolve, reject) => {
      axios.get(searchEndpoit, { params, headers })
        .then(response => {
          this.musics = response.data.results
          this.setAlbums()
          resolve(this.albums)
        })
        .catch((error) => reject(error))
    })
  }

  setAlbums() {
    const albumsName = this.getAlbumsName()

    this.albums = albumsName.reduce((albums, name) => {
      if (!albums[name]) {
        albums[name] = this.musics.filter(music => music.collectionName === name)
      }

      return albums
    }, {})
  }

  getAlbumsName() {
    const albumsName = [];

    this.musics.forEach(music => {
      if (!albumsName.includes(music.collectionName)) {
        albumsName.push(music.collectionName)
      }
    });

    return albumsName
  }
}


