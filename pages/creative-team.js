import React, { Component } from 'react'
import Layout from '../components/MyLayout';

class CreativeTeam extends Component {

    render() {
        return (
            <Layout>
                <div className="container article-container">
                    <h3 className="subtitle">Behind The Scenes</h3>
                    <h1 className="page-title">Creative Team</h1>
                    <section className="creative-wrapper">
                        <article className="row creative-member">
                            <div className="col-12 col-md-3">
                                <img className="creative-image image-fluid" alt="AARON  EHASZ" src="/static/creative/aaron.PNG" />
                            </div>
                            <div className="col-12 col-md-9">
                                <h3 className="media-heading">AARON EHASZ</h3>
                                <span>CEO & CO-CREATOR -- WONDERSTORM</span>
                                <p>Aaron was the Head Writer on <em>Avatar: The Last Airbender</em>, and is now the CEO of Wonderstorm, the company behind The Dragon Prince. With The Dragon Prince, Aaron wanted not only to craft a story full of drama and heart, but to grow his team into a group of visionary creators. Aaron finds inspiration in kind people who want to make difference for others: people who face significant challenges and setbacks, but still fight to overcome them and have a meaningful impact on their friends, family, and the world.</p>
                                <p>Also: Robotech.</p>
                                <p>Aaron loves spending time with his family, whether it’s playing games together, watching movies, or hanging out outdoors. Most of all, Aaron loves drinking good coffee, though the rest of Wonderstorm disagrees with his taste.</p>
                            </div>
                        </article>
                        
                        <article className="row creative-member">
                            <div className="col-12 col-md-3">
                                <img className="creative-image" alt="JUSTIN RICHMOND" src="/static/creative/justin.PNG" />
                            </div>
                            <div className="col-12 col-md-9">
                                <h3 className="media-heading">JUSTIN RICHMOND</h3>
                                <span>EXECUTIVE PRODUCER & CO-CREATOR -- WONDERSTORM</span>
                                <p>From Uncharted and League of Legends to becoming The Dragon Prince, Justin helps make things awesome. His goal as Executive Producer at Wonderstorm is to tell great stories that are accessible to any audience without “dumbing it down.”He’s inspired by great fantasies and sci-fi epics, but also by taking hikes, traveling to new places, and hanging out with his family and seeing what they love.</p>
                                <p>Justin is a huge gamer and loves playing board-games and video-games. He plays EVERYTHING... except sports games. His favorite game of all time is <em>The Legend of Zelda: Ocarina of Time</em>.</p>
                            </div>
                        </article>

                        <article className="row creative-member">
                            <div className="col-12 col-md-3">
                                <img className="creative-image" alt="GIANCARLO VOLPE" src="/static/creative/giancarlo.PNG" />
                            </div>
                            <div className="col-12 col-md-9">
                                <h3 className="media-heading">GIANCARLO VOLPE</h3>
                                <span>EXECUTIVE PRODUCER -- WONDERSTORM</span>
                                <p>A veteran from the <em>Avatar: The Last Airbender</em> team, Giancarlo is now the Showrunner for <em>The Dragon Prince</em> at Wonderstorm. He has not only developed the visual storytelling style for the series, but has also been a part of voice directing, editing, design, and more. He’s inspired by blurring the lines between animation and live action.</p>
                                <p>Outside of work, Giancarlo plays video-games -- especially <em>Overwatch</em>, which consumes most of his life. He loves eating pizza and pasta, and when he sweats, olive oil comes out of his pores, because he loves living up to the stereotypes of his people.</p>
                            </div>
                        </article>
                        
                        <article className="row creative-member">
                            <div className="col-12 col-md-3">
                                <img className="creative-image" alt="EDISON YAN" src="/static/creative/edison.PNG" />
                            </div>
                            <div className="col-12 col-md-9">
                                <h3 className="media-heading">EDISON YAN</h3>
                                <span>ART DIRECTOR -- BARDEL ENTERTAINMENT</span>
                                <p>As Art Director for <em>The Dragon Prince</em> at Bardel, Edison helps create the visuals for the whole show. This means taking a script and working with artists of all specialties to bring it to the screen. He’s inspired by all his coworker artists, artists from cyberspace, Ghibli movies, and soundtracks from his favorite movies, video-games, and anime.</p>
                                <p>Edison’s free time is taken up by drawing and painting, watching videos on Netflix and YouTube, and playing with his dogs. He also plays video-games, and has recently re-played his favorite game of all time, <em>Final Fantasy VI</em>.</p>
                            </div>
                        </article>
                        
                        <article className="row creative-member">
                            <div className="col-12 col-md-3">
                                <img className="creative-image" alt="EDISON YAN" src="/static/creative/villads.PNG" />
                            </div>
                            <div className="col-12 col-md-9">
                                <h3 className="media-heading">VILLADS SPANGSBERG</h3>
                                <span>SUPERVISING DIRECTOR -- BARDEL ENTERTAINMENT</span>
                                <p>Villads oversees all aspects of The Dragon Prince’s production as the show’s Supervising Director, and helps talented artists at Bardel deliver the best possible animated show. He’s inspired by anything involving <em>Akira</em>, <em>Iron Giant</em>, <em>Ghost in the Shell</em>, <em>Lord of the Rings</em>, or <em>Blade Runner</em> ... you know, the classics!.</p>
                                
                                <p>Lots of drawings of robots can be found on Villads’s tablet, and he also plays older computer games like <em>Myst</em> and <em>Civilization</em>; but when the wind is right and the sun shines, he always goes sailing with his labrador, Bowie. </p>
                            </div>
                        </article>

                        
                        
                        
                        
                        
                    </section>
                </div>
            </Layout>
        )
    }
}
export default CreativeTeam
