import './scss/styles.js';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/NavBar'
import PlayerList from './components/PlayerList.js';
import News from './components/Notifications';
import SongDetail from './components/SongDetail.js';
import Onboarding from './components/Onboarding.js';

import ReactGA from 'react-ga';
const TRACKING_ID = "G-HE6GLW3LFJ"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <>
      <BrowserRouter basename={'/siku'}>
        <Header />

        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/home" element={<PlayerList />} />
          <Route path="/news" element={<News />} />
          <Route path="/single/:id" element={<SongDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
