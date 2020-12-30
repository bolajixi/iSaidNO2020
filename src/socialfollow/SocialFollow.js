import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a href="https://www.github.com/bolajixi" 
        className="github social" target="_blank" rel="noreferrer" aria-label="github profile">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/bolaji-olawale/" 
        className="linkedin social" target="_blank" rel="noreferrer" aria-label="linkedin profile">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://www.instagram.com/bolaji_xi"
        className="instagram social" target="_blank" rel="noreferrer" aria-label="instagram profile">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.twitter.com/bolaji_xi" 
      className="twitter social" target="_blank" rel="noreferrer" aria-label="twitter profile">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    </div>
  );
}
