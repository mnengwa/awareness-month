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

                <h2 className="w-100 my-5 text-center crimson-text">
                        Stay in the know with our Newsletter & learn more about physical, wellness & mental awareness
                        and more!
                </h2>
            </div>

            <form method="POST" onSubmit={onKlaviyoMailSubscription} className="d-flex justify-content-center">
                <div className="row w-75 g-4">
                    <div className="col-12 col-lg-6">
                        <input type="text" name="first_name" value={form?.first_name} onChange={onInputChange} className="form-control form-control-lg rounded-1"
                            placeholder="First name" />
                    </div>
                    
                    <div className="col-12 col-lg-6">
                        <input type="text" name="last_name" value={form?.last_name} onChange={onInputChange} className="form-control form-control-lg rounded-1"
                            placeholder="Last name" />
                    </div>

                    <div className="col-12 col-lg-6">
                        <input type="email" name="email" value={form?.email} onChange={onInputChange} className="form-control form-control-lg rounded-1"
                            placeholder="Email address" />
                    </div>

                    <div className="col-12 col-lg-6">
                        <input type="tel" name="phone_number" value={form?.phone_number} onChange={onInputChange} className="form-control form-control-lg rounded-1"
                            placeholder="Phone" />
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
                                Sign Up
                        </button>
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
    </section>;
};

export default Subscription;