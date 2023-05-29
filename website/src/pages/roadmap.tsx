import React from "react";
import Layout from '@theme/Layout';
import "../css/roadmap.css"

function roadmap(props) {
    return (
        <Layout title="Roadmap">
            <h1 className='roadmap-title center-text'>Roadmap</h1>
            <p className='last-changed center-text'>(As of May 2023)</p>
            <div className='roadmap-container'>
                <div className='timeline'></div>
                <div className="roadmap">
                    <div>
                        <h1>V1.0</h1>
                        <p>We're here</p>
                    </div>
                    <div>
                        <h1>V1.1</h1>
                        <ul>
                            <li>Localization</li>
                            <li>More palette formats</li>
                        </ul>
                    </div>
                    <div>
                        <h1>V2.0</h1>
                        <ul>
                            <li>Port to AvaloniaUI</li>
                            <li>Cross-platform Mac/Linux/Windows</li>
                        </ul>
                    </div>
                    <div>
                        <h1>V3.0</h1>
                        <ul>
                            <li>Animations</li>
                            <li>Extensions</li>
                            <li>Tile drawing</li>
                            <li>More tools</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='center-text underline'><a href='https://discord.gg/qSRMYmq'>Join our Discord to get the lastest news</a></p>
        </Layout>);
}

export default roadmap;