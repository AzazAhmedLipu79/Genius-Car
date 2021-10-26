import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Booking = () => {
  const { serviceId } = useParams();
  const [services, setServices] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((response) => response.json())
      .then((data) => setServices(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>
        I Am <b>{services.name}</b>
      </h1>
      <h2>this is booking: {serviceId}</h2>
    </div>
  );
};

export default Booking;
