import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import logo from '@assets/logo.png'
import './global.scss'

function App() {
  return (
    <>
      <Header logo={logo} menuItems={[
        {
          text: "HOME",
          link: "#homeSection"
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
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
