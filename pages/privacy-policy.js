import React, { Component } from 'react'
import { createClient } from 'contentful'
import Layout from '../components/MyLayout';
import { markdown } from 'markdown';
import renderHTML from 'react-render-html';


const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

const env = process.env.REACT_APP_SPACE;

class Policy extends Component {

    static async getInitialProps() {
        // Get Data
        const policy = await client.getEntry('2rlWNDRgIoiEmSa8AqEcOG');

        return {
            policy
        }
    }


    render() {
        return (
            <Layout>
                <div className="container pt-4 pb-4">
                    <h1 className="page-title">{this.props.policy.fields.title}</h1>
                    <div>
                        {renderHTML(markdown.toHTML(this.props.policy.fields.body))}
                    </div>
                </div>
            </Layout>
        )
    }
}
export default Policy
