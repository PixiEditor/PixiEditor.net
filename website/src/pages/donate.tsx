import Layout from "@theme/Layout";
import React, { useEffect, useState } from "react";
import "../css/donation.css";
import TogglePicker from "../components/togglePicker";

const DonateWidget = (props) => {
  const [pickedOption, setPickedOption] = useState(0);

  const optionSelected = (option) => {
    setPickedOption(option);
  };

  /*<TogglePicker
label1="Monthly"
label2="One-time"
onOptionSelected={optionSelected}
/>
{pickedOption === 0 ? (
<div
className="monthly-donate-container">
    <div dangerouslySetInnerHTML={{
  __html: `
  <stripe-pricing-table pricing-table-id="prctbl_1Ojhz5HZ5wTFDpNNiRaaiibm"
  publishable-key="pk_live_51OjM1gHZ5wTFDpNNLAmmwJ4nTbsKL2PWgx85DKCY1zamApjynsVCvOtw1ga7qoGCjKoztXrkEmyJh47TRMe1a7E7009AD3hvhw">
  </stripe-pricing-table>`,
}}></div>
</div>) : (
<div className="one-time-donate-container">
<div
dangerouslySetInnerHTML={{
  __html: `<script async
  src="https://js.stripe.com/v3/buy-button.js">
</script>

<stripe-buy-button
  buy-button-id="buy_btn_1OmczlHZ5wTFDpNNdKZ9F4vf"
  publishable-key="pk_live_51OjM1gHZ5wTFDpNNLAmmwJ4nTbsKL2PWgx85DKCY1zamApjynsVCvOtw1ga7qoGCjKoztXrkEmyJh47TRMe1a7E7009AD3hvhw"
>
</stripe-buy-button>`}}/>
  <h3>Or</h3>
  <div>
    <iframe src="https://store.steampowered.com/widget/2435860/" width="646" height="190"></iframe>
  </div>
</div>
  
  )}*/

  return (
    <div className="donate-buttons">
      <div className="one-time-donate-container">
        <div>
          <iframe
            src="https://store.steampowered.com/widget/2435860/"
            width="646"
            height="190"
          ></iframe>
           <div className="donate-btn-split" style={{ marginTop: 35 }}>
                <a className="btn-text big donate-btn-split-general" href="https://opencollective.com/pixieditor" target="_blank">
                  Donate on OpenCollective
                </a>
                <a className="donate-btn-split-option" href="https://opencollective.com/pixieditor/contribute/silver-tier-81980/checkout?interval=month&amount=5&contributeAs=me" target="_blank">5$</a>
                <a className="donate-btn-split-option" href="https://opencollective.com/pixieditor/contribute/gold-tier-81981/checkout?interval=month&amount=10&contributeAs=me" target="_blank">10$</a>
                <a className="donate-btn-split-option" href="https://opencollective.com/pixieditor/contribute/diamond-tier-81982/checkout?interval=month&amount=25&contributeAs=me" target="_blank">25$</a>
            </div>
        </div>
      </div>
    </div>
  );
};

class Donate extends React.Component {
  componentDidMount(): void {
    if (
      document.getElementById("stripe-js") ||
      document.getElementById("stripe-js-2")
    ) {
      return;
    }

    const script = document.createElement("script");
    script.id = "stripe-js";
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.id = "stripe-js-2";
    script2.src = "https://js.stripe.com/v3/buy-button.js";
    script2.async = true;
    document.body.appendChild(script2);
  }
  render() {
    return (
      <Layout id="donation" title="Donate">
        <div className="donation-header">
          <h1>Support the development of PixiEditor</h1>
        </div>
        <DonateWidget />
      </Layout>
    );
  }
}

export default Donate;
