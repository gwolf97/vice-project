import Header from './components/Header';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomeScreen from './screens/HomeScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import WorkScreen from './screens/WorkScreen';
import Footer from './components/Footer';

function App() {
  return (  
  <Router>
    <main>
      <Header/>
      <Container className="d-flex flex-column container-fluid justify-content-center align-items-center">
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/schedule" element={<ScheduleScreen/>}/>
          <Route path="/work" element={<WorkScreen/>}/>
        </Routes>
      </Container>
      <Footer/>
    </main>
  </Router>
  );
}

export default App;
