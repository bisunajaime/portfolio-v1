import React from 'react';
import Main from './Main'
import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect, useState } from 'react'
import data from './assets/content/content.json'
import { CircularProgressbar } from 'react-circular-progressbar';

function App() {
  const [imgsLoaded, setImgsLoaded] = useState(true)
  const [percent, setPercent] = useState(0)

  // useEffect(() => {
  //   const loadImage = image => {
  //     return new Promise((resolve, reject) => {
  //       const loadImg = new Image()
  //       loadImg.src = image
  //       loadImage.key = image
  //       // wait 2 seconds to simulate loading time
  //       loadImg.onload = () =>
  //         resolve(image.url)
  //       loadImg.onerror = err => reject(err)
  //     })
  //   }

  //   Promise.all(data.images.map((image, index) => {
  //     let length = data.images.length
  //     let currentIndex = index
  //     let p = ((index / length) * 100).toFixed(2)
  //     loadImage("https://bisunajaime-portfolio.netlify.app" + image)
  //   }))
  //     .then(() => {
  //       setImgsLoaded(true)
  //     })
  //     .catch(err => console.log("Failed to load images", err))
  // }, [])

  if (!imgsLoaded) {
    return (
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          background: '#0f1122'
        }}
      >
        {/* <CircularProgressbar
          value={percent}
          text={`${percent}%`}
        /> */}
        <h1
          style={{
            color: 'white'
          }}
        >Please wait while assets are loaded.</h1>
      </section>
    )
  }


  return (
    <React.Fragment >
      {/* <Navbar /> */}
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
