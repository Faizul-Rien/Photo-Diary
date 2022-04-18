import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, img, name, price, description, rating } = service;
  const nevigate = useNavigate();

  const handleCheckOut = (id) => {
    nevigate(`/checkout/${id}`);
  };

  return (
    <div className="service-box">
      <Card style={{ width: "380px" }}>
        <Card.Img variant="top" height="250px" src={img} />
        <Card.Body>
          <h2>
            {price}$<span className="h6">(per-day)</span>
          </h2>
          <Card.Title>{name}</Card.Title>
          <p className="text-d fw-6">{description}</p>
          <p className="rating">
            <span className="ratings">Reviews: </span>
            {rating}{" "}
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
          </p>
          <Button onClick={() => handleCheckOut(id)} variant="success">
            Check out
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
