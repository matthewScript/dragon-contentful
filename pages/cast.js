import React, { Component } from 'react'
import Layout from '../components/MyLayout';

class CreativeTeam extends Component {

    render() {
        return (
            <Layout>
                <div className="container article-container">
                    <h3 className="subtitle">Behind The Scenes</h3>
                    <h1 className="page-title">Cast</h1>
                    <section className="creative-wrapper">
                        <article className="row creative-member">
                            <div className="col-12 col-md-3 pb-2">
                                <img className="creative-image img-fluid" alt="JACK DE SENA" src="/static/cast/jack1.PNG" />
                            </div>
                            <div className="col-12 col-md-9">
                                <h3 className="media-heading">JACK DE SENA (CALLUM)</h3>
                                <p>Jack De Sena was born on December 6, 1987 in Boston, Massachusetts, USA as John Patrick De Sena. He is an actor and writer, known for Dorm Life (2008), JLA Adventures: Trapped in Time (2014) and Avatar: The Last Airbender (2003). </p>
                            </div>
                        </article>
                        
                        <article className="row creative-member">
                            <div className="col-12 col-md-3 pb-2">
                                <img className="creative-image img-fluid" alt="PAULA BURROWS" src="/static/cast/paula1.PNG" />
                            </div>
                            <div className="col-12 col-md-9">
                                <h3 className="media-heading">PAULA BURROWS (RAYLA)</h3>
                                <p>Paula Burrows is an actress and writer, known for The Dangers of Online Dating (2017), Beat Around the Bush (2016) and Beyond (2016).</p>
                            </div>
                        </article>

                        <article className="row creative-member">
                            <div className="col-12 col-md-3 pb-2">
                                <img className="creative-image img-fluid" alt="SASHA ZOEY" src="/static/cast/sasha1.PNG" />
                            </div>
                            <div className="col-12 col-md-9">
                                <h3 className="media-heading">SASHA ZOEY ROJEN (EZRAN)</h3>
                                <p>Sasha Zoey Rojen is an actress, who was born November 18, 2006 in Vancouver, British Columbia, Canada. Sasha's father is Ukrainian and her mother is Trinidadian. Sasha has two siblings, Lucas Rojen and Odessa Rojen, who are also actors. Sasha is a competitive (WAG) gymnast, who represented team BC in 2015, 2016 and 2017 at the Western Canadian Gymnastics championship.</p>
                            </div>
                        </article>
                        
                        <article className="row creative-member">
                            <div className="col-12 col-md-3 pb-2">
                                <img className="creative-image img-fluid" alt="LUC RODERIQUE" src="/static/cast/luc1.PNG" />
                            </div>
                            <div className="col-12 col-md-9">
                                <h3 className="media-heading">LUC RODERIQUE (HARROW)</h3>
                                <p>Luc Roderique was born in Ottawa, Ontario, Canada to a Trinidadian father and German mother. From an early age he took an interest in acting and after taking classes at the Ottawa School of Speech & Drama, he attended both Ottawa's Canterbury High School for the Arts and Vancouver's Studio 58.</p>
                            </div>
                        </article>

                        <article className="row creative-member">
                            <div className="col-12 col-md-3 pb-2">
                                <img className="creative-image img-fluid" alt="JASON SIMPSON" src="/static/cast/jason.PNG" />
                            </div>
                            <div className="col-12 col-md-9">
                                <h3 className="media-heading">JASON SIMPSON (VIREN)</h3>
                                <p>Jason Simpson is an actor, known for League of Legends (2009), Sausage Party (2016) and My Little Pony: Friendship Is Magic (2010).</p>
                            </div>
                        </article>

                        <article className="row creative-member">
                            <div className="col-12 col-md-3 pb-2">
                                <img className="creative-image img-fluid" alt="JESSE INOCALLA" src="/static/cast/jesse1.PNG" />
                            </div>
                            <div className="col-12 col-md-9">
                                <h3 className="media-heading">JESSE INOCALLA (SOREN)</h3>
                                <p>Born in Vancouver BC to a hippie-turned-child psychologist and a monk-turned-martial arts master, Jesse Inocalla got bit by the bug early when his father booked the role of Michelangelo in Teenage Mutant Ninja Turtles 3. Jesse spent a lot of time on sets, following his father and eventually mastering their family style of martial arts, Thanks to his academically gifted mother, and his physically gifted father, Jesse's developed a strong appreciation for humanity and human nature, which comes through in his craft.</p>
                            </div>
                        </article>

                        <article className="row creative-member">
                            <div className="col-12 col-md-3 pb-2">
                                <img className="creative-image img-fluid" alt="RACQUEL BELMONTE" src="/static/cast/racquel.PNG" />
                            </div>
                            <div className="col-12 col-md-9">
                                <h3 className="media-heading">RACQUEL BELMONTE (CLAUDIA)</h3>
                                <p>Racquel Belmonte is known for her work on Heart of Dance (2013), Lego Elves (2015) and Legends of Chima (2013).</p>
                            </div>
                        </article>

                        <article className="row creative-member">
                            <div className="col-12 col-md-3 pb-2">
                                <img className="creative-image img-fluid" alt="JONATHAN HOLMES" src="/static/cast/jonathan1.PNG" />
                            </div>
                            <div className="col-12 col-md-9">
                                <h3 className="media-heading">JONATHAN HOLMES (RUNAAN)</h3>
                                <p>Jonathan Holmes was born in Shrewsbury, Shropshire, England. He is an actor, known for InuYasha the Movie 3: Swords of an Honorable Ruler (2003), Stargate SG-1 (1997) and Hulk Vs. (2009).</p>
                            </div>
                        </article>
                    </section>
                </div>
            </Layout>
        )
    }
}
export default CreativeTeam
