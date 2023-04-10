"use client";

import { message } from 'antd';
import { useState } from "react";

const Subscription = () => {
    const [loading, setLoading] = useState(false);
    const [toast, toastContext] = message.useMessage();
    const [form, setForm] = useState({first_name: '', last_name: '', email: '', phone_number: '', location: ''});

    const onInputChange = (event) => {
        event.preventDefault();
        setForm({...form, [event.target.name] : event.target.value});
    };
    
    const onKlaviyoMailSubscription = (event) => {
        event.preventDefault();

        const url = "/api/subscribe";

        const init = {
            method: "POST",
            body: JSON.stringify(form),
            headers: {accept: 'application/json', 'content-type': 'application/json'},
        };

        setLoading(true);

        fetch(url, init)
            .then((resp) => resp.json())
            .then((data) => {
                if (data?.success) {
                    setForm({first_name: '', last_name: '', email: '', phone_number: '', location: ''});
                    toast.info(data?.message);
                    return;
                }

                toast.error(data?.message);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    };

    return <section id="subscription" style={{background: '#000000'}}>
        {toastContext}

        <div className="py-5 container">
            <div className="d-flex flex-column align-items-center">
                <h1 className="w-75 text-light text-center bolden">Whether you&apos;re new to self-defense and fitness or
                        you&apos;re a
                        seasoned
                        pro, we
                        welcome you to
                        our community.</h1>
            </div>

            <div className="row my-5 g-4 g-md-5">
                <div className="col-12 col-lg-7 col-xl-6">
                    <h2 className="w-100 text-center crimson-text">
                        Stay in the know with our newsletter!
                    </h2>

                    <form method="POST" onSubmit={onKlaviyoMailSubscription} className="mt-3 d-flex justify-content-center">
                        <div className="row w-100 g-4">
                            <div className="col-12 col-md-6">
                                <input type="text" name="first_name" value={form?.first_name} onChange={onInputChange} className="form-control form-control-lg rounded-1"
                                    placeholder="First name" />
                            </div>

                            <div className="col-12 col-md-6">
                                <input type="text" name="last_name" value={form?.last_name} onChange={onInputChange} className="form-control form-control-lg rounded-1"
                                    placeholder="Last name" />
                            </div>

                            <div className="col-12 col-lg-6">
                                <input type="email" name="email" value={form?.email} onChange={onInputChange} className="form-control form-control-lg rounded-1"
                                    placeholder="Email address" />
                            </div>

                            <div className="col-12 col-lg-6">
                                <input type="tel" name="phone_number" value={form?.phone_number} onChange={onInputChange} className="form-control form-control-lg rounded-1"
                                    placeholder="Phone (optional)" />
                            </div>

                            <div className="col-12">
                                <input type="text" name="location" value={form?.location} onChange={onInputChange} className="form-control form-control-lg rounded-1"
                                    placeholder="Location (optional)" />
                            </div>

                            <div className="col-12 d-flex justify-content-center">
                                <button 
                                    type="submit"
                                    disabled={loading}
                                    style={{border: 'none', outline: 'none'}}
                                    className="px-5 btn btn-lg crimson-background text-light rounded-1">
                                    {loading ? <span className="me-3 spinner-grow spinner-grow-sm" role="status" aria-hidden="true"/> : null}
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="col-12 col-lg-5 col-xl-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.4820212215204!2d-74.44145858459586!3d40.68538057933474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ade63c6e571f%3A0xb617f304393d7b46!2sDefensiveFit%20-%20Combat%20Cross%20Training!5e0!3m2!1sen!2ske!4v1681149424109!5m2!1sen!2ske" 
                        className='w-100 h-100 border-0 rounded' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div className="row g-4 my-5">
            
                <div className="col-12">
                    <a href="#call-to-action">
                        <h2 className="text-light text-center" style={{lineHeight: 1.5}}>
                            Click to sign-up now! Space is limited.
                            <br/>
                            Refreshments will be served.
                        </h2>
                    </a>
                </div>
            </div>
        </div>
    </section>;
};

export default Subscription;