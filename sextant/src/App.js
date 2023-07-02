import "./App.css";
import { Banner } from "./components/Banner";
import { Exhibit } from "./components/Exhibit";
import { Ipfy } from "./components/Ipfy";
import { LatencyDisplay } from "./components/LatencyDisplay";

function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant" />
      <Exhibit name="Public IPv4 Address:">
        <Ipfy url="https://api.ipify.org?format=json" />
      </Exhibit>
      <Exhibit name="Public IPv6 Address:">
        <Ipfy url="https://api64.ipify.org?format=json" />
      </Exhibit>
      <Exhibit name="Latency Display">
        <LatencyDisplay />
      </Exhibit>
    </div>
  );
}

export default App;
