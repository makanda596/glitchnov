import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Creative from './Pages/Creative/Creative'
import Events from './Pages/Events/Events'
import Gallery from './Pages/Gallery/Gallery'
import Outdoor from './Pages/Outdoor/Outdoor'
import Services from './Pages/Services/Services'
function App() {
  return (
    <div> 
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/creative" element={<Creative />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/outdoor" element={<Outdoor />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
