import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Translate, {translate} from '@docusaurus/Translate';

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
                textAlign: 'center',
                alignItems: 'center',
                fontSize: '20px',
                width: "560px",
                height: "315px",
                color: "black",
                backgroundImage: "url(../img/video-placeholder.png)"
              }}
              >
              <div style={{padding: '10px'}}>
                      <p> 
                      <Translate id="youtube.info_1"
                              description="privacy info one"> 
                              Externen Inhalt von YouTube laden?  
                      </Translate>
                      <br></br>                      
                      <a href="https://policies.google.com/privacy?hl=de" target="_blank">
                        <Translate id="youtube.info_2" description="privacy info two"> 
                        Datenschutz bei YouTube
                        </Translate>
                      </a> 
                      <br></br>          
                    </p>
                 
                <form action={videoURL} target="_self">
                <button style={{padding: '10px', border: "none", backgroundColor: '#FFD93E', color: "black"}} type="submit" name="start">
                  <Translate id="youtube.play" description="play button">
                  Starte Video
                  </Translate>
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