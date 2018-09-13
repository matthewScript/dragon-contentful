import React, { Component } from 'react'
import { createClient } from 'contentful'
import Layout from '../components/MyLayout';
import StandardArticle from '../components/articles/StandardArticle'
import GalleryArticle from '../components/articles/GalleryArticle'
import VideoArticle from '../components/articles/VideoArticle'
import PollArticle from '../components/articles/PollArticle'
import DefaultArticle from '../components/articles/DefaultArticle'

const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

class Article extends Component {
    static async getInitialProps({ query }) {
        const post = await client.getEntry(query.eid);

        return {
            post
        }
    }

    articleRouter = (post) => {
        let view;
        switch (post.fields.articleType) {
            case 'Standard Article':
                view = <StandardArticle post={post} />
                break;
            case 'Gallery':
                view = <GalleryArticle post={post} />
                break;
            case 'Single Video':
                view = <VideoArticle post={post} />
                break;
            case 'Poll':
                view = <PollArticle post={post} />
                break;
            default:
                view = <DefaultArticle post={post} />
                break;
        }
        return view;
    }

    render() {
        const { post } = this.props;
        return (
            <Layout>
                <div className="container article-container pt-4">
                    <h1 className="subtitle mb-0">{post.fields.articleType === 'Poll' ? 'Poll' : 'News Feed'}</h1>
                    {this.articleRouter(post)}
                </div>
            </Layout>
        )
    }
}
export default Article
