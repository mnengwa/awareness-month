/* eslint-disable react/no-unescaped-entities */

const StreetLocation = () => {

    return <div id="street-location" className="crimson-background">
        <div className="py-5 container">
            <h2 className="mb-5 text-light text-center">
                    One important way to stay safe and reduce the risk of assault is to learn self-defense techniques
                    and develop physical
                    and mental strength.
            </h2>

            <div className="row">
                <div className="col-12 col-xl-8 offset-xl-2">
                    <iframe 
                        loading="lazy"
                        allowFullScreen=""
                        style={{height: 300}}
                        className="w-100 border-0 rounded"
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.4820212215204!2d-74.44145858459586!3d40.68538057933474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ade63c6e571f%3A0xb617f304393d7b46!2sDefensiveFit%20-%20Combat%20Cross%20Training!5e0!3m2!1sen!2ske!4v1681149424109!5m2!1sen!2ske" 
                    />

                    <p className="lead text-light text-center">
                        <strong>Location</strong>: Defensive Fit | 425 Springfield Ave, Berkeley Heights, NJ 07922
                    </p>
                </div>
            </div>

        </div>
    </div>;
};

export default StreetLocation;