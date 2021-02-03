import React from 'react'
import ReactPlayer from "react-player";

const AudioWidget = props => {
  return (
      <div className="wrap">
        <ReactPlayer
          url="https://soundcloud.com/rmnrmn/lets-boogie-get-up"
          width='150%'
          height='100%'
        />
        <ReactPlayer
          url="https://soundcloud.com/rmnrmn/sailor-bae"
          width='150%'
          height='100%'
        />
        <ReactPlayer
          url="https://soundcloud.com/rmnrmn/together-forever"
          width='150%'
          height='100%'
        />
      </div>
  )
}

export default AudioWidget;