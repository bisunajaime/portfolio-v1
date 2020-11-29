import React from 'react';
import Main from './Main'
import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect, useState } from 'react'
import data from './assets/content/content.json'

function App() {
  const [imgsLoaded, setImgsLoaded] = useState(false)

  useEffect(() => {
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image
        loadImage.key = image
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url)
          }, 2000)

        loadImg.onerror = err => reject(err)
      })
    }

    let imageArr = []

    data.projects.map(e => e.sample_ui.map(i => imageArr.push(i)))
    console.log(imageArr)
    Promise.all(imageArr.map(image => {
      console.log(image)
      loadImage("https://bisunajaime-portfolio.netlify.app" + image)
    }))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err))
  }, [])

  if (!imgsLoaded) {
    return (
      <h1>Loading</h1>
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
