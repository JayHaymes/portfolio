import React, { useState } from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import linkedin_icon from '../../assets/linkedin_icon.svg';

const Contact = () => {
    const [result, setResult] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult('Sending...');
        const formData = new FormData(event.target);
    
        formData.append('access_key', 'b84ba04e-5435-46ec-baf9-65d02eb17ef6');
    
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult('Form Submitted Successfully');
          alert('Form Submitted Successfully');
          event.target.reset();
        } else {
          console.log('Error', data);
          setResult(data.message);
          alert(`Error: ${data.message}`);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className='contact-title'>
                <h1>Get in touch</h1>
            </div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <h1>Let's talk</h1>
                    <p>I'm currently available for work, if you're interested in my services you can contact me anytime!</p>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <img src={mail_icon} alt='Email Icon' /><p>jjhaymes23@gmail.com</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={call_icon} alt='Call Icon' /><p>708-420-5577</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={location_icon} alt='Location Icon' /><p>Chicago, Illinois</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={linkedin_icon} alt='LinkedIn Icon' /><p><a href='https://www.linkedin.com/in/jeffrey-haymes/' target='_blank' rel='noopener noreferrer'>https://www.linkedin.com/in/jeffrey-haymes/</a></p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name' required />
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' placeholder='Enter your email' name='email' required />
                    <label htmlFor='message'>Write your message here</label>
                    <textarea name='message' rows='8' placeholder='Enter your message' required></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
