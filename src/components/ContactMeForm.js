import React, { Component } from 'react'
import './ContactMeForm.css'

export default class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = { fName: '', lName: '', company: '', email: '', phone: '', message: '' }

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
         <h1 className='brandTitle'>Contact Me</h1>

         <div className='form-group'>
           <input placeholder='First Name:' className='form-control' type='text' value={this.state.fName} onChange={this.handleChange} name='fName' />
           <input placeholder='Last Name:' className='form-control' type='text' value={this.state.lName} onChange={this.handleChange} name='lName' />
         </div>
         <div className='form-group'>
           <input placeholder='Email:' className='form-control' type='text' value={this.state.email} onChange={this.handleChange} name='email' />
           <input placeholder='Phone:' className='form-control' type='tel' value={this.state.phone} onChange={this.handleChange} name='phone' />
         </div>
         <textarea placeholder='Message:' className='form-control' type='text' value={this.state.message} onChange={this.handleChange} name='message' />
         <input type="submit" className='form-control' value="Send Message"  />
       </form>
    )
  }
}