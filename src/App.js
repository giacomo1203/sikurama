import './scss/styles.js';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MainButton from './components/NavBar'
import PlayerList from './components/PlayerList.js';
import SongDetail from './components/SongDetail.js';
import Onboarding from './components/Onboarding.js';

import ReactGA from 'react-ga';
const TRACKING_ID = "G-HE6GLW3LFJ"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <>
      <BrowserRouter basename={'/siku'}>
        <MainButton />

        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/home" element={<PlayerList />} />
          <Route path="/single/:id" element={<SongDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
