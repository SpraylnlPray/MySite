import React from 'react';
import emailjs from 'emailjs-com';
import '../../css/mobile/Contact.css';

class Contact extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { message: '', from_name: '', reply_to: '' };
    this.handleChange = this.handleChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }

  handleChange( e ) {
    e.stopPropagation();
    const name = e.target.name;
    const value = e.target.value;
    this.setState( { [ name ]: value } )
  }

  handleSubmit( e ) {
    e.stopPropagation();
    // eslint-disable-next-line no-undef
    const templateId = process.env.TEMPLATE_ID;
    // eslint-disable-next-line no-undef
    const serviceId = process.env.SERVICE_ID;
    // eslint-disable-next-line no-undef
    const userId = process.env.USER_ID;

    this.sendMessage( serviceId, userId, templateId, { ...this.state } )
  }

  sendMessage( serviceId, userId, templateId, variables ) {
    emailjs.send(
      serviceId, templateId,
      variables, userId
    )
      .then( () => console.log( 'Success' ) )
      .catch( err => console.error( 'Error: ' + err.message ) )
  }

  render() {
    return (
      <div id='mobile-contact-container' >
        <div id='mobile-contact-header'>Get in Touch</div>
        <form id='mobile-contact-form'>
          <div id='mobile-contact-name-container' className='mobile-form-input'>
            <label htmlFor='from_name' required>Your Name</label>
            <input type='text' name='from_name' id='from_name' placeholder='Mr. Master Disaster' onChange={this.handleChange} value={this.state.from_name} required />
          </div>
          <div id='mobile-contact-from-container' className='mobile-form-input'>
            <label htmlFor='reply_to' required>Your Email</label>
            <input type='email' name='reply_to' id='reply_to' placeholder='example@mail.com' onChange={this.handleChange} value={this.state.reply_to} required />
          </div>
          <div id='mobile-contact-message-container' className='mobile-form-input'>
            <label htmlFor='message'>Your Message</label>
            <textarea id='message' name='message' placeholder='Hey there!' required onChange={this.handleChange} value={this.state.message} />
          </div>
          <button type='button' onClick={this.handleSubmit}>Send!</button>
        </form>
      </div>
    );
  }
}

export default Contact;