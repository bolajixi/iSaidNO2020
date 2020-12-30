import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { Link } from 'gatsby'

const goback = () => {

  function random_bg_color() {
    var x = Math.floor(Math.random() * 256)
    var y = Math.floor(Math.random() * 256)
    var z = Math.floor(Math.random() * 256)
    var bgColor = "rgb(" + x + "," + y + "," + z + ")"
    
    if (typeof document !== `undefined`) {
      document.body.style.background = bgColor
    }

  }
  random_bg_color()

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>I Said No - Grumpy</title>
      </Helmet>
      <Layout>
        <div className="typograph" id="sect2">
          <p>GRUMPY GRUMPY</p>
          <p>GRUMPY GRUMPY</p>
          <p>GRUMPY GRUMPY</p>
          <p>GRUMPY GRUMPY</p>
          <p>GRUMPY GRUMPY</p>
        </div>
        <img src="../../grumpy-cat-meme-00.jpg" alt="grumpy"/>
        <div className="grump-story">
          So you see, today's meant to be a wonderful, day but nothing is right <span role="img" aria-label="sad">😓</span>...
          <br></br>
          <br></br>
          You don't know what I've gone through this year and here you are clicking my toggle 4 times.
          <br></br>
          <br></br>
          What a wonderful day to be grumpy
          <br></br>
          <br></br>
          <Link to="/">Let's go back and try again</Link>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
      </div>
      </Layout>
    </>
  )
}

export default goback
