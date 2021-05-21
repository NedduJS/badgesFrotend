import React from "react";
import { connect } from "react-redux";

import gravatar from "../utils/gravatar";

import astronauts from "../assets/static/astronauts.svg";
import platziConfLogo from "../assets/static/platziconf-logo.svg";
import "../assets/styles/components/Card.css";

const Card = ({ input }) => {
  const { name, email, jobTitle, twitter, share } = input || {};
  return (
    <section className="card">
      <div className="head">
        <img src={astronauts} alt="Imagen de platzinautas" />
        <img src={platziConfLogo} alt="Platzi Conf Logo" />
      </div>
      <div className="main">
        <img src={gravatar(email || "es")} alt="Gravatar del usuario" />
        <div className="info">
          <p>{name || "NAME"}</p>
        </div>
      </div>
      <p>{jobTitle || "JOB TITLE"}</p>
      <p>@{twitter || "Twitter"}</p>
      <p>{share || "Share something with the community"}</p>
      <p>#platziconf</p>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    input: state.input
  };
};

export default connect(mapStateToProps, null)(Card);
