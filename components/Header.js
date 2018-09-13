import React, { Component } from 'react'
import { createClient } from 'contentful'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
import Navigation from './Navigation';
import SocialLinks from '../components/ui/SocialLinks'
import CountBanner from '../components/Countdown'

const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

const linkStyle = {
    marginRight: 15
}

class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {
            fixed: false,
            mobile: false,
            countdown: null
        }
    }


    async getCountDown () {
        const countdown = await client.getEntry('6e0O82QvFSU04akAUaQkWu'); //countdown

        this.setState({
            countdown
        })
    }

    componentDidMount () {
        this.getCountDown()

        if ( window.screen.availWidth >= 641 ) {
            window.addEventListener('scroll', this.handleScroll)
        } else {
            this.setState({
                fixed: true,
                mobile: true
            })
        }
    }

    componentWillUnmount () {
        if ( window.screen.availWidth >= 641 ) {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }

    handleScroll = (event) => {
        let header = window.document.querySelector('header');
        if (window.scrollY >= 36 ) {
            this.setState({
                fixed: true
            })
        } 
        if (window.scrollY < 36 ){
            this.setState({
                fixed: false
            })
        }
    }

    render() {
        const {countdown} = this.state;

        return (
            <header className={ this.state.fixed ? 'fixed' : null }>
                <Menu>
                    <Link prefetch href="/">
                        <a className="bm-item" >Home</a>
                    </Link>
                    <Link prefetch href="/newsfeed">
                        <a className="bm-item" >News Feed</a>
                    </Link>
                    {/* <Link prefetch href="/fun-stuff"><a className="menu-item" >Fun Stuff</a></Link> */}
                    <Link prefetch href="/overview">
                        <a className="bm-item" >Story & Lore</a>
                    </Link>
                    
                    <ul className="mini-menu">
                        <Link prefetch href="/overview">
                            <a className="bm-item--small" >Story Overview</a>
                        </Link>
                        <Link prefetch href="/characters">
                            <a className="bm-item--small" >Characters</a>
                        </Link>
                        <Link prefetch href="/world">
                            <a className="bm-item--small">World</a>
                        </Link>
                    </ul>
                    <Link prefetch href="/behind-the-scenes">
                        <a className="bm-item" >Behind The Scenes</a>
                    </Link>
                    <div className="bm-social">
                        <h3>Social</h3>
                        <hr />
                        <hr />
                        <SocialLinks />
                    </div>
                </Menu>
                <div className="container">
                    <SocialLinks />
                    <a href="/">
                        <figure className="logo" alt="The Dragon Prince" />
                    </a>
                </div>
                <Navigation />
                { countdown ? <CountBanner date={countdown.fields.targetDate} event={countdown.fields.body} /> : null}
            </header>
        )
    }
}

export default Header
