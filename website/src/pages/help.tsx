import React from 'react';
import Layout from '@theme/Layout';

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
    <Layout title="Help">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <p>This project is maintained by a dedicated group of people.</p>
        </div>
    </Layout>
  );
}

export default Help;
