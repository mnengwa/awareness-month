"use client";

import { message } from 'antd';
import { useState } from "react";

const Button = ({slot, title, onClick}) => {
    const [loading, setLoading] = useState(false);
    
    return <button 
        type="button"
        style={{border: 'none', outline: 'none'}}
        className="btn btn-lg bg-black text-light"
        onClick={(event) => onClick({event, slot, setLoading})}>
        {loading ? <span className="me-3 spinner-grow spinner-grow-sm" role="status" aria-hidden="true"/> : null}

        {title}
    </button>;
};


const CallToAction = () => {
    const [toast, toastContext] = message.useMessage();
    const [form, setForm] = useState({first_name: '', email: ''});

    const onInputChange = (event) => {
        event.preventDefault();
        setForm({...form, [event.target.name] : event.target.value});
    };

    const onRegistrationRequest = ({event, slot, setLoading}) => {
        event.preventDefault();

        const url = `/api/register?slot=${slot}`;

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
                    setForm({first_name: '', email: ''});
                    toast.info(data?.message);
                    return;
                }

                toast.error(data?.message);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    };

    return <header id="billboard" className="gray-background">
        <div className="py-5 container">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-7">
                    <div className="w-100 h-100 d-flex flex-column">
                        <p className="p-5 pb-0 lead text-dark">
                                April is Sexual Assault Awareness Month, a time to raise awareness about sexual violence
                                and educate our communities
                                about prevention strategies.
                        </p>

                        <p className="p-5 pt-0 pb-3 lead text-dark">
                            Join us on April 29th at 10 a.m. or 11 a.m. for a FREE session where we&amp;ll cover self-defense techniques, get a quick physical fitness lesson, and engage in mindfulness and mental wellness.
                        </p>

                        <p className="p-5 pt-0 pb-3 lead text-dark">
                            Space is limited! Refreshments will be served.
                        </p>


                        <div className='d-flex flex-column align-items-center'>
                            <h2 className='bolden text-center crimson-text'>Sign up today!</h2>
                            <hr className='w-25 text-center' />
                        </div>

                        <form method='POST' className='row gap-4 pb-5'>
                            <div className='col-12 col-md-8 offset-md-2'>
                                <input type="text" name="first_name" value={form?.first_name} onChange={onInputChange} className="form-control form-control-lg rounded-1"
                                    placeholder="First name" />
                            </div>

                            <div className='col-12 col-md-8 offset-md-2'>
                                <input type="email" name="email" value={form?.email} onChange={onInputChange} className="form-control form-control-lg rounded-1"
                                    placeholder="Email address" />
                            </div>

                            <div className='col-12 col-md-8 offset-md-2'>
                                <div className="row">
                                    <div className='col-6 col-lg-6'>
                                        <Button slot={10} title="Sign me up for the 10AM event" onClick={onRegistrationRequest}/>
                                    </div>

                                    <div className='col-6 col-lg-6 d-flex justify-content-end'>
                                        <Button slot={11} title="Sign me up for the 11AM event!" onClick={onRegistrationRequest}/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-5 d-flex align-items-center justify-content-center">
                    <img className="img-fluid rounded-2" src="images/Sexual-Assault-Month 1.png"
                        alt="Empower emotional, mental, physical wellness & resiliance" />
                </div>
            </div>
        </div>
    </header>;
};

export default CallToAction;