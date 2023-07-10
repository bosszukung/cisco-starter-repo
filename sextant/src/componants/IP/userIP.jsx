import { useState, useEffect } from 'react';
import axios from "axios";
import './userIP.css'

function UserIP() {
    const [ip, setIP] = useState("");
    const getData = async () => {
        const res = await axios.get("https://api64.ipify.org?format=json");
        console.log(res.data);
        setIP(res.data.ip);
    };
    useEffect(() => {
        getData();
      }, []);

    return(
        <div className="ip">
            <div className='user'>
                <h2>Your IP Address is</h2>
                <h4>{ip}</h4>
            </div>
        </div>
      );
}
export default UserIP

