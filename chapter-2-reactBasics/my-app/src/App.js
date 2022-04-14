import {
  Route,
  Routes
} from "react-router-dom";
import Main from './Main';
import AllEvents from './pages/Events/AllEvents';
import AttendedEvents from './pages/Events/AttendedEvents';
import FavoriteEvents from './pages/Events/FavoriteEvents';

const App = () => {
  return (
    
    <Routes>
      
        <Route  path="/" element={<Main />} />
        <Route  path="/allevents" element={<AllEvents />} />
        <Route  path="/attendedevents" element={<AttendedEvents />} />
        <Route  path="/favevents" element={<FavoriteEvents />} />
        
    </Routes>

  );
};
export default App;
