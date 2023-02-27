import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import "../css/style.css";
import "animate.css"
import CookieConsent from "react-cookie-consent";
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const Feature = (props) => {
  return <div className={props.align === "right" ? "feature right" : "feature"}>
    <div className="featrue-col">
      <div className="feature-heading">
        <div className="feature-icon">
          <img src={props.icon} alt='' />
        </div>
        <div className="feature-title">
          {props.title}
        </div>
      </div>
      <div className="feature-description">
        {props.description.map((section, i) => <div key={i} className="feature-description-item">{section}</div>)}
      </div>
    </div>
    <div className="feature-media">
        <video src={props.video} autoPlay loop muted></video>
    </div>
  </div>
}

const BulletPoint = (props) => {
  
  return <div className="bullet-point">
    <div className="bullet-point-icon">
      <img src={props.icon} alt="" />
    </div>
    <div className="bullet-point-text">
      {props.text}
      </div>
  </div>
} 


class Index extends React.Component {

  onScroll = () => {

    if (ExecutionEnvironment.canUseDOM) {
    if(document.documentElement.scrollTop > 100) 
    {
      window.removeEventListener('scroll', this.onScroll);
      return;
    }

    window.removeEventListener('scroll', this.onScroll);

    this.requestScroll();
  }
  }

  requestScroll = () => {
    if (ExecutionEnvironment.canUseDOM) {
    var header = document.querySelector("#header");
    var screenshot = document.querySelector(".highlighted-img");
    var button = document.querySelector(".download-button");
    var bulletPoints = document.querySelector(".bullet-points");

    window.scrollTo({top: header?.offsetTop - 110, behavior: "smooth"});

    setTimeout(() => {
    header?.classList.add("animate__animated");
    header?.classList.add("animate__fadeInUpBig");

    setTimeout(() => {
      screenshot?.classList.add("animate__animated");
      screenshot?.classList.add("animate__fadeInUpBig");

      setTimeout(() => {
        button?.classList.add("animate__animated");
        button?.classList.add("animate__fadeInUpBig");

        setTimeout(() => {
          bulletPoints?.classList.add("animate__animated");
          bulletPoints?.classList.add("animate__fadeInUpBig");
        }, 100);
      }, 100);
    }, 100);

    }, 25);
  }
  }

  constructor(props)
  {
    super(props);

    if (ExecutionEnvironment.canUseDOM) {
    window.addEventListener('scroll', this.onScroll, { passive: true});
    }
  }

  

  render() {
    return <Layout id="mainPage" title="Main page">
      <div className="download-section">
      <div className='super-header'>
        <h2 className='animate-charcter'>PixiEditor 1.0 is available!</h2>
        <div style={{height: 100}}>
      <img src='icons/arrow-down.svg' alt='' onClick={this.requestScroll} className='arrow-down' style={{color: "red", cursor: "pointer"}}/>
      </div>
      </div>
        <h1 id='header'>A beautiful, fast pixel-art editor packed in an eye-friendly
          dark theme.</h1>
          <img className="highlighted-img" id="screenshot" src="screenshot.png"
            alt="Program screenshot" />
        <div className="download-buttons">
          <a href="/download" className="download-button">Download now</a>
        </div>
      </div>
      <div className="bullet-points" id='bullet-points'>
        <BulletPoint text="Open source" icon="icons/github.svg"/>
        <BulletPoint text="Fast" icon="icons/feather.svg"/>
       <BulletPoint text="Easy to use" icon="icons/star.svg"/>
      </div>
      <div className="features-container">
        <div className="features">
          <Feature icon="icons/layers.svg" title="Create, edit and organize layers"
            description={["We think, that our layers system is quite nice to work with.",
              "You can create, edit and organize layers in a simple way, as you know it from other graphics editors."]} video="videos/Layers.mkv" />

          <Feature icon="icons/transparency.svg"
            title="Color tools"
            description={
              ["We've built a tool that helps with adjusting darker and lighter color variations.",
                "Just select the brightness tool, pick the strength, and you're good to go.",
              "Our users really like this one."]}
            video="videos/Brightness.mkv"
            align="right" />

          <Feature icon="icons/pen-tool.svg"
            title="Pixel-perfect tools."
            description={
              ["There are tools that will help you with pixel-perfect editing.",
                "Meet pixel-perfect pen mode. Smartly removes corners and doesn't ask questions."]}
            video="videos/Pixel-perfect.mkv" />
            <Feature video="videos/Multiple-documents.mkv" align="right" icon="icons/columns.svg" title="Multiple documents editing support" 
            description={["Edit documents side to side, create multiple columns, rows. Float windows and tabs.", 
            "We don't know if you'll use it, but we've added it anyway."]}/>         
        <h2 style={{textAlign: "center"}}>And much more!</h2>
      
        </div>
      </div>
      <CookieConsent
  location="bottom"
  style={{ background: "#2c2c2c" }}
  cookieName="cookieConsent"
  buttonStyle={{ background: "#b91f3e", color:"white", fontSize: "13px" }}
  expires={150}>
  This website uses cookies to enhance the user experience.{" "}

</CookieConsent>
    </Layout>
  }
}

export default Index;
