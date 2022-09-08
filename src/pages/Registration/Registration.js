import './Registration.css';

import React from 'react';

import regFirstImg from '../../images/clip-research 1.png';
import regLogo from '../../images/Logo (4).png';
import institute from '../../images/office building.png';
import humanLogo from '../../images/Vector (34).png';
import mobileLogo from '../../images/Vector (35).png';
import email from '../../images/Vector (36).png';

const Registration = () => {
    return (
        <div className='container-fluid registration-container py-5'>
            <div className="container py-3  registration-bg">

                <div className="row align-items-center justify-content-between ">
                    <div className="col-md-4 ">
                        <img className='w-100 ps-3 ' src={regFirstImg} alt="" />
                        <h3 className=' py-4 ps-3 reg-content-title text-center'>Already have an Account? <span className='login'>Login</span></h3>

                    </div>
                    <div className="col-md-7">
                        <div className='d-flex py-5 '>
                            <div className='pe-5'>
                                <img src={regLogo} alt="" />

                            </div>

                            <div>
                                <h3 className='reg-title'>The Awesome Company</h3>
                                <h6 className='reg-content'>The next generation awesomeness is here</h6>
                            </div>
                        </div>


                        <div>
                            <h1 className='registration-main-title'>Create a New Account</h1>
                            <hr className='vertical' />
                        </div>

                        <div className='d-flex pt-4'>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                <label class="form-check-label" for="exampleRadios1">
                                    Individual
                                </label>
                            </div>
                            <div class="form-check ps-5 ">
                                <input class="  form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                <label class="form-check-label" for="exampleRadios1">
                                    Institute/Organization
                                </label>
                            </div>


                        </div>


                        <div className='pt-3'>

                            <div>
                                <label className='lavel pb-1'>Name</label>
                                <form className='p-3'>
                                    <img className='px-2 me-3 human-logo' src={humanLogo} alt="" />
                                    <input type="text" required placeholder='Type your full name here' />
                                </form>
                            </div>

                            <div className='py-4'>
                                <label className='lavel pb-1'>Type of Institution/Organization *</label>
                                <form className='p-2'>
                                    <img className='ms-3 mt-2 me-3 institue-logo' src={institute} alt="" />

                                    <select class="form-select" aria-label=".form-select-lg example">
                                        <option className='select-content' required selected>Choose one</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </form>
                            </div>

                            <div>
                                <label className='lavel pb-1'>Institution/Organization *</label>
                                <form className='p-2'>
                                    <img className='ms-3 mt-2 me-3 institue-logo' src={institute} alt="" />

                                    <select class="form-select" aria-label=".form-select-lg example">
                                        <option className='select-content' required selected>Choose one</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </form>
                            </div>

                            <div className='py-4'>
                                <label className='lavel pb-1'>Mobile Number</label>
                                <form className='p-3'>
                                    <img className='px-2 mt-1 me-3 mobile-logo' src={mobileLogo} alt="" />
                                    <input type="text" required placeholder='Type your 11-digit Mobile Number' />
                                </form>
                            </div>
                            <div>
                                <label className='lavel pb-1'>Email Address</label>
                                <form className='p-3'>
                                    <img className='px-2 me-3 mt-1 email-logo ' src={email} alt="" />
                                    <input type="text" required placeholder='Type Your Email Address' />
                                </form>
                            </div>

                        </div>

                        <div class="form-check py-3">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                I agree to the <span className='check-color'>Terms of Use</span> and <span className='check-color'>Privacy Policy</span>
                            </label>
                        </div>

                        <button className='reg-button border-0 mb-5 mt-3'>Create Account</button>

                    </div>
                </div>
            </div>
            <p className='text-center reg-footer pt-4'>© Copyright 2020-2022 The Awesome Company</p>

        </div>
    );
};

export default Registration;