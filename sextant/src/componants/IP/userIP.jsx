import { useState, useEffect } from 'react';
import axios from "axios";
import './userIP.css'

function UserIP() {
    const [ipV4, setIPv4] = useState("");
    const [ipV6, setIPv6] = useState("");
    const getData = async () => {
        const IPV4 = await axios.get("https://api64.ipify.org?format=json" );
        const IPV6 = await axios.get("https://api64.ipify.org?format=json");
        console.log(IPV4.data);
        console.log(IPV6.data)
        setIPv4(IPV4.data.ip);
        setIPv6(IPV6.data.ip);
    };
    useEffect(() => {
        getData();
      }, []);

    return(
        <div className="ip">
            <div className='user'>
                <h3>Your IPV4 Address is</h3>
                <h4>{ipV4}</h4>
                <h3>Your IPV6 address is</h3>
                <h4>{ipV6}</h4>
            </div>
        </div>
      );

}
export default UserIP

