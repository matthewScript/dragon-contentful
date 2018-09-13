import React, { Component } from 'react'
import { createClient } from 'contentful'
import { markdown } from 'markdown';
import renderHTML from 'react-render-html';
import moment from 'moment';
import ShareBlock from '../ui/ShareBlock'
import Link from 'next/link'
import Lightbox from 'react-images';

const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

class DefaultArticle extends Component {
    constructor () {
        super()
        this.state = {
            images: null,
            open: false,
            hero: null,
            viewer: {},
            visible: false
        }
    }

    componentDidMount() {
        this.getPhotoUrl();
        this.getData();
    }

    async getData() {
        if(this.props.post.fields.hasOwnProperty("heroImage")) {
            const hero = await client.getAsset(this.props.post.fields.heroImage.sys.id)
            this.setState({
                hero
            })
        }
    }
    
    getPhotoUrl = () => {
        const self = this;
        let ids = this.props.post.fields.photos || [];

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
            return images.map(image => <figure key={image.sys.id} onClick={() => this.onImageClick(image.fields.title, `${image.fields.file.url}?h=320&w=480&fit=fill`)} alt={image.fields.title} style={{backgroundImage: `url(${image.fields.file.url})`}} /> );
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
        const { post } = this.props;
        const { hero } = this.state;

        return (
            <div>
                <div className="standard-article-title">
                    <h1>{post.fields.title ? post.fields.title : null}</h1>
                    <ShareBlock/>
                </div>
                <div className={hero ? `standard-article-hero isImage` : `standard-article-hero`}>
                    <img src={ hero ? hero.fields.file.url : null } />
                </div>
                <div className="article">
                    <p>{post.fields.releaseDate ? moment(post.fields.releaseDate).format("MMMM Do YYYY") : ''}</p>
                </div>

                <div className="character-body">
                    {post.fields.body ? renderHTML(markdown.toHTML(post.fields.body)) : null}
                </div>

                <div className="standard-article-author">
                    { post.fields.tags && (<span>TAGS: { post.fields.tags.join(', ')}</span>) }
                </div>
                
                <div className="gallery-article-gallery">
                    {this.state.images ? this.getImg() : null}
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
                        width={'100%'}
                    />
                </div>

                <Link href="/newsfeed">
                    <a className="more-newsfeed">BACK TO NEWSFEED</a>
                </Link>
            </div>
        )
    }
}
export default DefaultArticle
