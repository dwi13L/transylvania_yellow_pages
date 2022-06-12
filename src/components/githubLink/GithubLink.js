import React from "react";
import "./GithubLink.css";

export default function GithubLink({ source }) {
  return (
    <div className="repo-link">
      <a
        href="https://github.com/dwi13L/transylvania_yellow_pages"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={source} alt="github icon" />
      </a>
    </div>
  );
}
