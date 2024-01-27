import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Layout from "@theme/Layout";
import "../css/v2.css";
import "animate.css";
import CookieConsent from "react-cookie-consent";
import Lottie from "react-lottie";
import extensionsAnimation from "/static/animations/Extensions.json";
import nodesAnimation from "/static/animations/Nodes.json";
import animationsAnimation from "/static/animations/Animations.json";
import infiniteCanvasAnimation from "/static/animations/InfiniteCanvas.json";
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
            <div
              key={i}
              className="featurev2-description-item"
              dangerouslySetInnerHTML={{ __html: section }}
            ></div>
          ))}
        </div>
      </div>
      <div className="featurev2-media">
        <Lottie
          className="lottie"
          options={{
            loop: true,
            autoplay: true,
            animationData: props.lottie,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
        />
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

const Faq = (props) => {
  const [answer, setAnswer] = useState("");

  const toggleAnswer = () => {
    if (answer === "") {
      setAnswer("active");
    } else {
      setAnswer("");
    }
  };

  return (
    <div className="faq" onClick={toggleAnswer}>
      <div className="faq-question">{props.question}</div>
      <div
        className={answer === "active" ? "faq-answer" : "faq-answer collapsed"}
        dangerouslySetInnerHTML={{ __html: props.answer }}
      ></div>
    </div>
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

  submitForm = (e) => {
    e.preventDefault();
    let endPoint = "https://newsletter.pixieditor.net/api/public/subscription";
    let email = e.target[0].value;
    let data = {
      "email": email,
      "list_uuids": ["f9f70b85-6695-40f5-8ac7-e28a4f8b95ae"],
    };

    fetch(endPoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if(response.ok)
        {
          e.target[0].value = "";
          e.target[0].placeholder = "Success!";
          setTimeout(() => {
            e.target[0].placeholder = "Enter your email";
          }, 2000);
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
    if (ExecutionEnvironment.canUseDOM) {
      if (window.prompt("enter the bro code") !== "unicorn") {
        return <span>no</span>;
      } else {
        return (
          <Layout id="v2" title="PixiEditor 2.0 Waitlist">
            <div className="download-section">
              <div className="presentation-section">
                <h1 id="header" className="v2">
                  Universal 2D graphics platform - one to rule them all.
                </h1>
                <h2 id="subheader">
                  Are you tired of expensive tool suites, just to create
                  different types of graphics? <br />
                  Raster, vector, pixel art, animations, procedural art -
                  PixiEditor 2.0 got you covered,{" "}
                  <span className="highlight">for free.</span>
                </h2>
                <div className="buttons v2">
                  <div className="wishlist-input">
                    <form onSubmit={this.submitForm}>
                      <input type="email" placeholder="Enter your email" />
                      <button type="submit">Join Waitlist</button>
                    </form>
                  </div>
                  <div className="donate-buttons" style={{ marginTop: 70 }}>
                    <div className="donate-button">
                      <div className="donate-button-text">Support our work</div>
                      <div className="donate-options">
                        <a
                          href="https://opencollective.com/pixieditor/donate?interval=month&amount=1"
                          target="_blank"
                        >
                          <div className="donate-option first">1$</div>
                        </a>
                        <a
                          href="https://opencollective.com/pixieditor/donate?interval=month&amount=5"
                          target="_blank"
                        >
                          <div className="donate-option">5$</div>
                        </a>
                        <a
                          href="https://opencollective.com/pixieditor/donate?interval=month&amount=10"
                          target="_blank"
                        >
                          <div className="donate-option">10$</div>
                        </a>
                        <a
                          href="https://opencollective.com/pixieditor/donate?interval=month&amount=25"
                          target="_blank"
                        >
                          <div className="donate-option last">Other</div>
                        </a>
                      </div>
                    </div>
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
                    "And this is what core of PixiEditor 2.0 is all about, <span class='highlight'>extensions</span> made by users, for users.",
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
                  align="right" lottie={animationsAnimation}
                />
                <Feature
                  icon="icons/nodes.svg"
                  title="Introducing Layer Nodes, our take on procedural art."
                  description={[
                    "That's right, if you like to play around and connect some nodes, you'll find yourself at home.",
                    "Layer nodes will allow you to <span class='highlight'>create procedural art</span>, animations, vfx and whatever your imagination can come up with.",
                  ]}
                  lottie={nodesAnimation}
                />
                <Feature
                  video="videos/Multiple-documents.webm"
                  align="right"
                  icon="icons/columns.svg"
                  title="Infinite canvas mode"
                  lottie={infiniteCanvasAnimation}
                  description={[
                    "No more restrictions - create sprite atlases, artboards and use it as a sandbox.",
                    "Why stop at sandbox, a whole desert!",
                    "Desert is kinda empty though, your canvas won't, maybe forest then? There are a lot of things there, like frogs and trees.",
                    "Anyway, you get the point.",
                  ]}
                />

                <div className="buttons v2">
                  <div className="wishlist-input">
                    <form onSubmit={this.submitForm}>
                      <input type="email" placeholder="Enter your email" />
                      <button type="submit">Join Waitlist</button>
                    </form>
                  </div>
                  <div className="donate-buttons">
                    <div className="donate-button">
                      <div className="donate-button-text">Support our work</div>
                      <div className="donate-options">
                        <a
                          href="https://opencollective.com/pixieditor/donate?interval=month&amount=1"
                          target="_blank"
                        >
                          <div className="donate-option first">1$</div>
                        </a>
                        <a
                          href="https://opencollective.com/pixieditor/donate?interval=month&amount=5"
                          target="_blank"
                        >
                          <div className="donate-option">5$</div>
                        </a>
                        <a
                          href="https://opencollective.com/pixieditor/donate?interval=month&amount=10"
                          target="_blank"
                        >
                          <div className="donate-option">10$</div>
                        </a>
                        <a
                          href="https://opencollective.com/pixieditor/donate?interval=month&amount=25"
                          target="_blank"
                        >
                          <div className="donate-option last">Other</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-section">
              <h1 className="faq-header">FAQ</h1>
              <div className="faq-container">
                <Faq
                  question="Will PixiEditor 2.0 be a different product than PixiEditor?"
                  answer="No, PixiEditor 2.0 will be a major free update for PixiEditor."
                />

                <Faq
                  question="PixiEditor 1.0 is a pixel art focused editor, will version 2.0 lose pixel art tooling?"
                  answer="Not at all! New update will include all tooling that was available in previous versions. You'll be able to choose pixel-art tooling and just enjoy new features.
                <br/><br/> Besides built-in pixel art tools, you'll be able to install new community-made extensions, that will enhance your pixel-art drawing experience.
                We believe, that making PixiEditor more universal in the new update will broaden the range of users who use it, which might create a positive feedback loop:
                more users -> more tooling extensions -> more users."
                />

                <Faq
                  question="What platforms will PixiEditor 2.0 be available on?"
                  answer="We plan to release PixiEditor 2.0 for Windows, Linux and MacOS. We are also experimenting with web version, however this is not our target for 2.0 release."
                />

                <Faq
                  question="Will PixiEditor 2.0 update be free?"
                  answer="Yes, just like every previous and future update. No hidden costs."
                />

                <Faq
                  question="Will PixiEditor 2.0 be open-source?"
                  answer="Yes, core PixiEditor app will remain open-source under LGPL license.
                <br/><br/> However, due to the nature of PixiEditor 2.0, we might create official extensions that will not be open-source."
                />

                <Faq
                  question="What will be the release date?"
                  answer="We don't have a specific date yet. However, we plan to release a few beta versions in the upcoming months, with different set of features. 
                <br/>We'll be sending out emails to everyone who joined the waitlist, when new beta versions are released, so sign in to be as early as possible!
                <br/><br/> Please note, that beta might not be published for all platforms at once. At first, we aim to deliver PixiEditor 2.0 for Windows and Linux.
                MacOS build might be delayed, because we currently don't have any MacOS device and we expect porting process to take more time than Windows and Linux."
                />

                <Faq
                  question="I am a developer and I want to create an extension for PixiEditor 2.0, how and when can I do that?"
                  answer="Our extensions API is still very work in progress and might drastically change each day, however during beta releases, 
                we'll create proper docs and notify you with resources you need. We want to introduce the API as soon as possible to you, so you can start creating 
                awesome things before official 2.0 release.
                <br/><br/> Make sure to join our <a href='https://discord.gg/DwaXAuXVzv'>Discord</a> for latest info!"
                />

                <Faq
                  question="What emails will I receive after joining the waitlist?"
                  answer="We plan to send out emails with invitations to beta versions, as well as marketing emails with updates, interesting facts about PixiEditor 2.0, 
                development progress and tutorials. We promise not to spam your inbox, we'll try to keep our newsletter interesting and as high quality as possible!"
                />
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
  }
}

export default V2WishlistRegistration;
