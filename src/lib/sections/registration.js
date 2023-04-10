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

const Registration = () => {
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

    return <div id="call-to-action" className="crimson-background">
        {toastContext}
        <div className="py-5 container">
            <h2 className="mb-5 text-light text-center">
                    One important way to stay safe and reduce the risk of assault is to learn self-defense techniques
                    and develop physical
                    and mental strength.
            </h2>

            <div className='d-flex flex-column align-items-center'>
                <h2 className='text-light text-center bolden'>Sign-up today!</h2>
                <hr className='w-25 text-center' />
            </div>

            <form method='POST' className='row gap-4 pb-5'>
                <div className='col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
                    <input type="text" name="first_name" value={form?.first_name} onChange={onInputChange} className="form-control form-control-lg rounded-1"
                        placeholder="First name" />
                </div>

                <div className='col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
                    <input type="email" name="email" value={form?.email} onChange={onInputChange} className="form-control form-control-lg rounded-1"
                        placeholder="Email address" />
                </div>

                <div className='col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
                    <div className="gap-4 d-flex flex-wrap justify-content-center">
                        <Button slot={10} title="10 AM classes" onClick={onRegistrationRequest}/>

                        <Button slot={11} title="11 AM classes" onClick={onRegistrationRequest}/>
                    </div>
                </div>
            </form>

            <p className="lead text-light text-center">
                <strong>Location</strong>: Defensive Fit | 425 Springfield Ave, Berkeley Heights, NJ 07922
            </p>
        </div>
    </div>;
};

export default Registration;