import React, { Component } from 'react'
import { createClient } from 'contentful'
import Layout from '../components/MyLayout';
import _ from 'lodash';
import Link from 'next/link';
import { markdown } from 'markdown';
import renderHTML from 'react-render-html';


const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

class Overview extends Component {

    title = 'Story Overview';

    static async getInitialProps() {
        // Get static About
        const about = await client.getEntry('2Y0bGanLnGYMKUocyMUA88'); // about
        return {
            about
        }
    }

    render() {
        return (
            <Layout>
                <div className="container pt-4">
                    <h3 className="subtitle">Story & Lore</h3>
                    <h1 className="page-title">{this.title}</h1>
                    <p>{renderHTML(markdown.toHTML(this.props.about.fields.body))}</p>
                    <div className="row">
                        <Link href={`/characters`}>
                            <div className={`col-12 col-md-6 mb-4 text-white card character-thumb`} >
                                <figure className="card-img img-fluid character-image overview-image" style={{backgroundImage: `url('/static/MeetCharacters_BG.png')`}} />
                                <div className="card-img-overlay character-content">
                                    <div className="character-name">Characters</div>
                                </div>
                            </div>
                        </Link>
                        <Link href='/world'>
                            <div className={`col-12 col-md-6 mb-4 text-white card character-thumb`} >
                                <figure className="card-img img-fluid character-image overview-image" style={{backgroundImage: `url('/static/ExploreWorld_BG.png')`}} />
                                <div className="card-img-overlay character-content">
                                    <div className="character-name">World</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </Layout >
        )
    }
}
export default Overview
