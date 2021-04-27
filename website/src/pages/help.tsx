import React from 'react';
import Layout from '@theme/Layout';
import '../css/help.css';

interface SupportLinkItem{
  content: string;
  title: string;
  image: string;
  imageLink: string;
}

interface SupportItemsProps {
  items: Array<SupportLinkItem>;
}

const SupportItems: React.FC<SupportItemsProps> = (props) => {
  return (
    <div className="supportItemsGrid">
      {props.items.map((val, i) => <SupportItem key={i} content={val.content} title={val.title} image={val.image}
      imageLink={val.imageLink}/>)}
    </div>
  )
}

const SupportItem: React.FC<SupportLinkItem> = (props) => {
  return (
    <div className="supportItem">
    <div className="supportItem-title">
      {props.title}
    </div>
    <div className="supportItem-image">
      <a href={props.imageLink}><img src={props.image} alt=""/></a>
    </div>
    <div className="supportItem-content">
      {props.content}
    </div>
    </div>
  )
}

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
      imageLink: `${docUrl("introduction.html")}`
    },
    {
      content: `Ask questions about the documentation and project on our [Discord.](https://discord.gg/qSRMYmq)`,
      title: 'Join the community',
      image: 'img/Discord-Logo-White.svg',
      imageLink: "https://discord.gg/qSRMYmq"
    },
    {
      title: 'Contact us',
      content: "Send us email with your question pixieditorproject@gmail.com",
      image: 'img/mail.svg',
      imageLink: "mailto:pixieditorproject@gmail.com"
    },
  ];

  return (
    <Layout title="Help">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
        </div>
          <SupportItems items={supportLinks}/>
    </Layout>
  );
}

export default Help;
