import { withRouter } from 'next/router'
import Layout from '../components/MyLayout.js'
import { createClient } from 'contentful'
import React, { Component } from 'react'
import Link from 'next/link'
import { markdown } from 'markdown';
import renderHTML from 'react-render-html';
import ShareBlock from '../components/ui/ShareBlock'
import Lightbox from 'react-images';

let client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

class Character extends Component {
    constructor () {
        super()
        this.state = {
            hero: null,
            images: null,
            videos: null,
            viewer: {},
            visible: false
        }
    }

    static async getInitialProps({ query }) {
        const character = await client.getEntry(query.eid);

        return {
            character
        }
    }

    componentDidMount() {
        this.getData();
        this.getPhotoUrl();
        this.getVideoUrl();
    }
    
    async getData() {
        const hero = await client.getAsset(this.props.character.fields.heroImage.sys.id);

        this.setState({
            hero
        })
    }

    getVideoUrl = () => {
        const self = this;
        let ids = this.props.character.fields.videos || [];

        var promises = ids.map(video => {
            return client.getEntry(video.sys.id).then((res) => {
                return res
            })
        })

        Promise.all(promises).then((videos) => {
            self.setState({
                videos
            })
        })
    }

    getVideo = () => {

        const { videos } = this.state;

        if (videos.length > 0) {
            return videos.map(video => {
                return ( 
                    <iframe key={video.sys.id} alt={video.fields.title} width="100%" height="340"
                        src={`${video.fields.youTubeVideo}?rel=0&showinfo=0`} frameBorder="0">
                    </iframe>
                )
            })
        } else {
            return null
        }
    }

    getPhotoUrl = () => {
        const self = this;
        let ids = this.props.character.fields.photos || [];

        var promises = ids.map(photo => {
            return client.getAsset(photo.sys.id).then((res) => {
                return res
            })
        })

        Promise.all(promises).then((images) => {
            self.setState({
                images
            })
        })
    }
    getImg = () => {

        const { images } = this.state;

        if (images.length > 0) {
            return images.map(image => <figure key={image.sys.id} onClick={() => this.onImageClick(image.fields.title, `${image.fields.file.url}?h=320&w=480&fit=fill`)} alt={image.fields.title} style={{backgroundImage: `url(${image.fields.file.url}?h=320&w=480&fit=fill)`}} /> );
        } else {
            return null
        }
    }

    onImageClick = (title, image) => {
        console.log(title, image)
        this.setState({
            viewer: { 
                src: image,
                caption: title
            },
            visible: true
        })
    }

    render() {
        const { character } = this.props,
              { hero, images, videos } = this.state;
        if (!character) {
            return <div>Loading...</div>
        }
        return (
            <Layout>
                <div className="container mt-4">
                    <h3 className="subtitle mb-0">Characters</h3>
                    <div className="standard-article-title">
                        <h1>{character.fields.title ? character.fields.title : null}</h1>
                        <ShareBlock/>
                    </div>
                    <img className="character-hero" src={hero ? hero.fields.file.url : ''} alt={character.fields.title} />
                    <div className="character-body">
                        {renderHTML(markdown.toHTML(character.fields.body))}
                    </div>
                    <div className="col-12">
                        {videos ? this.getVideo() : null}
                    </div>
                    <div className="gallery-article-gallery">
                        {images ? this.getImg() : null}
                    </div>
                    <div id="viewer-container">
                        <Lightbox
                            images={[
                                this.state.viewer
                            ]}
                            isOpen={this.state.visible}
                            onClose={() => this.setState({visible: false})}
                            backdropClosesModal={true}
                            showImageCount={false}
                        />
                    </div>
                </div>
                
                <Link href="/characters">
                    <a className="more-newsfeed">OTHER CHARACTERS</a>
                </Link>

                
            </Layout>
        )
    }
}


export default Character
