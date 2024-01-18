import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Layout from "@theme/Layout";
import "../css/v2.css";
import "animate.css";
import CookieConsent from "react-cookie-consent";
import Lottie from 'react-lottie';
import extensionsAnimation from '/static/animations/Extensions.json';
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

const Feature = (props) => {
  return (
    <div className={props.align === "right" ? "featurev2 right" : "featurev2"}>
      <div className="featurev2-col">
        <div className="featurev2-heading">
          <div className="featurev2-icon">
            <img src={props.icon} alt="" />
          </div>
          <div className="featurev2-title">{props.title}</div>
        </div>
        <div className="featurev2-description">
          {props.description.map((section, i) => (
            <div key={i} className="featurev2-description-item" dangerouslySetInnerHTML={{__html: section}}>
            </div>
          ))}
        </div>
      </div>
      <div className="featurev2-media">
        <Lottie className="lottie" options={{loop: true, autoplay: true, animationData: props.lottie, rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }}} />
      </div>
    </div>
  );
};

const SocialMedia = (props) => {
  const social = `${props.name}-social`;
  return (
    <a href={props.href} className={social} target="_blank">
      <img src={props.imgsrc} alt={props.name}></img>
    </a>
  );
};

class V2WishlistRegistration extends React.Component {
  onScroll = () => {
    const bulletPointsElement = document.getElementById("bullet-points");
    const downloadNavElement = document.getElementById("download-nav");

    if (bulletPointsElement && downloadNavElement) {
      const bulletPointsBottom =
        bulletPointsElement.getBoundingClientRect().bottom;

      if (0 > bulletPointsBottom) {
        downloadNavElement.classList.remove("hide");
      } else {
        downloadNavElement.classList.add("hide");
      }

      downloadNavElement.style.display = "";
    }
  };

  constructor(props) {
    super(props);

    if (ExecutionEnvironment.canUseDOM) {
      window.addEventListener("scroll", this.onScroll);
    }
  }

  componentDidMount(): void {
    const downloadNavElement = document.getElementById("download-nav");
    if (downloadNavElement != null) {
      downloadNavElement.style.display = "none";
    }
  }

  render() {
    return (
      <Layout id="v2" title="PixiEditor 2.0 Waitlist">
        <div className="download-section">
          <div className="presentation-section">
            <h1 id="header" className="v2">
                Universal graphics platform - one to rule them all.
            </h1>
            <h2 id="subheader">
                Are you tired of expensive tool suites, just to create different types of graphics? <br />
                Raster, vector, pixel art, animations, procedural art - PixiEditor 2.0 got you covered, <span className="highlight">for free.</span>
            </h2>
            <div className="buttons v2">
                <div className="wishlist-input">
                    <form>
                        <input type="text" placeholder="Enter your email" itemType="email"/>
                        <button type="submit">Join Waitlist</button>
                    </form>
                </div>
              <div className="social-buttons">
                <SocialMedia
                  name="discord"
                  href="https://discord.gg/DwaXAuXVzv"
                  imgsrc="/img/Discord-Clyde.svg"
                />
                <SocialMedia
                  name="steam"
                  href="https://store.steampowered.com/app/2218560/PixiEditor__Pixel_Art_Editor/"
                  imgsrc="/img/Steam-Logo.svg"
                />
                <SocialMedia
                  name="youtube"
                  href="https://www.youtube.com/@PixiEditor"
                  imgsrc="/img/YT-Logo.svg"
                />
                <SocialMedia
                  name="twitter"
                  href="https://twitter.com/PixiEditor"
                  imgsrc="/img/Twitter-Logo.svg"
                />
                <SocialMedia
                  name="reddit"
                  href="https://www.reddit.com/r/PixiEditor"
                  imgsrc="/img/Reddit-Logo.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="featuresv2-container">
          <div className="featuresv2">
          <Feature
              icon="icons/download-cloud.svg"
              title="Install extensions to make PixiEditor truly yours."
              description={[
                "We believe, that community is what makes software great and live long.",
                "And this is what core of PixiEditor 2.0 is all about, <span class='highlight'>extensions</span> made by you, for you.",
                "Version 2.0 will not be limited to any specific type of graphics, but will be a <span class='highlight'>universal tool</span> for all of them.",
                "Installing and browsing extensions will be as easy as a single click.",
              ]}
              lottie={extensionsAnimation}
              align="left"
            />

            <Feature
              icon="icons/transparency.svg"
              title="Animations"
              description={[
                "A feature, that was the most wanted. Finally here.",
                "You'll be able to <span class='highlight'>create any kind of animations.</span> From simple frame-by-frame, to complex keyframe animations.",
                "As extensible, as everything else.",
              ]}
          
              align="right"
            />

            <Feature
              icon="icons/pen-tool.svg"
              title="Introducing Layer Nodes, our take on procedural art."
              description={[
                "That's right, if you like to play around and connect some nodes, you'll find yourself at home.",
                "Layer nodes will allow you to <span class='highlight'>create procedural art</span>, animations, vfx and whatever your imagination can come up with.",
              ]}
              video="videos/Pixel-perfect.webm"
            />
            <Feature
              video="videos/Multiple-documents.webm"
              align="right"
              icon="icons/columns.svg"
              title="Infinite canvas mode"
              description={[
                "Do you like ",
                "",
              ]}
            />
            <h2 style={{ textAlign: "center" }}>Tutaj daj takie bullet pointy jakby, dodatkowych featurów</h2>

            FAQ
          </div>
        </div>
        <CookieConsent
          location="bottom"
          style={{ background: "#2c2c2c" }}
          cookieName="cookieConsent"
          buttonStyle={{
            background: "#b91f3e",
            color: "white",
            fontSize: "13px",
          }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.{" "}
        </CookieConsent>
      </Layout>
    );
  }
}

export default V2WishlistRegistration;
