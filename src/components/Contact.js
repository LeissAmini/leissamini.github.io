import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
import React, { useState } from 'react'
init("6c70mI3NgGyfZDlAG");
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const submit = () => {
        if (name && email && message && isValidEmail()) {
            const serviceId = 'service_hsqmqln';
            const templateId = 'template_1dknjeh';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams)
                .then(response => console.log(response))
                .then(error => console.log(error));

            alert("Thank you for your message, I will be in touch in no time!")
            setName('');
            setEmail('');
            setMessage('');
        } else {
            alert('Please fill in all fields.');
        }
    }

    function isValidEmail() {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    return (
        <div className="container text-left dynamicWidth25">
            <div id="inputName" role="group" className="form-group pt-3">
                <label id="inputNameLabel" for="inputName" className="d-block  ">
                    Name
                </label>
                <input id="inputName" type="name" placeholder="Your Name" required="required" aria-required="true" className="form-control" value={name} onChange={e => setName(e.target.value)}></input>
            </div>
            <div id="inputEmail" role="group" className="form-group ">
                <label id="inputEmailLabel" for="inputEmail" className="d-block  ">
                    Email Address
                </label>
                <input id="inputEmail" type="email" placeholder="Enter email" required="required" aria-required="true" className="form-control" value={email} onChange={e => setEmail(e.target.value)}></input>
            </div>
            <div id="inputMessage" role="group" className="form-group">
                <label id="inputMessageLabel" for="inputMessage" className="d-block ">
                    Message
                </label>
                <textarea id="inputMessage" type="email" placeholder="Enter your Message" required="required" aria-required="true" className="form-control" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            </div>
            <div className="text-center pt-3">
                <button type="submit" className="btn w-50 btn-primary" onClick={submit}>Submit</button>
            </div>
        </div>
    )
}

export default Contact