import React, { useState, useEffect } from "react";

const LatencyDisplay = () => {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:55455");

    ws.onmessage = (event) => {
      const packageLatency = Date.now() - parseInt(event.data);
      setLatency(packageLatency);
    };
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      {latency !== null ? `Package latency: ${latency}ms` : "Connecting..."}
    </div>
  );
};

export {LatencyDisplay}
