import React from 'react';
import Layout from '@theme/Layout';

export default function youtube() {
  const queryParams = new URLSearchParams(window.location.search)

  const url = queryParams.get("url")
  const videoURL = "https://www.youtube-nocookie.com/embed/" + url

  console.log(videoURL)
    
  return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
          width: "560px",
          height: "315px",
          color: "black",
          backgroundImage: "url(../img/video-placeholder.png)"
        }}>
          <body style={{borderColor: 'red', padding: "10px"}}>
            <p>Beim Starten des Videos wird eine Verbindung mit YouTube hergestellt.
               Die bei YouTube geltenden Datenschutzbestimmungen können
                Sie <a href="https://policies.google.com/privacy?hl=de" target="_blank">HIER</a> einsehen.</p>
             <form action={videoURL} target="_self">
            <button style={{padding: "10px", border: "none", marginLeft: "37%"}} type="submit" name="start">Starte Video</button>
            </form>
        </body>
      </div>  
  );
}