import React, { Component } from 'react'
import { createClient } from 'contentful'
import Layout from '../components/MyLayout';
import _ from 'lodash';
import Link from 'next/link';

const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

class Overview extends Component {

    static async getInitialProps() {
        // Get static About and Video content
        // const overview = await client.getEntry();

        return {

        }
    }

    render() {

        return (
            <Layout>
                <div className="container">
                    <h3 className="subtitle">Fun Stuff</h3>
                </div>
            </Layout>
        )
    }
}
export default Overview
