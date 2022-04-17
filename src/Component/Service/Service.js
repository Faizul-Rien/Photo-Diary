import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Service = ({ service }) => {
  const { img, name, price, description, rating } = service;
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
          <Button variant="success">Check out</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
