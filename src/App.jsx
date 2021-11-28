import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import logo from '@assets/logo.png'
import './global.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header logo={logo} menuItems={[
        {
          text: "HOME",
          link: "#homeSection"
        },
        {
          text: "SUMMARY",
          link: "#summarySection"
        },
        {
          text: "TOKENOMICS",
          link: "#tokenomicsSection"
        },
        {
          text: "ROADMAP",
          link: "#roadmapSection"
        },
        {
          text: "OUR TEAM",
          link: "#ourTeamSection"
        },
        {
          text: "WHITE PAPER",
          link: "/"
        },
        {
          text: "BLOG",
          link: "#"
        },
      ]}/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
