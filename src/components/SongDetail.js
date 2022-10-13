import Player from "./Player.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api/post.js";
import Modal from "react-modal";
import { BiBook } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import '../scss/_modal.scss'

export default function SongDetail(props) {
  // const [idSong, setIdSong] = useState('');
  const { id } = useParams();
  // TODO fetch data from ID

  const [song, setSong] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    getPost().then((response) => {
      const filtered = response.find(
        (song) => parseInt(song.id) === parseInt(id)
      );
      setSong(filtered);
    });
  }, []);

  const splitJumps = (str) => str.split(/\r?\n/).filter((item) => item);
  const buildChords = (numbers) => splitJumps(numbers) || [];
  const replaceJumpLine = (content) => content.replace(/\n/g, "<br />");
  

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return !song ? (
    <h1> Waiting </h1>
  ) : (
    // <div></div>
    <div className="detail">
      <div className="detail__heading">
        <div>
        <h2> {song.title} </h2>
        <p> {song.author} </p>
        </div>
        {song.lyrics.length
        ? <button onClick={openModal}><BiBook /></button>
        : ''}
      </div>
      
      {buildChords(song.numbers).map((chord, indexRow) => {
        let firstBlock =
          chord.indexOf("/") > chord.indexOf("\\") ? "down" : "up";
        const numbers = chord.split(/[/\\]/g);
        return (
          <div className="chord" key={indexRow}>
            <div className="chord__numbers">
              {numbers.map((element, index) => {
                firstBlock = firstBlock === "up" ? "down" : "up";
                return (
                  <div key={index}>
                    <div
                      className={firstBlock === "up" ? "arca" : "ira"}
                    >{element}</div>
                    {index + 1 !== numbers.length && (
                      <div
                        className="divider">
                        {firstBlock === "up" ? "\\" : "/"}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {/* <div className="chord__lyrics">🎵 Hola Mundo.</div>
                <div className="chord__lyrics">🎵 Hola Mundo 2.</div> */}
          </div>
        );
      })}
     {song.lyrics.length ?
     <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <button className="close-btn" onClick={closeModal}> <AiOutlineClose /> </button>
        <h2> {song.title} </h2> 
        <br />
        <p dangerouslySetInnerHTML={{__html: replaceJumpLine(song.lyrics)}} />
      </Modal> : ''}
      <Player {...song} />
    </div>
  );
}
