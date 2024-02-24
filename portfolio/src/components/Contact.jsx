import '../styles/contact.css'
import { useRef } from 'react';

import  emailjs from '@emailjs/browser'

const Contact = () => {

    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_0srb7ce',
            'template_knyn4ap',
            refForm.current,
            'KxX_-xrOYlnQedpc8'
        )
        .then( () => {
            alert('Message Sent!')
            window.location.reload(false)
        },
        () => {
            alert('Message Failed, please try again.')
        })
    }

    return ( 
        <div className="contact">
            <div className="text-area">
                <h1 className="title"> Contact Me</h1>
                <p className='contact-text'> I am interested in freelance opportunities, internships and part-time positions. 
                    However, if you have other requests or questions, don't hesitate to contact me 
                    using the form, and I will get back to you as soon as possible.</p>
            </div>
            <div className="form-area">
                <form ref={refForm} onSubmit={ sendEmail }>
                    <div className="half-area">
                        <input 
                            type="email"
                            placeholder='Email'
                            name='email'
                        />
                        <input 
                            type="text"
                            placeholder='Name'
                            name='name'
                        />
                    </div>
                    <input 
                        type="text"
                        placeholder='Subject'
                        name='subject'
                    />
                    <textarea 
                        placeholder='Message'
                        name='message'
                    />
                    <button className='contact-btn send-btn'> Send Message </button>
                </form>
            </div>
        </div>
    );
}
 
export default Contact;