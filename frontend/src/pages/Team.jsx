import React from "react";
import "../styles/team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Team() {
  return (
    <div>
      <Navbar />
      <section className="teamHero">
        <div className="containerTeam">
          <div className="cardTeam">
            <div className="imgBxTeam">
              <img src="/images/image/ahmed.jpeg" alt="" />
            </div>
            <div className="contentTeam">
              <div className="detailsTeam">
                <h2 className="h2Team">
                  Ahmed DCI <br />
                  <span className="spanTeam">Web Developer</span>
                </h2>
                <div className="sciTeam">
                  <ul className="sci">
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="cardTeam">
            <div className="imgBxTeam">
              <img src="/images/image/mike.jpg" alt="" />
            </div>
            <div className="contentTeam">
              <div className="detailsTeam">
                <h2 className="h2Team">
                  Michael DCI <br />
                  <span className="spanTeam">Web Developer</span>
                </h2>
                <div className="sciTeam">
                  <ul className="sci">
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="cardTeam">
            <div className="imgBxTeam">
              <img src="/images/image/taniya2.jpg" alt="" />
            </div>
            <div className="contentTeam">
              <div className="detailsTeam">
                <h2 className="h2Team">
                  Tetiana DCI <br />
                  <span className="spanTeam">Web Developer</span>
                </h2>
                <div className="sciTeam">
                  <ul className="sci">
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="cardTeam">
            <div className="imgBxTeam">
              <img src="/images/image/abdu.jpg" alt="" />
            </div>
            <div className="contentTeam">
              <div className="detailsTeam">
                <h2 className="h2Team">
                  Abdulrazak DCI <br />
                  <span className="spanTeam">Web Developer</span>
                </h2>
                <div className="sciTeam">
                  <ul className="sci">
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Team;
