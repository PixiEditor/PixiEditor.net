const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

      return <div>
        <div class="download-section">

          <h1 class="animate__animated animate__fadeInUp">A beautiful, lighweight pixel-art editor packed in eye-friendly
          dark theme.</h1>
          <picture>
            <source media="(max-width: 800px)" srcset="screenshotMini.png" />
            <img class="animate__animated animate__fadeInUp" id="screenshot" src="screenshot.png"
              alt="Program screenshot" />
          </picture>
          <div class="download-buttons animate__animated animate__fadeInUp">
            <a href="" class="download-button">Download now</a>
            <p title="PixiEditor is currently only available for Windows">Windows v0.2 beta</p>
          </div>
        </div>
        <div class="bullet-points">
          <div class="bullet-point">
            <div class="bullet-point-icon">
              <img src="icons/github.svg" alt />
            </div>
            <div class="bullet-point-text">
              Open source
          </div>
          </div>
          <div class="bullet-point">
            <div class="bullet-point-icon">
              <img src="icons/feather.svg" alt />
            </div>
            <div class="bullet-point-text">
              Lightweight
          </div>
          </div>
          <div class="bullet-point">
            <div class="bullet-point-icon">
              <img src="icons/star.svg" alt />
            </div>
            <div class="bullet-point-text">
              Easy to use
          </div>
          </div>
        </div>
        <div class="features-container">
          <div class="features">
            <div class="feature">
              <div class="featrue-col">
                <div class="feature-heading">
                  <div class="feature-icon">
                    <img src="icons/layers.svg" alt />
                  </div>
                  <div class="feature-title">
                    Create, edit and organize layers
                      </div>
                </div>
                <div class="feature-description">
                  With our advanced layer system, you can easily organize, edit and work with layers.
                  Delete, group, rename, merge, multi-select support and much more!
                  </div>
              </div>
              <div class="feature-gif">
                <img src="gifs/layers.gif" />
              </div>
            </div>
            <div class="feature right">
              <div class="featrue-col">
                <div class="feature-heading">
                  <div class="feature-icon">
                    <img src="icons/transparency.svg" alt />
                  </div>
                  <div class="feature-title">
                    Full RGBA + layer opacity transparency support
                      </div>
                </div>
                <div class="feature-description">
                  With layer opacity and color alpha, you can combine muliple transparency levels and work with
                      them easily. <br /> <br /> You can set individual pixels alpha, or apply whole layer using opacity.
                  </div>
              </div>
              <div class="feature-gif">
                <img src="gifs/RGBA.gif" />
              </div>
            </div>
            <div class="feature">
              <div class="featrue-col">
                <div class="feature-heading">
                  <div class="feature-icon">
                    <img src="icons/pen-tool.svg" alt />
                  </div>
                  <div class="feature-title">
                    Numerous pixel-perfect tools.
                      </div>
                </div>
                <div class="feature-description">
                  Draw like a pro, using our pixel-perfect pen, which removes unnecessary pixels,
                  so your artwork can be done faster and better.
                      <br /> <br />
                      Bucket, line, ellipse, rectangle, all ready for fast and flawless editing.
                  </div>
              </div>
              <div class="feature-gif">
                <img src="gifs/outline.gif" />
              </div>
            </div>
          </div>
        </div>
      </div>
  }
}

module.exports = Index;
