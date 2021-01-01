import React from "react"
import Bubble from "../components/bubble"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

const index = () => {
  const { width, height } = useWindowSize
  var handToggled = false
  var timeOut
  var counter = 0
  var timeLeft = 24;
  var timerId = setInterval(countdown, 1000);
    
  function countdown() {
    if (timeLeft === -1) {
      clearTimeout(timerId);
      document.getElementById("overlay").style.display = "block";
    } else {
      console.log(timeLeft)
      timeLeft--;
    }
  }

  function callbackToggle() {
    return function () {
      if (handToggled) {
        document.getElementById("main-button").checked = false
        handToggled = !handToggled
      }
    }
  }

  function Popup() {
    document.getElementById("mybubble").style.display = "block"
    document.getElementsByClassName('catpaw-container')[0].classList.add('catpaw-extended')
    setTimeout(function () {
      document.getElementById("mybubble").style.display = "none"
    }, 2500)
    setTimeout(function () {
      document.getElementsByClassName('catpaw-container')[0].classList.remove('catpaw-extended')
    }, 600)
  }

  function togglehand() {
    timeLeft = 20;
    timerId = setInterval(countdown, 1000);
    if (counter === 4) {
      window.location.replace(window.location.href + "goback")
      counter = 0
    } else {
      if (!handToggled) {
        Popup()
        timeOut = setTimeout(callbackToggle(), 600)
        counter += 1
      } else {
        clearTimeout(timeOut)
      }
      handToggled = !handToggled
    }
  }

  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>I Said No</title>
    </Helmet>
      <Layout>
        <div id="overlay">
          <div id="text">
            <p>What several days it has been. Everything seems so normal until when she left. 
              As if time is meaningless when she's missing.</p>

            <p>Left asphyxiated alone within four walls. They punctuated my days. 
              A slow tempo that keeps repeating itself.</p>

            <p>I'm waiting for her to come back from her long trip. I see you everywhere, on tv, on blogs. 
              I wonder if you're okay. When she comes back, we can't pretend this never happened.</p>

            <p>My eyes glimmer at the sky. One foot out of the outside, the other timidly follows.</p>

            <p>I hear her; I feel her. I need height to appreciate his greatness. 
              His breath in my lungs like a remote CPR against my mouth.</p>
            
            <p>That's what I'm craving again to not be grumpy. Freedom from COVID is everything.
              What a year it has been<span role="img" aria-label="relieved face">😌</span>.</p>
          </div>
          <Confetti
            width={width}
            height={height}
          />
        </div>
        <div>
          <label style={{ margin: "auto"}} className="switch"> 
            <input type="checkbox" onClick={() => togglehand()} id="main-button"></input>
            <span className="slider round"></span>
          </label>
        </div>
        <div className="catpaw-container">
          <img className="catpaw-image" alt="myImage" src="../../catpaw.png"/>
        </div>
        <h1 style={{ textAlign: "center", marginTop: "115px" }}>What do you think</h1>
      </Layout>
      <Bubble BubbleText='Please can you not push my ' TextBold="Toggle!!!" id="mybubble"></Bubble>
    </>
  )
}

export default index
