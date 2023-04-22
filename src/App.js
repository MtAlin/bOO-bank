import NavBar from "./Components/NavBar";
import TitlePageGeneration from "./Components/TitlePageGeneration";
import Statistic from "./Components/Statistic";
import BussinessHandle from "./Components/BussinessHandle";
import PayPal from "./Components/PayPal";
import BetterCard from "./Components/BetterCard";
import PeopleSaying from "./Components/PeopleSaying";
import PeopleCard from "./Components/PeopleCard";
import VectorGroup from "./Components/VectorGroup";
import Service from "./Components/Service";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="landingPage">
      <div></div>
      <NavBar />
      <TitlePageGeneration />
      <Statistic />
      <BussinessHandle />
      <PayPal />
      <BetterCard />
      <PeopleSaying />
      <PeopleCard />
      <VectorGroup />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
