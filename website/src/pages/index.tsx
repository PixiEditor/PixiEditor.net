import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Layout from "@theme/Layout";
import "../css/style.css";
import "animate.css";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

const Feature = (props) => {
  return (
    <div className={props.align === "right" ? "feature right" : "feature"}>
      <div className="featrue-col">
        <div className="feature-heading">
          <div className="feature-icon">
            <img src={props.icon} alt="" />
          </div>
          <div className="feature-title">{props.title}</div>
        </div>
        <div className="feature-description">
          {props.description.map((section, i) => (
            <div key={i} className="feature-description-item">
              {section}
            </div>
          ))}
        </div>
      </div>
      <div className="feature-media">
        <video
          src={props.video}
          autoPlay
          loop
          muted
          disableRemotePlayback
        ></video>
        <img
          src={props.video.replace(".webm", "-fallback.webp")}
          className="fallback"
        ></img>
      </div>
    </div>
  );
};

const BulletPoint = (props) => {
  return (
    <div className="bullet-point">
      <div className="bullet-point-icon">
        <img src={props.icon} alt="" />
      </div>
      <div className="bullet-point-text">{props.text}</div>
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

class Index extends React.Component {
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

    const extraInfo = document.getElementById("extraInfo");
    extraInfo!.style.display = "";

    ReactDOM.render(this.v2SignIn(), extraInfo);
  }

  v2SignIn() {
    return [
      <h1>
        PixiEditor 2.0 is coming, {" "}
        <a
          href="/v2"
          target="_blank"
        >
          join the waitlist
        </a>{" "}
        today.
      </h1>,
      <p>Meet the new universal graphics platform. Animations, extensions, infinite canvas and more!</p>,
    ];
  }

  render() {
    return (
      <Layout id="mainPage" title="Main page">
        <div id="extraInfo" style={{ display: "none" }}>
        </div>
        <div className="download-section">
          <div className="presentation-section">
            <h1 id="header">
              A beautiful, fast pixel-art editor packed in an eye-friendly dark
              theme.
            </h1>
            <picture>
              <source
                media="(max-width: 520px)"
                srcSet="img/screenshot-vertical.png"
              />
              <img
                className="highlighted-img"
                id="screenshot"
                src="img/screenshot.png"
                alt="Program screenshot"
              />
            </picture>
            {/*<a className="artwork-author" target='_blank' href='https://twitter.com/null63596290'>Artwork by @breaddo</a>*/}
            <div className="buttons">
              <div className="download-buttons">
                <a href="/download" className="download-button">
                  Download now
                </a>
                <a
                  href="/blog/2023/05/30/1.1-release"
                  className="download-button"
                >
                  What's new?
                </a>
              </div>
              <div className="social-buttons">
                <SocialMedia
                  name="discord"
                  href="https://discord.gg/DwaXAuXVzv"
                  imgsrc="/img/Discord-Clyde.svg"
                />
                   <SocialMedia
                  name="forum"
                  href="https://forum.pixieditor.net"
                  imgsrc="/img/forum.svg"
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
        <div className="bullet-points" id="bullet-points">
          <BulletPoint text="Free" icon="icons/striked-dollar-sign.svg" />
          <BulletPoint text="Open source" icon="icons/github.svg" />
          <BulletPoint text="Fast" icon="icons/feather.svg" />
          <BulletPoint text="Easy to use" icon="icons/star.svg" />
        </div>
        <div className="features-container">
          <div className="features">
            <Feature
              icon="icons/layers.svg"
              title="Create, edit and organize layers"
              description={[
                "We think, that our layers system is quite nice to work with.",
                "You can create, edit and organize layers in a simple way, as you know it from other graphics editors.",
              ]}
              video="videos/Layers.webm"
            />

            <Feature
              icon="icons/transparency.svg"
              title="Color tools"
              description={[
                "We've built a tool that helps with adjusting darker and lighter color variations.",
                "Just select the brightness tool, pick the strength, and you're good to go.",
                "Our users really like this one.",
              ]}
              video="videos/Brightness.webm"
              align="right"
            />

            <Feature
              icon="icons/pen-tool.svg"
              title="Pixel-perfect tools."
              description={[
                "There are tools that will help you with pixel-perfect editing.",
                "Meet pixel-perfect pen mode. Smartly removes corners and doesn't ask questions.",
              ]}
              video="videos/Pixel-perfect.webm"
            />
            <Feature
              video="videos/Multiple-documents.webm"
              align="right"
              icon="icons/columns.svg"
              title="Multiple documents editing support"
              description={[
                "Edit documents side to side, create multiple columns, rows. Float windows and tabs.",
                "As flexible as you want. ",
              ]}
            />
            <h2 style={{ textAlign: "center" }}>And much more!</h2>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;
