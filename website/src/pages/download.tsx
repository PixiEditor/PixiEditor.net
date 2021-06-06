import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import "../css/download.css";

const displayVideos = ["QKnXBUY0Pqk", "bzC-wy6HCB8"]

function download(props) {

    const [releases, setReleases] = useState([]);
    const [displayVideo, setDisplayVideo] = useState("");


    useEffect(() => {
        fetch("https://api.github.com/repos/PixiEditor/PixiEditor/releases")
            .then(resp => resp.json()).then(json => {
                setReleases(json[0].assets);                
            });            
            const videoIndex = Math.round(Math.random() * (displayVideos.length - 1));
            setDisplayVideo(displayVideos[videoIndex]);
    }, []);


    return (
        <Layout title="Download">
            <div className="download">
                <h2>You are one step away from downloading PixiEditor!</h2>
                <a href='//www.microsoft.com/store/apps/9NDDRHS8PBRN?cid=storebadge&ocid=badge' target="_blank"><img src='https://developer.microsoft.com/store/badges/images/English_get-it-from-MS.png' alt='Microsoft Store Badge' /></a>
                <span className="or-separator">Or</span>
                <a href={releases && releases.length > 0 ? releases.find((val, index) => val.name.includes("x64.exe")).browser_download_url : ""} className="download-button">Download now</a>
                <a href={releases && releases.length > 0 ? releases.find((val, index) => val.name.includes("x86.exe")).browser_download_url : ""} className="download-button">x86</a>
                <div className="waiting-text">
                    While you are waiting...
                </div>
                <div className="waiting-stuff">
                <div className="discord">
                    <img src="img/Discord-Logo+Wordmark-White.svg"></img>
                    <a className="discord-button" href="https://discord.gg/qSRMYmq" target="_blank">Join</a>
                </div>
                <iframe width="560" height="315" src={"https://www.youtube-nocookie.com/embed/" + displayVideo} title="PixiEditor video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                </div>
            </div>
        </Layout>);
}

export default download;