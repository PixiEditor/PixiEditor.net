/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the [documentation on this site.](${docUrl(
        'introduction.html',
      )})`,
      title: 'Browse Docs',
      image: 'img/book.svg',
      imageAlign: 'bottom',
      imageLink: `${docUrl("introduction.html")}`
    },
    {
      content: `Ask questions about the documentation and project on our [Discord.](https://discord.gg/qSRMYmq)`,
      title: 'Join the community',
      image: 'img/Discord-Logo-White.svg',
      imageAlign: 'bottom',
      imageLink: "https://discord.gg/qSRMYmq"
    },
    {
      title: 'Contact us',
      content: "Send us email with your question pixieditorproject@gmail.com",
      image: 'img/mail.svg',
      imageAlign: 'bottom',
      imageLink: "mailto:pixieditorproject@gmail.com"
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <p>This project is maintained by a dedicated group of people.</p>
          <GridBlock className="helpColumn" contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
