import React from "react";
import Link from "next/link";

const links = [
  { href: "https://zeit.co/now", label: "ZEIT" },
  { href: "https://github.com/zeit/next.js", label: "GitHub" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav className="navbar navbar-expand-lg">
    <div className="container">
      <a className="navbar-brand" href="#">
        Container
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample07"
        aria-controls="navbarsExample07"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample07">
        <ul className="navbar-nav ml-auto">
          <Link href="/">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Anasayfa
              </a>
            </li>
          </Link>
          <Link href="/blogs">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
          </Link>
         
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
