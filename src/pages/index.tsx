// import * as React from "react"
import React from "react";
import { SITE_TITLE } from "@/config/site";

const IndexPage = () => {
  return (
    <div className="page">
      <nav>
        <span>{SITE_TITLE}</span>
        <ul>
          <li>Placeholder</li>
          <li>Placeholder</li>
          <li>Placeholder</li>
          <li>Placeholder</li>
        </ul>
      </nav>
      <div className="container">This Model will be expounded on</div>
    </div>
  );
};

export default IndexPage;
