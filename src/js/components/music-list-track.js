import React from 'react'

function getTrackTime(milliseconds) {
  const time = (milliseconds / 1000);
  let seconds = Math.round(time % 60).toString();
  const minutes = Math.round((time - seconds) / 60).toString();

  if (seconds.length === 1) {
    seconds = `0${seconds}`
  }

  return `${minutes}:${seconds}`
}

const MusicListTrack = ({ name, artist, time, coverPic, trackViewUrl }) => {
  return (
    <div className="c-music-list__item">
      <div className="c-music-list__cover">
        <img className="c-music-list__cover-pic" src={ coverPic } alt="" />
      </div>
      <div className="c-music-list__track">
        <a href={trackViewUrl} target="_blank" rel="noopener noreferrer">
          <p className="c-music-list__track-name">{ name }</p>
          <p className="c-music-list__track-artist">{ artist }</p>
          <p className="c-music-list__track-time">{ getTrackTime(time) }</p>
        </a>
      </div>
    </div>
  )
};

export default MusicListTrack
