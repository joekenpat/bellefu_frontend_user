import React from 'react';
import {FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa';

export default function ContatcPage() {
    return (
        <div>
            <div className="container">
                <div className="card border-0" style={{marginTop: '10%'}}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <form>
                                    <div className="form-row">
                                        <div>
                                            <h1>CONTACT US</h1>
                                            <p style={{opacity: '0.7'}}>
                                                Get in touch with us let us know how we can help.
                                            </p>
                                        </div>

                                        <div className="col-12 mt-3">
                                            <input type="text" className="form-control" placeholder="First name" />
                                        </div>

                                        <div className="col-12 mt-3">
                                            <input type="email" className="form-control" placeholder="email" />
                                        </div>

                                        <div className="col-sm-12 mt-3">
                                            <input type="text" className="form-control " placeholder="phone" />
                                        </div>

                                        <div className="col-12 mt-3">
                                            <textarea className="form-control" rows="3" placeholder="comment" />
                                        </div>

                                        <div className="col-12 mt-3">
                                            <button
                                                type="button"
                                                className="btn btn-block "
                                                style={{background: '#FFA500', color: '#Fff'}}>
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <h5 style={{fontWeight: 'bold', paddingTop: '5%'}}>Head Office</h5>
                                <p style={{opacity: '0.7', fontWeight: 'bold', fontSize: '0.8em'}}>
                                    9550 Forestlane Dallas 75243, Dallas,TX, US
                                </p>

                                <h5 style={{fontWeight: 'bold'}}>Phone</h5>
                                <p style={{opacity: '0.7', fontWeight: 'bold', fontSize: '0.8em'}}>
                                    +1 (214) 447-5585 USA
                                </p>
                                <p style={{opacity: '0.7', fontWeight: 'bold', fontSize: '0.8em'}}>
                                    +234-813 668 6060 Nigeria
                                </p>
                                <p style={{opacity: '0.7', fontWeight: 'bold', fontSize: '0.8em'}}>
                                    +27 74 749 0611 South Arica
                                </p>

                                <h5 style={{fontWeight: 'bold'}}>Email</h5>
                                <p style={{opacity: '0.7', fontWeight: 'bold', fontSize: '0.8em'}}>
                                    contact@bellefu.com
                                </p>
                                <a href="https://web.facebook.com/Bellefu.official">
                                    <FaFacebook style={{fontSize: '20px', color: 'black'}} />
                                </a>
                                <a href=" https://instagram.com/bellefu_official">
                                    <FaInstagram style={{fontSize: '20px', color: 'black', marginLeft: '20px'}} />
                                </a>
                                <a href=" https://www.linkedin.com/company/bellefu">
                                    <FaLinkedinIn style={{fontSize: '20px', color: 'black', marginLeft: '20px'}} />
                                </a>
                                <a href="https://twitter.com/bellefuofficial">
                                    <FaTwitter style={{fontSize: '20px', color: 'black', marginLeft: '20px'}} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
