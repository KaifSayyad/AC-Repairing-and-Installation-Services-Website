import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const BookCustomerModal = () => {

    const [mobileNumber, setMobileNumber] = useState('');
    const form = useRef();
    
    let serviceID = import.meta.env.VITE_REACT_APP_EMAIL_JS_SERVICE_ID;
    let templateID = import.meta.env.VITE_REACT_APP_EMAIL_JS_TEMPLATE_ID;
    let publicKey = import.meta.env.VITE_REACT_APP_EMAIL_JS_PUBLIC_KEY;


    const handleMobileNumberChange = (event) => {
        const sanitizedInput = event.target.value.replace(/\D/g, '');

        setMobileNumber(sanitizedInput);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                toast.success("Successfully Sent")
            }, (error) => {
                console.log(error.text);
                toast.error(error.text)
            });
    }


    return (
        <>
            <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ backgroundColor: '#020202b0' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <form ref={form} onSubmit={handleSubmit}>
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Your Details</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" placeholder='Full name' id="from_name" name="from_name" aria-describedby="addon-wrapping" required />
                                        <label htmlFor="from_name">
                                            <Icon icon="icon-park-outline:edit-name" />  Name
                                        </label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" placeholder="name@example.com" id="from_email" name="from_email" aria-describedby="addon-wrapping" required />
                                        <label htmlFor="from_email">
                                            <Icon icon="line-md:email-twotone" />  Email address
                                        </label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder='Mobile Number'
                                            aria-describedby="addon-wrapping"
                                            id="mobile_no"
                                            name="mobile_no"
                                            value={mobileNumber}
                                            onChange={handleMobileNumberChange}
                                            required
                                        />
                                        <label htmlFor="from_mobile">
                                            <Icon icon="ic:outline-phone" />  Mobile Number (+91)
                                        </label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" id='address' name='address' placeholder="Address" required />
                                        <label htmlFor="from_address">
                                            <Icon icon="lucide:map-pin" />  Address
                                        </label>
                                    </div>
                                </div>
                                <div className="text-center" style={{ marginBottom: '20px' }}>
                                    <button type="submit " className="btn btn-success" style={{ width: '200px', borderRadius: '50px', }}>
                                        Send <Icon icon="cil:send" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookCustomerModal;
