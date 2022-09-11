import Player from './Player.js';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export default function SongDetail(props) {
    // const [idSong, setIdSong] = useState('');
    const { id } = useParams();
    console.log(id);
    // TODO fetch data from ID

    const song = {
        id: '123',
        title: 'Mamá Vicenta',
        author: '18 de julio',
        media: 'https://simple-testing-demo.s3.us-east-2.amazonaws.com/test_example/phpcqiQdz.mpeg',
        numbers: '4/111\\1/22\\1/33.34.444\\1/23\\44.4/5.555\\33/3\\44.4/5.556\\54/6\\6\n4/4.444.2\\2/3\\4.4/4.445\\1/23\\44.4/5.555\\33/3\\44.4/5.556\\54/6\\6\n6/6\\5/5\\44.4/5.555\\33/3\\44.4/5.556\\54/6\\6',
        lyrics: ['Hola mundo\nAdiós mundo'],
    }

    const splitJumps = (str) => str.split(/\r?\n/).filter(item => item);
    const buildChords = (numbers) => splitJumps(numbers) || [];

    return (
        <div className="detail">
            <div className='detail__heading'>
                <h2>{song.title}</h2>
                <p>{song.author}</p>
            </div>

            {
                buildChords(song.numbers).map((chord, index) => {
                    let firstBlock = chord.indexOf('/') > chord.indexOf('\\') ? 'down' : 'up';
                    const numbers = chord.split(/[/\\]/g);
                    return (
                        <div className="chord" key={index}>
                            <div className="chord__numbers">
                                {
                                    numbers.map((element, index) => {
                                        firstBlock = firstBlock === 'up' ? 'down' : 'up';
                                        return (
                                            <>
                                                <div key={index} className={firstBlock === 'up' ? 'arca' : 'ira'}>{element}</div>
                                                {
                                                    index + 1 !== numbers.length &&
                                                    <div className='divider'>{firstBlock === 'up' ? '\\' : '/'}</div>
                                                }
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <div className="chord__lyrics">🎵 Hola Mundo.</div>
                            <div className="chord__lyrics">🎵 Hola Mundo 2.</div>
                        </div>
                    );
                })
            }

            <Player {...song} />
        </div>
    );
}
