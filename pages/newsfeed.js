import React, { Component } from 'react'
import { createClient } from 'contentful';
import InfiniteScroll from 'react-infinite-scroller';
import Layout from '../components/MyLayout';
import _ from 'lodash';
import Link from 'next/link';
import moment from 'moment';

const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

const fallback = '/static/fallback.jpg';

class Newsfeed extends Component {
    state = {
        articles: {},
    }
    loadCount = 0;
    title = 'News Feed';
    pinnedCount = 0;

    static async getInitialProps() {
        // Get Newsfeed Articles
        const articles = await client.getEntries({
            'content_type': 'article',
            'fields.releaseDate[exists]': true,
            'fields.includeInFeed': true,
            order: ('-fields.isPinned', '-fields.releaseDate'),
        });
        let pinned = [];
        for(let i = 0; i<articles.items.length; i++) {
            if(articles.items[i].fields.isPinned && pinned.length < 2) {
                pinned.push(articles.items[i])
                articles.items.splice(i, 1);
                i--;
            }
        }

        return {
            articles,
            pinned,
        }
    }

    componentDidMount() {
        this.loadMore();
    }

    loadMore = async() => {
        this.loadCount += 5;
    }

    renderPinned() {
        
        if (!this.props.pinned) {
            return <div>Loading...</div>
        }
        return _.map(this.props.pinned, (article, index) => {
            let imgUrl = '';
            if (article.fields.heroImage) {
                imgUrl = `${article.fields.heroImage.fields.file.url}?h=300&w=538&fit=fill`;
            }
            else {
                imgUrl = fallback;
            }
            return (
                <li className={`col-sm-12 col-md-6 mb-4 card text-white bg-transparent article-thumb pinned article-${index}`} key={article.sys.id}>
                    <Link href={`/article?eid=${article.sys.id}`}>
                        <div>
                        <img className="card-img article-image image-wrapper" height="300" style={{backgroundImage: `url('${imgUrl}')`}}  />
                        <div className="card-img-overlay article-content--pinned article-content">

                            <h3>{article.fields.title}</h3>
                            <p>{article.fields.summary}</p>
                            <span className="article-icon quiz"></span>

                        </div>
                        </div>
                    </Link>
                </li>
            )
        });
    }

    renderArticles() {
        
        if (!this.props.articles.items) {
            return <div>No articles to show</div>
        }
        return _.map(this.props.articles.items, (article, index) => {
            let imgUrl = '';
            if (article.fields.heroImage) {
                imgUrl = `${article.fields.heroImage.fields.file.url}?h=190&w=340&fit=fill`;
            }
            else {
                imgUrl = fallback;
            }
            return (
                <Link key={article.sys.id} href={`/article?eid=${article.sys.id}`}>
                    <article className="row bts-article">
                        <div className="col-12 col-md-4 mb-2">
                            <img className="media-object article-image image-wrapper" width="360" height="200" style={{backgroundImage: `url('${imgUrl}')`}} />
                        </div>
                        <div className="col-12 col-md-8">
                            <h3 className="media-heading">{article.fields.title}</h3>
                            <span>{moment(article.fields.releaseDate).format("MMMM Do YYYY")}</span>
                            <p>{article.fields.summary}</p>
                        </div>
                    </article>
                </Link>
            )
        });
    }

    render() {
        return (
            <Layout>
                <div className="container pt-4 pb-4">
                    <h1 className="page-title">{this.title}</h1>
                    <ul className="list-unstyled row mb-5">
                        {this.renderPinned()}
                    </ul>
                    <div className="list-unstyled article-feed-list">
                        <InfiniteScroll
                            pageStart={0}
                            loadMore={this.loadMore}
                            hasMore={this.state.articles.total >= this.loadCount}
                            loader={<div className="loader" key={0}>Loading ...</div>}
                        >
                            {this.renderArticles()}
                        </InfiniteScroll>
                    </div>
                </div>
            </Layout>
        )
    }
}
export default Newsfeed
