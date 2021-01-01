import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const error = () => {
    return (
        <Layout>
            <div class="fof">
                <h1>Error 404</h1>
                <p>Nothing to find here!! Go <Link style={{textDecoration:"none"}} to="/"><span role="img" aria-label="home" style={{fontSize:"xx-large"}}>🏡</span></Link></p>
            </div>
        </Layout>
    )
}

export default error
