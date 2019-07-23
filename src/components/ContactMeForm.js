import React, { Component } from 'react'
import './ContactMeForm.css'

// Form using Formspree for customers to contact the client.
export default class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', company: '', email: '', phone: '', message: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  
  render() {
    return (
       <form action='https://formspree.io/im.cooperviktor@gmail.com' method='POST' >
         <h3 className='brandTitle1'>Contact Me</h3>
         <div className='form-group'>
            <input placeholder='Name:' className='form-control' type='text' value={this.state.name} onChange={this.handleChange} name='name' />
            <input placeholder='Email:' className='form-control' type='text' value={this.state.email} onChange={this.handleChange} name='email' />
            <input placeholder='Phone:' className='form-control' type='tel' value={this.state.phone} onChange={this.handleChange} name='phone' />
            <textarea placeholder='Message:' className='form-control' type='text' value={this.state.message} onChange={this.handleChange} name='message' />
            <input type="submit" className='form-control submit-button' value="Send Message"  />
         </div>
       </form>
    )
  }
}