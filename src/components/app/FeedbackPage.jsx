import React from 'react';

export default function FeedbackPage() {
    return (
        <div className="container">
            <div style={{maxWidth: '700px', margin: 'auto', marginTop: "5%"}}>
                <div class="card border-0">
                    <div class="card-body">
                        <form>
                            <div class="form-row">
                                <div class="text-center">
                                    <h1>FEEDBACK</h1>

                                    <p>
                                        Have a complaint or query about any of the products or ads on our website?
                                        Please use the form below to let us know about it.
                                    </p>
                                </div>

                                <div class="col-12 mt-3">
                                    <input type="text" class="form-control" placeholder="First name" />
                                </div>

                                <div class="col-12 mt-3">
                                    <input type="text" class="form-control" placeholder="Last name" />
                                </div>

                                <div class="col-12 mt-3">
                                    <input type="email" class="form-control" placeholder="email" />
                                </div>

                                <div class="col-12 mt-3">
                                    <input type="number" class="form-control " placeholder="number" />
                                </div>
                                <div class="col-12 mt-3">
                                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                        <option selected>Department</option>
                                        <option value="1">Ads</option>
                                        <option value="2">Customer service</option>
                                        <option value="3">Custom Request</option>
                                        <option value="3">Feature Request</option>
                                        <option value="3">Others</option>
                                    </select>
                                </div>
                                <div class="col-12 mt-3">
                                    <textarea class="form-control" rows="3" placeholder="comment" />
                                </div>
                                <div class="col-12 mt-3">
                                    <button
                                        type="button"
                                        class="btn btn-block"
                                        style={{background: '#FFA500', color: 'white'}}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
