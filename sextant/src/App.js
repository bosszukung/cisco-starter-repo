import './App.css';
import Navbar from './componants/navbar';
import Banner from './componants/Banner/banner'

function App() {
  const ipify = require('ipify2');
  ipify.ipv4().then(ipv4 => console.log(ipv4)).catch(err => console.log(err));
  ipify.ipv64().then(ipv64 => console.log(ipv64)).catch(err => console.log(err));
  return (
    <div>
      <Navbar/>
      <Banner/>
    </div>
  );
}

export default App;
