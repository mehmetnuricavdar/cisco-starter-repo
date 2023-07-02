import "./App.css";
import { Banner } from "./components/Banner";
import { Exhibit } from "./components/Exhibit";
import { Ipfy } from "./components/Ipfy";

function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant" />
      <Exhibit name="I'm an exhibit!"></Exhibit>
      <Exhibit name="I'm also an exhibit!"></Exhibit>
      <Exhibit name="Don't forget about me, I'm an exhibit too!"></Exhibit>
      <Exhibit name="Public IPv4 Address:">
        <Ipfy url="https://api.ipify.org?format=json" />
      </Exhibit>
      <Exhibit name="Public IPv6 Address:">
        <Ipfy url="https://api64.ipify.org?format=json" />
      </Exhibit>
    </div>
  );
}

export default App;
