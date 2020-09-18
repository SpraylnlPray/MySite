import React from 'react';
import emailjs from 'emailjs-com';
import '../../../css/mobile/Contact.css';

class Contact extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { inputs: { message: '', from_name: '', reply_to: '' }, success: false, errors: false, loading: false, };
    this.handleChange = this.handleChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }

  handleChange( e ) {
    e.stopPropagation();
    let { inputs } = this.state;
    const name = e.target.name;
    const value = e.target.value;
    inputs[ name ] = value;
    this.setState( { inputs } )
  }

  validateEmail( email ) {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test( String( email ).toLowerCase() );
  }

  handleSubmit( e ) {
    e.stopPropagation();

    let hasInvalidInputs = false;
    const { inputs } = this.state;

    if ( !this.validateEmail( inputs.reply_to ) ) {
      document.getElementById( 'reply_to' ).setCustomValidity( 'invalid' );
      hasInvalidInputs = true;
    }
    else {
      document.getElementById( 'reply_to' ).setCustomValidity( '' );
    }

    if ( inputs.message.length === 0 ) {
      document.getElementById( 'message' ).setCustomValidity( 'invalid' );
      hasInvalidInputs = true;
    }
    else {
      document.getElementById( 'message' ).setCustomValidity( '' );
    }

    if ( inputs.from_name.length === 0 ) {
      document.getElementById( 'from_name' ).setCustomValidity( 'invalid' );
      hasInvalidInputs = true;
    }
    else {
      document.getElementById( 'from_name' ).setCustomValidity( '' );
    }

    if ( hasInvalidInputs ) {
      this.setState( { errors: true } )
      return;
    }
    else {
      this.setState( { errors: false } )
    }

    // eslint-disable-next-line no-undef
    const templateId = process.env.TEMPLATE_ID;
    // eslint-disable-next-line no-undef
    const serviceId = process.env.SERVICE_ID;
    // eslint-disable-next-line no-undef
    const userId = process.env.USER_ID;

    this.setState( { loading: true } )

    this.sendMessage( serviceId, userId, templateId, { ...inputs } )
  }

  sendMessage( serviceId, userId, templateId, variables ) {
    emailjs.send(
      serviceId, templateId,
      variables, userId
    )
      .then( () => this.setState( { success: true, loading: false, inputs: { name: '', from_name: '', reply_to: '' } } ) )
      .catch( err => console.error( 'Error: ' + err.message ) )
  }

  render() {
    const infoText = () => {
      if ( this.state.loading ) {
        return <div className='mobile-info-message' id='mobile-loading'>Loading..</div>;
      }
      if ( this.state.success ) {
        return <div className='mobile-info-message' id='mobile-success'>Success</div>;
      }
      if ( this.state.errors ) {
        return <div className='mobile-info-message' id='mobile-error'>Error</div>;
      }
      return '';
    }
    return (
      <div id='mobile-contact-container' >
        <div id='mobile-contact-header'>Get in Touch</div>
        <form id='mobile-contact-form'>
          <div id='mobile-contact-name-container' className='mobile-form-input'>
            <label htmlFor='from_name' required>Your Name</label>
            <input type='text' name='from_name' id='from_name' placeholder='Mr. Master Disaster' onChange={this.handleChange} value={this.state.from_name} />
          </div>
          <div id='mobile-contact-from-container' className='mobile-form-input'>
            <label htmlFor='reply_to' required>Your Email</label>
            <input type='email' name='reply_to' id='reply_to' placeholder='example@mail.com' onChange={this.handleChange} value={this.state.reply_to} />
          </div>
          <div id='mobile-contact-message-container' className='mobile-form-input'>
            <label htmlFor='message'>Your Message</label>
            <textarea id='message' name='message' placeholder='Hey there!' onChange={this.handleChange} value={this.state.message} />
          </div>
          <div id='mobile-send-area'>
            <span>{infoText()}</span>
            <button type='button' onClick={this.handleSubmit} id='mobile-send-button'>Send!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;