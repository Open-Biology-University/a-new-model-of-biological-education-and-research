// import * as React from "react"
import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { SITE_TITLE } from "@/config/site";

const LINKS = [
  ["Bioinformatics", "/bioinformatics"],
  ["Reformed Biotechnology", "/reformed-biotechnology"],
  [
    "(Free and) Open Source in Bio",
    "/free-and-open-source-bio-edu-and-research",
  ],
  ["Certification", "/certifications"],
  ["Methods for Funding", "/methods-for-funding"],
];

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{SITE_TITLE}</title>
      </Helmet>
      <div className="page">
        <nav className="site-nav">
          <span className="site-title">{SITE_TITLE}</span>
          <ul>
            {LINKS.map(([text, path]) => (
              <li key={path}>
                <Link to={path}>{text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className="page-content">{children}</main>
      </div>
    </>
  );
};

export default Layout;
