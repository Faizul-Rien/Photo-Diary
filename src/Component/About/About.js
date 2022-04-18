import React from "react";
import profile from '../../Images/profile.jpg';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div>
        <img src={profile} alt="" />
      </div>
      <div>
        <p>I'm Faizul Hassan Rien.Few months ago I completed my Bachelor's degree in computer science and engineering.After 6 months i want to see myself as a junior web developer of any IT or Sowfware related organization.My future goal is to became a full stack web developer. </p>
      </div>
    </div>
  );
};

export default About;
