import React from "react";
import Layout from '@theme/Layout';
import "../css/roadmap.css"

function tsw(props) {


var password = "szczęść wrząsęk";

if(prompt("Enter password:", "") !== password)
{ 
    alert('Wrong password!');
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; 
    return null;
}
else{
    return (
        <Layout title="Tsw">
                <form
                        action="https://auth.pixieditor.net/content/createCheckoutSession"
                        method="POST"
                        id="purchaseForm"
                    >
                        <input
                            type="email"
                            name="Email"
                            required
                            placeholder="you@example.com"
                        />
                        <input
                            type="hidden"
                            name="ProductId"
                            value="PixiEditor.FoundersPack"
                        />
                        <button
                            type="submit"
                        >
                            Buy Now
                        </button>
                    </form>
        </Layout>);
}
}

export default tsw;