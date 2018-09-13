import React, { Component } from 'react'
import { createClient } from 'contentful'
import Layout from '../components/MyLayout';
import { markdown } from 'markdown';
import renderHTML from 'react-render-html';


const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

class Cookie extends Component {

    static async getInitialProps() {
        // Get Data
        const cookie = await client.getEntry('3wXiajbUYw2GoCYQu0sCwe');

        return {
            cookie
        }
    }


    render() {
        return (
            <Layout>
                <div className="container pt-4 pb-4">
                    <h1 className="page-title">{this.props.cookie.fields.title}</h1>
                    <div>
                        {renderHTML(markdown.toHTML(this.props.cookie.fields.body))}
                    </div>
                </div>
            </Layout>
        )
    }
}
export default Cookie
