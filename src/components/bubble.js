import React from "react"
import style from "../components/bubble.module.css"

const bubble = props => {
  return (
    <div className={style.bubble} id={props.id}>
      {props.BubbleText} <strong>{props.TextBold}</strong>
    </div>
  )
}

export default bubble
