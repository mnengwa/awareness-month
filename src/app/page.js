/* eslint-disable react/no-unescaped-entities */

import { Fragment } from 'react';
import Subscription from "@/lib/sections/subscription";
import CallToAction from '@/lib/sections/call-to-action';
import StreetLocation from '@/lib/sections/street-location';
import {Twitter, Instagram, Facebook, Youtube, Tiktok, Website} from "@/lib/icons";

export default function Index() {
    return <Fragment>
        <div id="hero" className="w-100 position-relative">
            <img className="mt-4 ms-5 img-fluid position-absolute" width={200} src="images/EMPWR-LOGO.svg"
                alt="Empower emotional, mental, physical wellness & resiliance" />

            <div id="hero-content"
                className="w-100 h-100  d-flex position-relative container flex-column justify-content-center">
                <h1 className="text-light bolden display-2">Protect Yourself & Empower Your Mind & Body</h1>

                <h2 className="mt-2 text-light"><span className="bolden">April</span> - Sexual Assault Awareness
                    Month</h2>
            </div>
        </div>

        <CallToAction/>

        <main id="infographics">
            <div className="py-5 container">
                <h1 className="display-4 bolden crimson-text">The statistics about sexual assault are
                    staggering</h1>
                <h3 className="display-6 dark-text">(National Sexual Violence Resource
                    Center)</h3>

                <div className="row">
                    <div className="mb-2 col-12 col-md-6 col-lg-4">
                        <img className="w-75 img-fluid" src="images/1-of-5.png" />
                        <p className="lead">One in five women in the United States experienced, completed or attempted rape
                            during their lifetime</p>
                    </div>
                    <div className="mb-2 col-12 col-md-6 col-lg-4">
                        <img className="w-75 img-fluid" src="images/24.8-pc.png" />
                        <p className="lead">Nearly a quarter (24.8%) of men in the U.S. experienced some form of contact
                            sexual violence in their lifetime.</p>
                    </div>
                    <div className="mb-2 col-12 col-md-6 col-lg-4">
                        <img className="w-75 img-fluid" src="images/81-pc-women.png" />
                        <p className="lead">Nationwide, 81% of women and 43% of men reported experiencing some form of
                            sexual harassment and/or assault in their
                            lifetime.</p>
                    </div>

                    <div className="mt-2 col-12 col-md-6 col-lg-4">
                        <img className="w-75 img-fluid" src="images/1-of-3.png" />
                        <p className="lead">One in three female victims of completed or attempted rape experienced it for
                            the first time between the ages of 11 and
                            17</p>
                    </div>
                    <div className="mt-2 col-12 col-md-6 col-lg-4">
                        <img className="w-75 img-fluid" src="images/1-of-4.png" />
                        <p className="lead">Almost one in four undergraduate women experienced sexual assault or misconduct
                            at 33 of the nation's major universities</p>
                    </div>
                    <div className="mt-2 col-12 col-md-6 col-lg-4">
                        <img className="w-75 img-fluid" src="images/51.1-pc.png" />
                        <p className="lead">About half (51.1%) of female victims of rape reported being raped by an intimate
                            partner and 40.8% by an acquaintance</p>
                    </div>
                </div>
            </div>
        </main>

        <StreetLocation/>

        <section id="personalities" className="gray-background">
            <div className="py-5 container">
                <h1 className="text-center crimson-text bolden">Meet the team</h1>

                <h4 className="mt-4 text-center" style={{fontWeight: "bolder"}}>Hi, we are Andre, Valerie and Vicki</h4>

                <div className="my-3 row">
                    <div className="col-12 col-md-8 offset-md-2">
                        <p className="lead text-center">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            We're partnering to empower you holistically and prevent assault. We'll equip you with
                            knowledge and
                            tools to promote
                            self-protection and well-being.
                        </p>
                    </div>
                </div>

                <h4 className="text-center crimson-text bolden">How can we help?</h4>

                <p className="lead text-center">Our personal mission is to empower you.</p>

                <div className="row">
                    <div className="mt-2 col-12 col-md-12 col-lg-4">
                        <div className="w-100 h-100 position-relative">
                            <img className="img-fluid rounded-1" src="images/Andre Tosado.png" alt="Adre" />

                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <h2 className="mt-3 text-dark bolden">Andre Tosado</h2>
                                <h6 className="text-dark text-center">With 20+ years in martial arts and fitness, Andre
                                    coaches
                                    self-defense in his business at Berkeley Heights, NJ. Trained
                                    in Boxing, Jeet Kune Do, and Filipino Martial Arts.</h6>

                                <div className="mt-3 gap-3 d-flex justify-content-center">
                                    <a className="crimson-text" href="https://www.facebook.com/defensivefit/"
                                        target="_blank" rel="noopener noreferrer">
                                        <Facebook/>
                                    </a>

                                    <a className="crimson-text" href="https://www.instagram.com/defensivefit/"
                                        target="_blank" rel="noopener noreferrer">
                                        <Instagram/>
                                    </a>

                                    <a className="crimson-text" href="https://twitter.com/DefensiveFit" target="_blank"
                                        rel="noopener noreferrer">
                                        <Twitter/>
                                    </a>

                                    <a className="crimson-text"
                                        href="https://www.youtube.com/channel/UCDzDABmqEGzBlIl58w6IkEw" target="_blank"
                                        rel="noopener noreferrer">
                                        <Youtube/>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mt-2 col-12 col-md-12 col-lg-4">
                        <div className="w-100 h-100 position-relative">
                            <img className="img-fluid rounded-1" src="images/Valerie Flax.png" alt="Valerie" />

                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <h2 className="mt-3 text-dark bolden">Valerie Flax</h2>
                                <h6 className="text-dark text-center">A NASM-certified fitness instructor since 2016. Owns
                                    The Goodburn
                                    fitness business, specializes in circuit training,
                                    barre, and boxing to enhance clients' fitness.</h6>

                                <div className="mt-3 gap-3 d-flex justify-content-center">

                                    <a className="crimson-text" href="https://www.instagram.com/the_goodburn/"
                                        target="_blank" rel="noopener noreferrer">
                                        <Instagram/>
                                    </a>

                                    <a className="crimson-text" href="https://www.thegoodburnfitness.com/" target="_blank"
                                        rel="noopener noreferrer">
                                        <Website/>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mt-2 col-12 col-md-12 col-lg-4">
                        <div className="w-100 h-100 position-relative">
                            <img className="img-fluid rounded-1" src="images/Vicki D.png" alt="Vicki" />

                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <h2 className="mt-3 text-dark bolden">Vicki D</h2>
                                <h6 className="text-dark text-center">A coach and entrepreneur who can help you achieve a fulfilling and
                                    balanced life. Juggling multiple responsibilities can
                                    be challenging, but navigating obstacles defines our success.</h6>

                                <div className="mt-3 gap-3 d-flex justify-content-center">

                                    <a className="crimson-text" href="https://www.instagram.com/vicki.d3/" target="_blank"
                                        rel="noopener noreferrer">
                                        <Instagram/>
                                    </a>

                                    <a className="crimson-text" href="https://www.tiktok.com/@vickid1" target="_blank"
                                        rel="noopener noreferrer">
                                        <Tiktok/>
                                    </a>

                                    <a className="crimson-text" href="https://vickid.me/" target="_blank"
                                        rel="noopener noreferrer">
                                        <Website/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="benefits">
            <div className="py-5 container">
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <h1 className="px-5 pb-3 crimson-text bolden">Here are some of the benefits you can
                            expect
                            from joining
                            our
                            community:</h1>

                        <ul className="px-5 ms-5 mt-3 text-dark">
                            <li className="mb-4">
                                <p className="h4">
                                    Learn self-defense techniques that work for your body type and skill level
                                </p>
                            </li>
                            <li className="mb-4">
                                <p className="h4">
                                    Build physical fitness through customized workout plans and group classes
                                </p>
                            </li>
                            <li className="mb-4">
                                <p className="h4">
                                    Enhance mental wellness with mindfulness practices, stress-reduction techniques,
                                    and
                                    touch
                                    upon emotional healing after trauma
                                </p>
                            </li>
                            <li className="mb-4">
                                <p className="h4">
                                    Connect with other like-minded individuals who share your values and goals
                                </p>
                            </li>
                            <li className="mb-4">
                                <p className="h4">
                                    Access resources and support to help you stay safe and healthy
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-lg-5 d-none d-lg-block">
                        <img className="img-fluid" src="images/Artboard 1 copy 2.png" alt="Happy women" />
                    </div>
                </div>
            </div>
        </section>

        <Subscription/>
    </Fragment>;
}
