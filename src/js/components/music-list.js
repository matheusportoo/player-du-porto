import React from 'react'
import MusicListTrak from './music-list-track'

const musicList = ({ musics }) => {
  return (
    <div className="c-music-list c-artist-albums__music-list">
      { musics.map(music => {
        return <MusicListTrak
          name={music.trackName}
          artist={music.artistName}
          time={music.trackTimeMillis}
          coverPic={music.artworkUrl60}
          trackViewUrl={music.trackViewUrl}
          key={`music-list-track-${music.trackId}`}
        />
      }) }
    </div>
  )
};

export default musicList
