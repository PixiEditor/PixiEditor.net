const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

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

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

      return <div>
        <div className="download-section">
          <h1 className="animate__animated animate__fadeInUp">A beautiful, lighweight pixel-art editor packed in eye-friendly
          dark theme.</h1>
          <picture>
            <source media="(max-width: 800px)" srcSet="screenshotMini.png" />
            <img className="animate__animated animate__fadeInUp" id="screenshot" src="screenshot.png"
              alt="Program screenshot" />
          </picture>
          <div className="download-buttons animate__animated animate__fadeInUp">
            <a href="" className="download-button">Download now</a>
            <p title="PixiEditor is currently only available for Windows">Windows v0.2 beta</p>
          </div>
        </div>
        <div className="bullet-points-container">
        <GridBlock
          align="center"
          layout="threeColumn"
          className="bullet-points"
          contents={[
            {
              title: `Open Source`,
              image: siteConfig.baseUrl + 'icons/github.svg',
              imageAlt: 'Github',
              imageAlign: "top"
            },
            {
              title: 'Lightweight',
              image: siteConfig.baseUrl + 'icons/feather.svg',
              imageAlign: "top"
            },
            {
              title: 'Easy to use',
              image: siteConfig.baseUrl + 'icons/star.svg',
              imageAlign: "top"
            },
          ]}
        />     
        </div> 
        <div className="features-container">
          <div className="features">
            <Feature icon="icons/layers.svg" title="Create, edit and organize layers"
            description={["With our advanced layer system, you can easily organize, edit and work with layers. Delete, group, rename, merge and much more!",
            "We know how improtant organization is, that's why we designed them, so you can easily locate your layers with live previews."]} gif="gifs/layers.gif"/>
            
            <Feature icon="icons/transparency.svg" 
            title="Full RGBA + layer opacity transparency support" 
            description={
              ["With layer opacity and color alpha, you can combine muliple transparency levels and work with them easily.", 
              "You can set individual pixels alpha, or apply whole layer using opacity."]} 
            gif="gifs/RGBA.gif"
            align="right"/>

            <Feature icon="icons/pen-tool.svg" 
            title=" Numerous pixel-perfect tools." 
            description={
              ["Draw like a pro, using our pixel-perfect pen, which removes unnecessary pixels, so your artwork can be done faster and better.", 
              "Bucket, line, ellipse, rectangle, all ready for fast and flawless editing."]} 
            gif="gifs/outline.gif" />            
          </div>
        </div>
      </div>
  }
}

module.exports = Index;
