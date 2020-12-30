import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const error = () => {
    return (
        <Layout>
            <div class="fof">
                <h1>Error 404</h1>
                <p>Nothing to find here!! Go <Link to="/">home</Link></p>
            </div>
        </Layout>
    )
}

export default error
