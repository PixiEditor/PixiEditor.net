import React from 'react';
import Layout from '@theme/Layout';
import "../css/style.css";

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
    <div className="feature-gif">
      <img src={props.gif} />
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
  render() {
    return <Layout id="mainPage" title="Main page">
      <div className="download-section">
        <h1 className="animate__animated animate__fadeInUp">A beautiful, lighweight pixel-art editor packed in eye-friendly
          dark theme.</h1>
          <img className="animate__animated animate__fadeInUp" id="screenshot" src="screenshot.png"
            alt="Program screenshot" />
        <div className="download-buttons animate__animated animate__fadeInUp">
          <a href="/download" className="download-button">Download now</a>
        </div>
      </div>
      <div className="bullet-points">
        <BulletPoint text="Open source" icon="icons/github.svg"/>
        <BulletPoint text="Lightweight" icon="icons/feather.svg"/>
       <BulletPoint text="Easy to use" icon="icons/star.svg"/>
      </div>
      <div className="features-container">
        <div className="features">
          <Feature icon="icons/layers.svg" title="Create, edit and organize layers"
            description={["With our advanced layer system, you can easily organize, edit and work with layers. Delete, group, rename, merge and much more!",
              "We know how improtant organization is, that's why we designed them, so you can easily locate your layers with live previews."]} gif="gifs/layers.gif" />

          <Feature icon="icons/transparency.svg"
            title="Full RGBA + layer opacity transparency support"
            description={
              ["With layer opacity and color alpha, you can combine muliple transparency levels and work with them easily.",
                "You can set individual pixels alpha, or apply whole layer using opacity."]}
            gif="gifs/RGBA.gif"
            align="right" />

          <Feature icon="icons/pen-tool.svg"
            title=" Numerous pixel-perfect tools."
            description={
              ["Draw like a pro, using our pixel-perfect pen, which removes unnecessary pixels, so your artwork can be done faster and better.",
                "Bucket, line, ellipse, rectangle, all ready for fast and flawless editing."]}
            gif="gifs/outline.gif" />
            <Feature gif="gifs/Docking.gif" align="right" icon="icons/columns.svg" title="Multiple documents editing support" 
            description={["Edit documents side to side, create multiple columns, rows. Float windows and tabs.", 
            "You can organize layout anyway you want, without disturbing your work."]}/>         
        </div>
      </div>
    </Layout>
  }
}

export default Index;
