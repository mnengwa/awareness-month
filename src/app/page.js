import Image from 'next/image'
import { Fragment } from 'react'

export default function Home() {
    return <Fragment>
        <div id="hero" className="w-100 position-relative">
            <img className="mt-4 ms-5 img-fluid position-absolute" width="100" src="images/logo.png"
                alt="Empower emotional, mental, physical wellness & resiliance" />

            <div id="hero-content"
                className="w-100 h-100  d-flex position-relative container flex-column justify-content-center">
                <h1 className="text-light bolden display-2">Protect Yourself & Empower Your Mind & Body</h1>

                <h2 className="mt-2 text-light"><span className="bolden">April</span> - Sexual Assault Awareness
                    Month</h2>
            </div>
        </div>

        <header id="billboard" className="gray-background">
            <div className="py-5 container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-7">
                        <div className="w-100 h-100 d-flex flex-column">
                            <p className="p-5 pb-0 lead text-dark">
                                April is Sexual Assault Awareness Month, a time to raise awareness about sexual violence
                                and educate our communities
                                about prevention strategies.
                            </p>

                            <p className="p-5 pt-0 lead">
                                Join us on April 29th for a FREE workout class and self-defense lesson!
                            </p>

                            <div className="p-5 pt-0 pe-0 gap-4 d-flex flex-wrap">
                                <a href="" className="btn btn-lg bg-black text-light">Register for 10 AM classes</a>

                                <a href="" className="btn btn-lg bg-black text-light">Register for 11 AM classes</a>
                            </div>

                            <p className="p-5 pt-0 lead">
                                <strong style={{fontWeight: "bold"}}>Location</strong>: Defensive Fit | 425 Springfield
                                Ave, Berkeley Heights, NJ
                                07922
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                        <img className="img-fluid rounded-2" src="images/Sexual-Assault-Month 1.png"
                            alt="Empower emotional, mental, physical wellness & resiliance" />
                    </div>
                </div>
            </div>
        </header>

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
                            at 33 of the nation&apos;s major universities</p>
                    </div>
                    <div className="mt-2 col-12 col-md-6 col-lg-4">
                        <img className="w-75 img-fluid" src="images/51.1-pc.png" />
                        <p className="lead">About half (51.1%) of female victims of rape reported being raped by an intimate
                            partner and 40.8% by an acquaintance</p>
                    </div>
                </div>
            </div>
        </main>

        <div id="call-to-action" className="crimson-background">
            <div className="py-5 container">
                <h2 className="mb-5 text-light text-center">
                    One important way to stay safe and reduce the risk of assault is to learn self-defense techniques
                    and develop physical
                    and mental strength.
                </h2>

                <div className="p-5 pt-0 pe-0 gap-4 d-flex flex-wrap justify-content-center">
                    <a href="" className="btn btn-lg bg-black text-light">Register for 10 AM classes</a>

                    <a href="" className="btn btn-lg bg-black text-light">Register for 11 AM classes</a>
                </div>

                <p className="lead text-light text-center">
                    <strong>Location</strong>: Defensive Fit | 425 Springfield Ave, Berkeley Heights, NJ 07922
                </p>
            </div>
        </div>

        <section id="personalities" className="gray-background">
            <div className="py-5 container">
                <h1 className="text-center crimson-text bolden">Meet the team</h1>

                <h4 className="mt-4 text-center" style={{fontWeight: "bolder"}}>Hi, we are Andre, Valerie and Vicki</h4>

                <div className="my-3 row">
                    <div className="col-12 col-md-8 offset-md-2">
                        <p className="lead text-center">
                            We&apos;re partnering to empower you holistically and prevent assault. We&apos;ll equip you with
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
                                <h5 className="text-dark text-center">With 20+ years in martial arts and fitness, Andre
                                    coaches
                                    self-defense in his business at Berkeley Heights, NJ. Trained
                                    in Boxing, Jeet Kune Do, and Filipino Martial Arts.</h5>

                                <div className="mt-3 gap-3 d-flex justify-content-center">
                                    <a className="crimson-text" href="https://www.facebook.com/defensivefit/"
                                        target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                            <path
                                                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg>
                                    </a>

                                    <a className="crimson-text" href="https://www.instagram.com/defensivefit/"
                                        target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                            <path
                                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                        </svg>
                                    </a>

                                    <a className="crimson-text" href="https://twitter.com/DefensiveFit" target="_blank"
                                        rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                            <path
                                                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                        </svg>
                                    </a>

                                    <a className="crimson-text"
                                        href="https://www.youtube.com/channel/UCDzDABmqEGzBlIl58w6IkEw" target="_blank"
                                        rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                                            <path
                                                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                        </svg>
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
                                <h5 className="text-dark text-center">A NASM-certified fitness instructor since 2016. Owns
                                    The Goodburn
                                    fitness business, specializes in circuit training,
                                    barre, and boxing to enhance clients&apos; fitness.</h5>

                                <div className="mt-3 gap-3 d-flex justify-content-center">

                                    <a className="crimson-text" href="https://www.instagram.com/the_goodburn/"
                                        target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                            <path
                                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                        </svg>
                                    </a>

                                    <a className="crimson-text" href="https://www.thegoodburnfitness.com/" target="_blank"
                                        rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor" className="bi bi-globe2" viewBox="0 0 16 16">
                                            <path
                                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mt-2 col-12 col-md-12 col-lg-4">
                        <div className="w-100 h-100 position-relative">
                            <img className="img-fluid rounded-1" src="images/Vicki D.png" alt="Vicki" />

                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <h2 className="mt-3 text-dark bolden">Vicki</h2>
                                <h5 className="text-dark">A coach and entrepreneur who can help you achieve a fulfilling and
                                    balanced life. Juggling multiple responsibilities can
                                    be challenging, but navigating obstacles defines our success.</h5>

                                <div className="mt-3 gap-3 d-flex justify-content-center">

                                    <a className="crimson-text" href="https://www.instagram.com/vicki.d3/" target="_blank"
                                        rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                            <path
                                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                        </svg>
                                    </a>

                                    <a className="crimson-text" href="https://www.tiktok.com/@vickid1" target="_blank"
                                        rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
                                            <path
                                                d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                                        </svg>
                                    </a>

                                    <a className="crimson-text" href="https://vickid.me/" target="_blank"
                                        rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor" className="bi bi-globe2" viewBox="0 0 16 16">
                                            <path
                                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                                        </svg>
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

        <section id="registration">
            <div className="py-5 container">
                <div className="d-flex flex-column align-items-center">
                    <h1 className="w-75 text-light text-center bolden">Whether you&apos;re new to self-defense and fitness or
                        you&apos;re a
                        seasoned
                        pro, we
                        welcome you to
                        our community.</h1>

                    <h2 className="w-100 my-5 text-center crimson-text">
                        Stay in the know with our Newsletter & learn more about physical, wellness & mental awareness
                        and more!
                    </h2>
                </div>

                <form action="" method="POST" className="d-flex justify-content-center">
                    <div className="row w-75 g-4">
                        <div className="col-12 col-lg-6">
                            <input type="text" name="name" className="form-control form-control-lg rounded-1"
                                placeholder="Name" />
                        </div>

                        <div className="col-12 col-lg-6">
                            <input type="email" name="email" className="form-control form-control-lg rounded-1"
                                placeholder="Email" />
                        </div>

                        <div className="col-12 col-lg-6">
                            <input type="tel" name="phone" className="form-control form-control-lg rounded-1"
                                placeholder="Phone" />
                        </div>

                        <div className="col-12 col-lg-6">
                            <input type="text" name="location" className="form-control form-control-lg rounded-1"
                                placeholder="Location (optional)" />
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <button type="submit" className="px-5 btn btn-lg crimson-background text-light rounded-1"
                                id="registration-button">Sign
                                Up</button>
                        </div>
                    </div>
                </form>

                <div className="row g-4 my-5">
                    <div className="col-12">
                        <h3 className="text-light text-center">Location: Defensive Fit | 425 Springfield Ave, Berkeley
                            Heights,
                            NJ
                            07922</h3>

                    </div>

                    <div className="col-12">
                        <h2 className="text-light text-center">Sign up now! Space is limited. Refreshments will be served.
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
}