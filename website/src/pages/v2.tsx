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
import Head from "@docusaurus/Head";

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

const WishlistForm = (props) => {
  const submitForm = (e) => {
    e.preventDefault();
    let endPoint = "https://newsletter.pixieditor.net/api/public/subscription";
    let email = e.target[0].value;
    let data = {
      email: email,
      list_uuids: ["f9f70b85-6695-40f5-8ac7-e28a4f8b95ae"],
    };

    fetch(endPoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          e.target[0].value = "";
          e.target[2].checked = false;
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

  return (
    <div className="wishlist-input">
      <form onSubmit={submitForm}>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Join Waitlist</button>
        <div>
          <input type="checkbox" id={props.id} value="1" required />
          <label className="secondary-text" htmlFor={props.id}>
            By signing up, you agree to PixiEditor's{" "}
            <a href="/docs/privacy-policy" target="_blank">
              privacy policy.
            </a>
          </label>
          <br />
          <span className="secondary-text">
            Receive newsletter with PixiEditor news, tutorials, tips and product
            releases.
          </span>
        </div>
      </form>
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
         <Head>
          <meta property="og:image" content="https://pixieditor.net/img/ogpreviews/v2.png" />
          <meta name="twitter:image" content="https://pixieditor.net/img/ogpreviews/v2.png" />
          <meta property="og:description" content="Join the waitlist for PixiEditor 2.0 - Universal Graphics Platform" />
          <meta name="twitter:description" content="Join the waitlist for PixiEditor 2.0 - Universal Graphics Platform" />
        </Head>
        <div className="download-section">
          <div className="presentation-section">
            <h1 id="header" className="v2">
              Universal 2D graphics platform - one to rule them all.
            </h1>
            <h2 id="subheader">
              Are you tired of relying on expensive tool suites just to create
              different types of graphics? <br />
              Raster, vector, pixel art, animations, procedural art - PixiEditor
              2.0 got you covered, <span className="highlight">for free.</span>
            </h2>
            <iframe
              width="560"
              height="315"
              className="teaser"
              src="https://www.youtube.com/embed/-svVjbJtj0k?si=v3MkQdYXr7n_9ppw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="buttons v2">
              <a className="download-button" style={{width: "auto", marginBottom: 40, paddingLeft: 45, paddingRight: 45}} href="/docs/open-beta">Open beta available now</a>
              <WishlistForm id="agree1" />
              <div className="donate-btn" style={{ marginTop: 35 }}>
                <div className="btn-label">Support our work</div>
                <a className="btn-text big" href="/donate">
                  Donate ❤
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
        <div className="featuresv2-container">
          <div className="featuresv2">
            <Feature
              icon="icons/download-cloud.svg"
              title="Install extensions to make PixiEditor truly yours."
              description={[
                "We believe that a strong community is what makes software great and ensures its longevity.",
                "And this is what the core of PixiEditor 2.0 is all about, <span class='highlight'>extensions</span> made by users, for users.",
                "Version 2.0 will not be limited to any specific type of graphics, but will be a <span class='highlight'>universal tool</span> for all of them.",
                "Installing and browsing extensions will be as easy as a single click.",
              ]}
              lottie={extensionsAnimation}
              align="left"
            />
            <Feature
              icon="icons/play.svg"
              title="Animations"
              description={[
                "A feature that was the most wanted. Finally here.",
                "You'll be able to <span class='highlight'>create any kind of animations.</span> From simple frame-by-frame, to complex keyframe animations.",
                "As extensible, as everything else.",
              ]}
              align="right"
              lottie={animationsAnimation}
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
              align="right"
              icon="icons/zoom-in.svg"
              title="Infinite canvas mode"
              lottie={infiniteCanvasAnimation}
              description={[
                "No more restrictions - create <span class='highlight'>sprite atlases</span>, <span class='highlight'>artboards</span> and use the canvas as <span class='highlight'>a sandbox.</span>",
                "Why stop at sandbox, a whole desert!",
                "Desert is kinda empty though, your canvas won't be, maybe forest then? There are a lot of things there, like frogs and trees.",
                "Anyway, you get the point.",
              ]}
            />

            <div className="buttons v2 bottom">
              <WishlistForm id="agree2" />
              <div className="donate-btn" style={{ marginTop: 70 }}>
                <div className="btn-label">Support our work</div>
                <a className="btn-text big" href="/donate">
                  Donate ❤
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-section">
          <h1 className="faq-header">FAQ</h1>
          <div className="faq-container">
            <Faq
              question="Will PixiEditor 2.0 be a different product than PixiEditor?"
              answer="No, PixiEditor 2.0 will be a free major update for PixiEditor."
            />

            <Faq
              question="PixiEditor 1.0 is a pixel art focused editor, will version 2.0 lose pixel art tooling?"
              answer="Not at all! New update will include all tooling that was available in previous versions. You'll be able to choose pixel-art tooling and just enjoy new features.
                <br/><br/> Besides built-in pixel art tools, you'll be able to install new community-made extensions that will enhance your pixel-art drawing experience.
                We believe that making PixiEditor more universal in the new update will broaden the range of users who use it. This, in turn, might create a positive feedback loop: more users -> more tooling extensions -> more users."
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
              answer="We don't have a specific date yet. However, we plan to release a few beta versions in the upcoming months, with different sets of features. 
                <br/>We'll be sending out emails to everyone who joined the waitlist, when new beta versions are released, so sign in to be as early as possible!
                <br/><br/> Please note, that beta might not be published for all platforms at once. At first, we aim to deliver PixiEditor 2.0 for Windows and Linux.
                MacOS build might be delayed, because we currently don't have any MacOS device and we expect porting process to take more time than Windows and Linux."
            />

            <Faq
              question="I am a developer and I want to create an extension for PixiEditor 2.0, how and when can I do that?"
              answer="Our extensions API is still very much a work-in-progress and might drastically change each day. However, during beta releases, 
                we'll create proper docs and notify you with resources you need. We want to introduce the API to you as soon as possible, so you can start creating 
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

export default V2WishlistRegistration;
