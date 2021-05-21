import React from "react";
import { Link } from "react-router-dom";

import Subheader from "../components/Subheader";
import Button from "../components/Button";
import BadgeList from "../components/BadgesList";

import "../assets/styles/Search.css";

const Search = () => {
  return (
    <div className="search">
      <Subheader />
      <section className="searcher">
        <Link to="/register" className="link">
          <Button text="New Badge" />
        </Link>
        <input className="input" type="text" placeholder="Type for search" />
      </section>
      <BadgeList />
    </div>
  );
};

export default Search;
