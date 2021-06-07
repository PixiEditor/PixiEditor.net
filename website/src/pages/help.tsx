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
    <div className="supportItem-content" dangerouslySetInnerHTML={{__html: props.content}}>
    </div>
    </div>
  )
}

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : 'docs/'}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the <a href="${docUrl('introduction')}">documentation on this site.</a>`,
      title: 'Browse Docs',
      image: 'img/book.svg',
      imageLink: `${docUrl("introduction")}`
    },
    {
      content: `Ask questions about the documentation and project on our <a href="https://discord.gg/qSRMYmq">Discord.</a>`,
      title: 'Join the community',
      image: 'img/Discord-Logo-White.svg',
      imageLink: "https://discord.gg/qSRMYmq"
    },
    {
      title: 'Contact us',
      content: `Send us email with your question <a href="mailto:info@pixieditor.net">info@pixieditor.net</a>`,
      image: 'img/mail.svg',
      imageLink: "mailto:info@pixieditor.net"
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
