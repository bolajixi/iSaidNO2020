import React from "react"
import SocialFollow from "../socialfollow/SocialFollow";
import SEO from '../components/seo'

const layout = ({ children }) => {
  return (
    <>
    <SEO title='I said No 2020'/>
      <main>{children}</main>
      <SocialFollow />
    </>
  )
}

export default layout
