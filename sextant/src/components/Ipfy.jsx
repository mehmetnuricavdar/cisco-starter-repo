import React, { useState, useEffect } from "react";

const Ipfy = (props) => {
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    const getIp = async () => {
      const response = await fetch(props.url);
      const data = await response.json();
      setIpAddress(data.ip);
    };
    getIp();
  }, []);

  return <div>Your IP address is: {ipAddress}</div>;
};

export { Ipfy };
