import React, { Component } from 'react'
import { createClient } from 'contentful'
import Layout from '../components/MyLayout';
import _ from 'lodash';
import Link from 'next/link';

const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});
const fallback = '/static/fallback.jpg';

class Characters extends Component {

    title = 'Characters';

    static async getInitialProps() {
        // Get static About and Video content
        const characters = await client.getEntries({
            'fields.section': 'Characters',
            'content_type': 'article'
        });

        return {
            characters
        }
    }

    renderCharacters() {
        return _.map(this.props.characters.items, (character, index) => {
            let imgUrl = '';
            if (character.fields.heroImage && character.fields.heroImage.fields) {
                imgUrl = `${character.fields.heroImage.fields.file.url}?h=252&w=340&fit=fill`;
            }
            else {
                imgUrl = fallback + '?h=190&w=340&fit=fill';
            }
            return (
                <Link key={character.sys.id} href={`/character?eid=${character.sys.id}`}>
                    <div className={`col-12 col-md-4 mb-4 text-white card character-thumb character-${index}`} >
                        <figure className="card-img img-fluid character-image" style={{backgroundImage: `url('${imgUrl}')`}} />
                        <div className="card-img-overlay character-content">
                            <div className="character-name">{character.fields.title ? character.fields.title : ''}</div>
                            {/* <p>{character.fields.summary ? character.fields.summary : ''}</p> */}
                        </div>
                    </div>
                </Link>
            )
        });
    }

    render() {
        return (
            <Layout>
                <div className="container pt-4 pb-4">
                    <h3 className="subtitle">Story & Lore</h3>
                    <h1 className="page-title">{this.title}</h1>
                    <div className="row character-row mt-4 mb-4">
                        {this.renderCharacters()}
                    </div>
                </div>
            </Layout>
        )
    }
}
export default Characters
