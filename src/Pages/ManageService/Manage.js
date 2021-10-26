import React, { useEffect, useState } from "react";

const Manage = () => {
  const [services, setServices] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2>This is Manage</h2>
      {services.map((service) => (
        <div
          className="d-grid w-50 mx-auto border border-3 shadow-lg bg-info"
          key={service?._id}
        >
          <h3>{service?.name}</h3>
          <button className="btn btn-danger">Delete</button>
        </div>
      ))}
      {/* {services.map((service) => (
        <div
          className="d-grid w-50 mx-auto border border-3 shadow-lg bg-info"
          key={service._id}
        >
          <h3>{service.name}</h3>
          <button className="btn btn-danger">Delete</button>
        </div>
      ))} */}
    </div>
  );
};

export default Manage;
