import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { FiDownload } from "react-icons/fi";

import escudo from "../assets/escudo.jpg";

import { useState, useEffect } from "react";
import React, { useRef } from "react";
import { trackerEvent } from "./GAnalytics";

export default function Player(props) {
  const audioRef = useRef(null);
  const sliderRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);

  const mediaMetadata = {
    title: props.title,
    artist: "Sikuris 18 de julio",
    album: "Repertorio",
    artwork: [
      { src: escudo, sizes: "64x64", type: "image/jpg" },
      { src: escudo, sizes: "128x128", type: "image/jpg" },
    ],
  };

  useEffect(() => {
    audioRef.current[playing ? "play" : "pause"]();
  }, [playing]);

  const toggle = () => {
    trackerEvent('player:' + playing);
    setPlaying(!playing)
  };

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
  };

  const setMediaSession = () => {
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata(mediaMetadata);

      navigator.mediaSession.setActionHandler('play', function() {
        setPlaying(true);
      });

      navigator.mediaSession.setActionHandler('pause', function() {
        setPlaying(false);
      });
    }
  };

  const calcPercent = (partial) => {
    return Math.round((partial * 100) / duration) || 0;
  };

  return (
    <div className="player">
      <audio
        ref={audioRef}
        onLoadedMetadata={(event) => {
          setDuration(event.currentTarget.duration);
          setMediaSession();
        }}
        onEnded={(e) => {
          setPlaying(false);
        }}
        onTimeUpdate={(event) => {
          setPlayed(event.currentTarget.currentTime);
        }}
      >
        <source src={`${props.media}`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button className="player__btn" onClick={toggle}>
        {playing ? <BsPauseFill /> : <BsFillPlayFill className="play-btn" />}
      </button>

      <div className="player__slider">
        <input
          ref={sliderRef}
          className="player__track"
          onInput={(e) => {
            audioRef.current.currentTime =
              (e.currentTarget.value * duration) / 100;
          }}
          style={{ "--seek-before-width": `${calcPercent(played)}%` }}
          value={calcPercent(played)}
          type="range"
          max="100"
        />
        <div className="player__info">
          <span>{calculateTime(played)}</span>
          <span>{calculateTime(duration)}</span>
        </div>
      </div>

      <a href={props.media} className="player__btn" download>
        <FiDownload />
      </a>
    </div>
  );
}
