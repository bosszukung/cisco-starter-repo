import './App.css';
import Navbar from './componants/navbar';
import Banner from './componants/Banner/banner';
import UserIP from './componants/IP/userIP'
import Latency from './componants/Latency/latency';


function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <UserIP/>
      <Latency/>

    </div>
  );
}

export default App;
