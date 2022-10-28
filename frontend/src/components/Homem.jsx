import React from "react";
import "../styles/homem.css";

// import Slide from "../components/Slide";
const Homem = () => {
  return (
    <>
      <section className="homeHero">
        <h1 className="homeTitle">Welcome readers to our Digital Library!</h1>
        <div className="homehome">
          <div className="itemHome">
            <div className="sectionHome">
              <div className="contentHometext">
                <h1 className="homeH1">Browse our Collections</h1>
                <p className="homeP">
                  Each Collection of our Global Digital Library represents a
                  domain of human development wisdom that influences—or is
                  influenced by—coaching. Connecting these fields of inquiry is
                  our commitment to investigate how coaching contributes to the
                  United Nations Action Plan for societal well-being. As a
                  holistic system, these four pillars inform our research focus,
                  which in turn generates our body of knowledge.
                </p>
              </div>
              <div className="contentHomeImg">
                <img
                  src="https://i.etsystatic.com/26132359/c/1882/1496/168/0/il/f84b81/3452995038/il_340x270.3452995038_ce0l.jpg"
                  className="clip-mask"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* <Slide /> */}
      </section>
    </>
  );
};
export default Homem;
