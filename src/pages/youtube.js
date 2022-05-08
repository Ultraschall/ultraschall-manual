import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function youtube() {
    
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
    {()  => {
      
      const queryParams = new URLSearchParams(window.location.search)
      const url = queryParams.get("url")
      const videoURL = "https://www.youtube-nocookie.com/embed/" + url
      console.log(videoURL)
    
      // check if video url is not null, else show an error message
      if(url != null) {
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
              }}
              >
              <div style={{padding: '10px'}}>
                <Translate id="youtube.info"
                            description="privacy info">
                    <p>Beim Starten des Videos wird eine Verbindung mit YouTube hergestellt.
                    Die bei YouTube geltenden Datenschutzbestimmungen können
                      Sie <a href="https://policies.google.com/privacy?hl=de" target="_blank">HIER</a> einsehen.</p>
                  </Translate>
                <form action={videoURL} target="_self">
                <button style={{padding: '10px', border: "none", marginLeft: '37%'}} type="submit" name="start">
                  <Translate id="youtube.play" description="play button">
                  Starte Video</Translate>
                </button>
                </form>
              </div>
           </div>  
        )
      } else {
        return (
          <div>
            ERROR - no video URL
          </div>
        )
      }
    
      }
    }
    </BrowserOnly>
  );
} 