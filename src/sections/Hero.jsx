import { useState } from "react";

// Import Components
import { Link } from "react-scroll";
import Typist from "react-typist-component";

import SpecializingContainer from "../components/SpecializingContainer";

// Import Custom Hooks
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// Import Styles
import "../styles/css/hero.css";

// Import Images
import Malte from "../assets/images/hero/malte.webp";

function Hero() {
  // Animation Refs
  const [socialsIsVisible, socialsRef] = useIntersectionObserver();
  const [text2IsVisible, text2Ref] = useIntersectionObserver();
  const [malteIsVisible, malteRef] = useIntersectionObserver();
  const [containerbottomIsVisible, containerbottomRef] =
    useIntersectionObserver();
  const [blink, setBlink] = useState("");

  const addBlinkClassToCursor = () => {
    setBlink("blink");
  };

  return (
    <div id="hero" className="hero">
      {/* Top Container containing Hero Left and Image */}
      <div className="hero--containertop">
        <div className="hero--containertop--left">
          <div className="hero--containertop--left--text1">
            <Typist onTypingDone={addBlinkClassToCursor}>
              Hi,&nbsp;
              <span className="hero--containertop--left--text1--name">
                Malte
              </span>
              &nbsp;here!
            </Typist>
            <div className="hero--containertop--left--text1--spacer"></div>
            <div className={`hero--containertop--left--text1--cursor ${blink}`}>
              |
            </div>
          </div>
          <div
            className={`hero--containertop--left--text2 fade-in-left ${
              text2IsVisible ? "is-visible" : ""
            }`}
            ref={text2Ref}
          >
            <div className="hero--containertop--left--text2--icon">&#8811;</div>
            <div className="hero--containertop--left--text2--text">
              Software Engineer
            </div>
          </div>
          <div className="hero--containertop--left--spacer"></div>
          <div
            className={`hero--containertop--left--socials fade-in-left ${
              socialsIsVisible ? "is-visible" : ""
            }`}
            ref={socialsRef}
          >
            <div className="width-xs"></div>
            <Link
              className="hero--containertop--left--socials--icon"
              to="contact"
              spy={true}
              smooth={true}
              duration={250}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
            </Link>
            <div className="width-sm"></div>
            <a
              href="https://www.linkedin.com/in/malte-lindemann-b9533b209/"
              className="hero--containertop--left--socials--icon"
              target="blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="32x32"
                fill="currentColor"
                className="mercado-match"
                focusable="false"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
            <div className="width-sm"></div>
            <a
              href="https://www.github.com/lambouw"
              className="hero--containertop--left--socials--icon"
              target="blank"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                version="1.1"
                data-view-component="true"
                fill="currentColor"
              >
                <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div
          className={`hero--containertop--right fade-in-bottom ${
            malteIsVisible ? "is-visible" : ""
          }`}
          ref={malteRef}
        >
          <img
            className="hero--containertop--right--image"
            src={Malte}
            alt="Image of Malte Lindemann"
          />
          <div className="hero--containertop--right--circle"></div>
        </div>
      </div>

      {/* Bottom Container containing Specialization*/}
      <div
        className={`hero--containerbottom fade-in-bottom ${
          containerbottomIsVisible ? "is-visible" : ""
        }`}
        ref={containerbottomRef}
      >
        <div className="hero--containerbottom--spacer"></div>
        <SpecializingContainer />
      </div>
    </div>
  );
}

export default Hero;
