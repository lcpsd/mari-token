import { Header } from './components/Header';
import { Home } from './pages/Home';
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
          text: "HOW IT WORKS",
          link: "#howWorksSection"
        },
        {
          text: "WHITE PAPER",
          link: "#homeSection"
        },
        {
          text: "THE CHART",
          link: "#homeSection"
        },
        {
          text: "OUR TEAM",
          link: "#ourTeamSection"
        },
        {
          text: "FAQ",
          link: "#faqSection"
        },
        {
          text: "BLOG",
          link: "#"
        },
      ]}/>
      <Home/>
    </>
  );
}

export default App;
