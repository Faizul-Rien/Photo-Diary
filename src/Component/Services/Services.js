import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("photography.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2 className="text-center mt-5 mb-5 text-white rounded bg-success w-25  mx-auto">
        Provided Services
      </h2>
      <div className="service-container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
