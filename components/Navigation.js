import React, { Component } from 'react'
import Link from 'next/link'
import Menu, { SubMenu, MenuItem } from 'rc-menu'
import Router from 'next/router'
import { FaCaretDown } from 'react-icons/lib/fa';

const onTitleClick = () => {
    Router.push({
        pathname: '/overview'
    })
}

class Navigation extends Component {
    constructor (props) {
        super(props)
        this.state = {
            path: null
        }
    }
    
    componentDidMount () {
        const path = window.location.pathname;
        this.setState({
            path
        })   
    }
    

    render() {
        const { path } = this.state;
        return (
            <div className="main-menu-outer">
                <Menu
                    mode="horizontal"
                    openAnimation="slide-up"
                    triggerSubMenuAction="hover"
                    className="main-menu container mx-auto"
                >
                    <MenuItem className={path && path === '/' ? 'active' : null } ><Link href="/"><div className="menu-item-wrapper"><a style={{backgroundImage: 'url(/static/navImageHome.png)'}}>Home</a></div></Link></MenuItem>
                    <MenuItem className={path && path === '/newsfeed' ? 'active' : null }><Link href="/newsfeed"><div className="menu-item-wrapper"><a style={{backgroundImage: 'url(/static/navImageNewsFeed.png)'}}>News Feed</a></div></Link></MenuItem>
                    <SubMenu className={path && path === '/overview' || path === '/characters' || path === '/world' ? 'active' : null } title={<div className="menu-item-wrapper"><a style={{backgroundImage: 'url(/static/navImageStoryLore.png)'}}>Story & Lore</a></div>} key="1" onTitleClick={onTitleClick} popupOffset={[0, 0]}>
                        <MenuItem key="1-1"><Link  href="/overview"><div className="menu-item-wrapper"><a style={{backgroundImage: 'url(/static/navImageStoryOverview.png)'}}>Story Overview</a></div></Link></MenuItem>
                        <MenuItem key="1-2"><Link  href="/characters"><div className="menu-item-wrapper"><a style={{backgroundImage: 'url(/static/navImageCharacters.png)'}}>Characters</a></div></Link></MenuItem>
                        <MenuItem key="1-3"><Link  href="/world"><div className="menu-item-wrapper"><a style={{backgroundImage: 'url(/static/navImageWorld.png)'}}>World</a></div></Link></MenuItem>
                    </SubMenu>
                    {/* <MenuItem><Link  href="/fun-stuff"><a>Fun Stuff</a></Link></MenuItem> */}
                    <MenuItem className={path && path === '/behind-the-scenes' ? 'active' : null } ><Link  href="/behind-the-scenes"><div className="menu-item-wrapper"><a style={{backgroundImage: 'url(/static/navImageBehindScenes.png)'}}>Behind The Scenes</a></div></Link></MenuItem>
                </Menu>
            </div >
        )
    }
}

export default Navigation
