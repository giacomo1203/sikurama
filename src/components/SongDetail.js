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

  const createDiv = (className, content) => {
    return `<div class="${className} ${content==='|' ? 'parallel' : ''}">${content}</div>`;
  }
  
  const getBackClassName = (code) => {
    if (code === '|') return 'arca';
    if (code === '/') return 'ira';
    if (code === '\\') return 'arca';
    return 'ira';
  }
  
  const buildNumbers = (numbers) => {
    let html = '';
    let result = '';
    let divider;
    let numbs = numbers.split('')
  
    numbs.forEach((element, index) => {
      if (element==='|' || element==='/' || element==='\\') {
        divider = divider === '|' ? false : element;
        result += createDiv(getBackClassName(divider), html);
        result += createDiv('divider', element);
        html = '';
      } else {
        html += element;
        if ((numbs.length - 1) === (index)) {
          const nextDivider = divider === '/' ? '\\' : '/';
          result += createDiv(getBackClassName(nextDivider), html);
        }
      }
    });
    return result;
  }
  

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
        let sameTime = false;
        let firstBlock = chord.indexOf("/") > chord.indexOf("\\") ? "down" : "up";
        if (chord.indexOf("|") > -1) {
          firstBlock = 'down';
          sameTime = true;
        }
        // const numbers = chord.split(/[/\\|]/g);
        return (
          <div className="chord" key={indexRow}>
            <div className="chord__numbers" dangerouslySetInnerHTML={{__html: buildNumbers(chord)}}>
              {/* {numbers.map((element, index) => {
                firstBlock = firstBlock === "up" ? "down" : "up";
                return (
                  <div key={index}>
                    <div
                      className={`${firstBlock === "up" ? "arca" : "ira"} ${sameTime ? 'paralell' : ''}`}
                    >{element}</div>
                    {index + 1 !== numbers.length && (
                      <div
                        className="divider">
                        {sameTime ? '|' : firstBlock === "up" ? "\\" : "/"}
                      </div>
                    )}
                  </div>
                );
              })} */}
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
