import React, {useState, useEffect } from "react";
import {w3cwebsocket as ws} from "websocket"

function Latency() {
    const [latency, setlatency] = useState("");

    useEffect(() => {
        const client = new ws('ws://localhost:55455');
        client.onmessage = (message) => {
            setlatency(new Date().getTime() - message.data);
        };
        return () => client.close();
    },[]);

    return (
        <div className="Latency">
            <div className="latency">
                <h2>Latency</h2>
                <h4>{latency}</h4>
            </div>            
        </div>
    )
    
}

export default Latency