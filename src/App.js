import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landingpage from './components/landingpage/Landingpage';
import AudienceSection from './components/pagesofnavbars/AudienceSection';
import Gallery from './components/pagesofnavbars/Gallery';
import Ships from './components/pagesofnavbars/Ships';
import Features from './components/pagesofnavbars/Features';
import Popuppage from './components/datagrid/Popuppage';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Landingpage />}></Route>
        <Route path="/audience" element={<AudienceSection />}></Route>
        <Route path="/gallary" element={<Gallery />}></Route>
        <Route path="/ships" element={<Ships />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/bookform" element={<Popuppage />}></Route>
      </Routes>

    </>
  );
}

export default App;