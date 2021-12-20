// import * as React from "react"
import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/react";
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

interface WrapperProps {
  children: ReactNode;
}

const shortcodes = {};

const Layout = ({ children }: WrapperProps) => {
  return (
    <MDXProvider components={shortcodes}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{SITE_TITLE}</title>
      </Helmet>
      <div className="page">
        <nav className="site-nav">
          <span className="site-title">
            <a
              href="https://github.com/Open-Biology-University"
              target="_blank"
            >
              Open Biology University
            </a>
          </span>
          <ul>
            {LINKS.map(([text, path]) => (
              <li key={path}>
                <Link to={path}>{text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className="page-content">
          <div className="container">{children}</div>
        </main>
      </div>
    </MDXProvider>
  );
};

export default Layout;
